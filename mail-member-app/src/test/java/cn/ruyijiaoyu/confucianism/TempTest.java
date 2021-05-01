package cn.ruyijiaoyu.confucianism;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Arrays;

/**
 * @author : xiayx
 * @since : 2020-12-11 12:11
 **/
public class TempTest {

    @Test
    void name() {
        Flux.just(1, 2, 3, 4, 5)
                .doOnNext(item -> System.out.println(item))
                .subscribe();
    }

    @Test
    void zipWith() {
        Flux.just(1, 2, 3, 4, 5)
                .zipWith(Mono.just(6), 5)
                .doOnNext(item -> System.out.println(item))
                .subscribe();
    }

    @Test
    void concat() {
        Flux.just(1, 2, 3, 4, 5)
                .concatWith(Mono.just(6))
                .doOnNext(item -> System.out.println(item))
                .subscribe();
    }

    @Test
    void zipWithIterable() {
        Flux.just(1, 2, 3, 4, 5)
                .zipWithIterable(Arrays.asList(1, 2, 3, 4, 5))
                .doOnNext(item -> System.out.println(item))
                .subscribe();
    }


}
