package kr.jigushop_oracle.jigushop_oracle.dto;

import lombok.Data;

import javax.persistence.JoinColumn;

@Data
public class HeartForm {
    private String memberUid;
    private Long itemId;
}
