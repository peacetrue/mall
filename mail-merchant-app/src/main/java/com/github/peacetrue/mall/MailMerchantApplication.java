package com.github.peacetrue.mall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;
import reactor.core.publisher.Hooks;

/**
 * @author xiayx
 */
@EnableSpringWebSession
@SpringBootApplication
public class MailMerchantApplication {

    public static void main(String[] args) {
        Hooks.onOperatorDebug();
        SpringApplication.run(MailMerchantApplication.class, args);
    }

}
