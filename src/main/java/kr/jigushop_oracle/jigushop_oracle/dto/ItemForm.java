package kr.jigushop_oracle.jigushop_oracle.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class ItemForm {
    private Long item_id;
    private Long category_id;
    private String item_name;
    private String brand;
    private String item_option;
    private String item_desc;
    private String img;
    private Long price;

    @Builder
    public ItemForm(Long item_id, Long category_id, String item_name, String brand, String item_option, String item_desc, String img, Long price) {
        this.item_id = item_id;
        this.category_id = category_id;
        this.item_name = item_name;
        this.brand = brand;
        this.item_option = item_option;
        this.item_desc = item_desc;
        this.img = img;
        this.price = price;
    }
}
