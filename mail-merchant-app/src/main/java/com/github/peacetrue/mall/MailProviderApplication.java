package com.github.peacetrue.mall;

import com.github.peacetrue.result.Result;
import com.github.peacetrue.result.ResultImpl;
import com.github.peacetrue.result.ResultType;
import com.github.peacetrue.spring.formatter.date.AutomaticLocalDateFormatter;
import com.github.peacetrue.spring.formatter.date.AutomaticLocalDateTimeFormatter;
import com.github.peacetrue.spring.security.ServerHttpSecurityConfigurer;
import com.github.peacetrue.util.DateTimeFormatterUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.session.SessionProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Role;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.data.web.ReactivePageableHandlerMethodArgumentResolver;
import org.springframework.data.web.ReactiveSortHandlerMethodArgumentResolver;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.ServerCodecConfigurer;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.session.MapSession;
import org.springframework.session.ReactiveMapSessionRepository;
import org.springframework.session.ReactiveSessionRepository;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;
import org.springframework.transaction.annotation.AnnotationTransactionAttributeSource;
import org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration;
import org.springframework.transaction.interceptor.DelegatingTransactionAttribute;
import org.springframework.transaction.interceptor.TransactionAttribute;
import org.springframework.transaction.interceptor.TransactionAttributeSource;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.result.method.annotation.ArgumentResolverConfigurer;
import reactor.core.publisher.Hooks;

import javax.annotation.Nullable;
import java.lang.reflect.AnnotatedElement;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author xiayx
 */
@EnableSpringWebSession
@SpringBootApplication
public class MailProviderApplication {

    public static void main(String[] args) {
        Hooks.onOperatorDebug();
        SpringApplication.run(MailProviderApplication.class, args);
    }

    @Bean
    @Order(0)
    public ServerHttpSecurityConfigurer serverHttpSecurityConfigurer() {
        // iframe 可以跨域访问本项目内的资源
        return http -> http.headers(headers -> headers.frameOptions(ServerHttpSecurity.HeaderSpec.FrameOptionsSpec::disable))
                .authorizeExchange()
                .pathMatchers(HttpMethod.GET, "/notices/**").permitAll()
                .pathMatchers(HttpMethod.GET, "/class-grades/**").permitAll()
                .pathMatchers(HttpMethod.GET, "/articles/**").permitAll()
                .pathMatchers(HttpMethod.PUT, "/notices/view").permitAll()
                .pathMatchers(HttpMethod.POST, "/registrations").permitAll()
//                .authorizeExchange()
//                .pathMatchers("/*/delete").hasRole("ROLE_ADMIN")
//                .pathMatchers(HttpMethod.DELETE).hasRole("ROLE_ADMIN")
                ;
    }




}
