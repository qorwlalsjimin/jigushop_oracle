package kr.jigushop_oracle.jigushop_oracle.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
public class BoardForm {
    Long board_id;
    String nickname;
    String title;
    String content;
    Date board_timestamp;

    @Builder
    public BoardForm(Long board_id, String nickname, String title, String  content, Date board_timestamp){
        this.board_id = board_id;
        this.nickname = nickname;
        this.content = content;
        this.board_timestamp = board_timestamp;
    }
}
