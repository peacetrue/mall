package cn.ruyijiaoyu.confucianism;

import com.github.peacetrue.classify.ClassifyQuery;
import com.github.peacetrue.classify.ClassifyService;
import com.github.peacetrue.classify.ClassifyVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.locks.LockSupport;
import java.util.stream.Collectors;

/**
 * @author : xiayx
 * @since : 2020-12-10 10:56
 **/
@Slf4j
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class ClassifyServiceTest {

    @Autowired
    private ClassifyService classifyService;

    @Test
    void name() {
        Thread thread = Thread.currentThread();
        classifyService
                .query(ClassifyQuery.DEFAULT, PageRequest.of(0, 200))
                .map(Page::getContent)
                .flatMap(vos -> Mono.fromCallable(() -> {
                    List<String> pages = vos.stream().map(ClassifyVO::getRemark).collect(Collectors.toList());
                    Path path = Paths.get("/Users/xiayx/Documents/haohan/confucianism-front-end/pc");
                    return Files.find(path, 1, (path1, basicFileAttributes) -> basicFileAttributes.isRegularFile())
                            .map(temp -> FilenameUtils.getBaseName(temp.getFileName().toString()))
                            .filter(temp -> !pages.contains(temp))
                            .sorted()
                            .collect(Collectors.toList());
                }))
                .doOnSuccess(paths -> {
                    log.info(" paths({}):\n {}", paths.size(), String.join("\n", paths));
                    LockSupport.unpark(thread);
                })
                .subscribeOn(Schedulers.boundedElastic())
                .subscribe()
        ;
        LockSupport.park();
    }
}
