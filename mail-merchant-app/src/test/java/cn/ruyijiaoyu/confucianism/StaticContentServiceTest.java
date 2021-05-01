package cn.ruyijiaoyu.confucianism;

import com.github.peacetrue.classify.ClassifyGet;
import com.github.peacetrue.classify.ClassifyQuery;
import com.github.peacetrue.classify.ClassifyService;
import com.github.peacetrue.staticcontent.StaticContentGenerate;
import com.github.peacetrue.staticcontent.StaticContentService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import reactor.core.scheduler.Schedulers;

import java.util.concurrent.locks.LockSupport;

/**
 * @author : xiayx
 * @since : 2020-12-10 10:56
 **/
@Slf4j
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class StaticContentServiceTest {

    @Autowired
    private StaticContentService staticContentService;
    @Autowired
    private ClassifyService classifyService;

    @Test
    void generateAll() {
        log.info("测试生成");
        Thread thread = Thread.currentThread();
        classifyService.get(new ClassifyGet("pageArea-pc"))
                .flatMapMany(classifyVO -> classifyService.query(ClassifyQuery.fromParentId(classifyVO.getId())))
                .filter(classifyVO -> !classifyVO.getRemark().equals("") && !classifyVO.getCode().endsWith("common"))
                .flatMap(classifyVO -> {
                    String[] parts = classifyVO.getCode().split("-");
                    return staticContentService.generate(new StaticContentGenerate("pc", parts[parts.length - 1]));
                })
//                .doOnComplete(() -> LockSupport.unpark(thread))
                .subscribeOn(Schedulers.boundedElastic())
                .subscribe()
        ;
        LockSupport.park(this);
    }

    @Test
    void generateIndex() {
        generate("index");
    }

    @Test
    void generateAbout() {
        generate("about");
    }

    @Test
    void generateNotice() {
        generate("notice");
    }

    @Test
    void generateOnlineApply() {
        generate("onlineApply");
    }

    @Test
    void generateContact() {
        generate("contact");
    }

    private void generate(String index) {
        Thread thread = Thread.currentThread();
        staticContentService.generate(new StaticContentGenerate("pc", index))
                .doOnError((ignored) -> LockSupport.unpark(thread))
                .doOnSuccess((ignored) -> LockSupport.unpark(thread))
                .subscribeOn(Schedulers.boundedElastic())
                .subscribe(aVoid -> LockSupport.unpark(thread))
        ;
        LockSupport.park(this);
    }
}
