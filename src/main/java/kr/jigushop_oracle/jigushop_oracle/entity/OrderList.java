package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class OrderList {
    @Id
    @SequenceGenerator(name = "order_list_seq", sequenceName = "heart_list_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @JoinColumn(
            table = "memberInfo",
            name = "memberUid",
            referencedColumnName = "memberUid")
    private String memberUid;

    @Column
    private Long totalPrice;
    private String orderStatus;
    private Date orderTimestamp;

}
