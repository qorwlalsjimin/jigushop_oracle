package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Item {
    @Id
    @SequenceGenerator(name = "item_seq", sequenceName = "ITEM_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;

//    @JoinColumn(
//            table = "category",
//            name = "categoryId",
//            referencedColumnName = "categoryId")
    @Column(nullable = false)
    private Long categoryId;

    @Column(nullable = false)
    private String itemName;
    private String brand;

    @Column(nullable = true)
    private String itemOption;

    @Column(nullable = false)
    private String itemDesc;
    private String img;
    private Long price;

    @Column(nullable = false)
    @ColumnDefault("0")
    private char best;


    @Column(nullable = false)
    @ColumnDefault("0")
    private char sale;

    @Builder
    public Item(Long itemId, Long categoryId, String itemName, String brand, String itemOption, String itemDesc, String img, Long price, char best, char sale) {
        this.itemId = itemId;
        this.categoryId = categoryId;
        this.itemName = itemName;
        this.brand = brand;
        this.itemOption = itemOption;
        this.itemDesc = itemDesc;
        this.img = img;
        this.price = price;
        this.best = best;
        this.sale = sale;
    }
}
