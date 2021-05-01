package com.github.peacetrue.mall;

import com.github.peacetrue.spring.security.ServerHttpSecurityConfigurer;
import com.github.peacetrue.spring.web.cors.CorsConfigurationUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;

import java.util.Arrays;

/**
 * @author xiayx
 */
@EnableSpringWebSession
@SpringBootApplication
public class MailPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(MailPlatformApplication.class, args);
    }

    @Bean
    @Order(0)
    public ServerHttpSecurityConfigurer serverHttpSecurityConfigurer() {
        // iframe 可以跨域访问本项目内的资源
        return http -> http.headers(headers -> headers.frameOptions(ServerHttpSecurity.HeaderSpec.FrameOptionsSpec::disable))
                .authorizeExchange()
                .pathMatchers(HttpMethod.GET, "/files/**").permitAll()
                .pathMatchers(HttpMethod.GET, "/goods/**").permitAll()
                .pathMatchers(HttpMethod.GET, "/contact-addresses/**").permitAll()
                .pathMatchers(HttpMethod.GET, "/orders/**").permitAll()
                .pathMatchers(HttpMethod.PUT, "/notices/view").permitAll()
                .pathMatchers(HttpMethod.POST, "/registrations").permitAll()
//                .authorizeExchange()
//                .pathMatchers("/*/delete").hasRole("ROLE_ADMIN")
//                .pathMatchers(HttpMethod.DELETE).hasRole("ROLE_ADMIN")
                //mail-merchant-front
                ;
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = CorsConfigurationUtils.supportAll();
        corsConfiguration.setAllowedOriginPatterns(Arrays.asList("http://localhost:3000", "https://peacetrue.cn"));
        return exchange -> corsConfiguration;
    }

}
