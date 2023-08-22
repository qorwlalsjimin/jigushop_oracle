package kr.jigushop_oracle.jigushop_oracle.dto;

import lombok.Data;

import javax.persistence.JoinColumn;

@Data
public class HeartForm {
    private String memberUid;
    private Long heartId; //TODO 프론트가 가지고 있을지 정하기
    private Long itemId;
}
