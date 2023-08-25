package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class OrderItem {
    @Id
    @SequenceGenerator(name = "order_item_seq", sequenceName = "order_item_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    @JoinColumn(
            table = "orderList",
            name = "orderId",
            referencedColumnName = "orderId")
    private Long orderId;

    @JoinColumn(
            table = "item",
            name = "itemId",
            referencedColumnName = "itemId")
    private Long itemId;

    @Column
    private String optionCnt;

}
