import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * @author : xiayx
 * @since : 2021-04-28 06:01
 **/
class TempTest {

    @Test
    void name() {
        LocalDateTime localDateTime = LocalDateTime.parse("2021-04-03T09:51:00", DateTimeFormatter.ISO_DATE_TIME);
        System.out.println(localDateTime);
    }

    @Test
    void name2() {
        String collect = IntStream.range(0, 256).mapToObj(i -> "1").collect(Collectors.joining("", "a", ""));
        System.out.println(collect);
    }
}
