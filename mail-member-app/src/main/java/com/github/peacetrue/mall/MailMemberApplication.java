package com.github.peacetrue.mall;

import com.github.peacetrue.spring.security.ServerHttpSecurityConfigurer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;
import reactor.core.publisher.Hooks;

/**
 * @author xiayx
 */
@EnableSpringWebSession
@SpringBootApplication
public class MailMemberApplication {

    public static void main(String[] args) {
        Hooks.onOperatorDebug();
        SpringApplication.run(MailMemberApplication.class, args);
    }

    @Bean
    @Order(0)
    public ServerHttpSecurityConfigurer serverHttpSecurityConfigurer() {
        return http -> http.authorizeExchange()
                .pathMatchers(HttpMethod.GET, "/goods/**").permitAll()
                .pathMatchers(HttpMethod.POST, "/orders").authenticated()
                .pathMatchers(HttpMethod.GET, "/orders/created").authenticated()
                .pathMatchers(HttpMethod.POST, "/contact-addresses").authenticated()
                .pathMatchers(HttpMethod.GET, "/contact-addresses/**").authenticated()
                .pathMatchers(HttpMethod.GET, "/regions/**").permitAll()
                .pathMatchers(HttpMethod.POST, "/registrations").permitAll()
//                .authorizeExchange()
//                .pathMatchers("/*/delete").hasRole("ROLE_ADMIN")
//                .pathMatchers(HttpMethod.DELETE).hasRole("ROLE_ADMIN")
                ;
    }

}
