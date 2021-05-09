package com.github.peacetrue.mall;

import com.github.peacetrue.spring.web.cors.CorsConfigurationUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import reactor.core.publisher.Hooks;

import java.util.Arrays;

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

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = CorsConfigurationUtils.supportAll();
        corsConfiguration.setAllowedOriginPatterns(Arrays.asList("http://localhost:3000", "https://peacetrue.cn"));
        return exchange -> corsConfiguration;
    }

}
