package cn.ruyijiaoyu.confucianism;

import cn.ruyijiaoyu.confucianism.modules.college.CollegeService;
import cn.ruyijiaoyu.confucianism.modules.student.StudentService;
import cn.ruyijiaoyu.confucianism.modules.successcase.SuccessCaseAdd;
import cn.ruyijiaoyu.confucianism.modules.successcase.SuccessCaseService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import reactor.core.scheduler.Schedulers;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.locks.LockSupport;

/**
 * @author : xiayx
 * @since : 2020-12-10 10:56
 **/
@Slf4j
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class SuccessCaseServiceTest {

    private final AtomicLong serialNumber = new AtomicLong(1);
    @Autowired
    private CollegeService collegeService;
    @Autowired
    private StudentService studentService;
    @Autowired
    private SuccessCaseService successCaseService;

    @Test
    void init() {
        log.info("初始化成功案例");

        Thread thread = Thread.currentThread();
        studentService.query(null)
                .flatMap(studentVO ->
                        collegeService.query(null)
                                .flatMap(collegeVO -> {
                                    SuccessCaseAdd caseAdd = new SuccessCaseAdd();
                                    caseAdd.setPcPhoto("success-case/pc-photo/default.png");
                                    caseAdd.setMobilePhoto("success-case/mobile-photo/default.png");
                                    caseAdd.setTitle(String.format("斩获%s工艺美术专业全国第%s名", collegeVO.getName(), 32));
                                    caseAdd.setCollegeId(collegeVO.getId());
                                    caseAdd.setStudentId(studentVO.getId());
                                    caseAdd.setStudentName(studentVO.getName());
                                    caseAdd.setArtScore(100);
                                    caseAdd.setCourseScore(100);
                                    caseAdd.setRanks(32);
                                    caseAdd.setRemark("默认创建");
                                    caseAdd.setPublishedDate(LocalDate.now());
                                    caseAdd.setSerialNumber(serialNumber.getAndIncrement());
                                    caseAdd.setOperatorId(1L);
                                    return successCaseService.add(caseAdd);
                                }))
//                .repeat(8)
                .doOnComplete(() -> {
                    LockSupport.unpark(thread);
                })
                .subscribeOn(Schedulers.boundedElastic())
                .subscribe((ignored) -> LockSupport.unpark(thread))
        ;

        LockSupport.park(this);
    }
}
