package cn.ruyijiaoyu.confucianism;

import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.FileTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

import java.io.FileWriter;

/**
 * @author : xiayx
 * @since : 2020-12-12 14:04
 **/
public class ThymeleafTest {

    private String fileLocation = "/Users/xiayx/Documents/haohan/confucianism-server/02-thymeleaf/";

    @Bean
    @ConditionalOnMissingBean(ITemplateResolver.class)
    public ITemplateResolver templateResolver() {
        FileTemplateResolver resolver = new FileTemplateResolver();
        resolver.setPrefix(fileLocation);
        resolver.setSuffix(".html");
        resolver.setTemplateMode(TemplateMode.HTML);
        resolver.setCacheable(false);
        return resolver;
    }


    @Bean
    @ConditionalOnMissingBean(TemplateEngine.class)
    public TemplateEngine templateEngine(ITemplateResolver templateResolver) {
        TemplateEngine templateEngine = new TemplateEngine();
        templateEngine.setTemplateResolver(templateResolver);
        return templateEngine;
    }

    @Test
    void name() throws Exception {
        TemplateEngine templateEngine = templateEngine(templateResolver());
        Context context = new Context();
        context.setVariable("withName", false);
        templateEngine.process("test", context, new FileWriter(fileLocation + "generated/test.html"));
    }
}
