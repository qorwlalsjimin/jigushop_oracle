package kr.jigushop_oracle.jigushop_oracle.dto;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.JoinColumn;

@Data
public class ItemForm {
    private Long itemId;
    private Long categoryId;
    private String itemName;
    private String brand;
    private String itemOption;
    private String itemDesc;
    private String img;
    private Long price;
    private char best;
    private char sale;
    private char heart;
    private Long heartCnt;
}
