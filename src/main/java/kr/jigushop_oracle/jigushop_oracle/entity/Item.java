package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Item {
    @Id
    @SequenceGenerator(name = "item_seq", sequenceName = "ITEM_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;


    @ManyToOne
    @JoinColumn(name = "categoryId", referencedColumnName = "categoryId", nullable = false)
    private Category categoryId;

    @Column(nullable = false)
    private String itemName;
    private String brand;

    @Column(nullable = true)
    private String itemOption;

    @Column(nullable = false)
    private String itemDesc;
    private String img;
    private Long price;
}
