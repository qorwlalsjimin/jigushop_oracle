package kr.jigushop_oracle.jigushop_oracle.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BoardDTO {
    Long board_id;
    String nickname;
    String title;
    String content;
    Date board_timestamp;
}
