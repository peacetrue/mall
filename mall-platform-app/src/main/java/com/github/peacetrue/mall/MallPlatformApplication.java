package com.github.peacetrue.mall;

import com.github.peacetrue.spring.web.cors.CorsConfigurationUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;

import java.util.Arrays;

/**
 * @author xiayx
 */
@EnableSpringWebSession
@SpringBootApplication
public class MallPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(MallPlatformApplication.class, args);
    }

//    @Bean
//    @Order(0)
//    public ServerHttpSecurityConfigurer serverHttpSecurityConfigurer() {
//        // iframe 可以跨域访问本项目内的资源
//        return http -> http.authorizeExchange().anyExchange().authenticated()
////                .pathMatchers("/*/delete").hasRole("ROLE_ADMIN")
////                .pathMatchers(HttpMethod.DELETE).hasRole("ROLE_ADMIN")
//                ;
//    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = CorsConfigurationUtils.supportAll();
        corsConfiguration.setAllowedOriginPatterns(Arrays.asList("http://localhost:3000", "https://peacetrue.cn"));
        return exchange -> corsConfiguration;
    }

}
