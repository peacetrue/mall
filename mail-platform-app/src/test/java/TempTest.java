import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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
}
