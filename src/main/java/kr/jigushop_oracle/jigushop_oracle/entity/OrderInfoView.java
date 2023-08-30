package kr.jigushop_oracle.jigushop_oracle.entity;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Immutable
@Subselect("SELECT order_list.ORDER_ID, order_list.ORDER_TIMESTAMP, order_list.ORDER_STATUS, " +
        "order_list.TOTAL_PRICE, item.IMG, item.ITEM_NAME, order_item.OPTION_CNT " +
        "FROM ORDER_LIST " +
        "JOIN ORDER_ITEM ON order_list.ORDER_ID = order_item.ORDER_ID " +
        "JOIN ITEM ON order_item.ITEM_ID = item.ITEM_ID")
@Data
public class OrderInfoView {

    @Id
    @Column(name = "ORDER_ID")
    private Long orderId;

    @Column(name = "ORDER_TIMESTAMP")
    private Date orderTimestamp;

    @Column(name = "ORDER_STATUS")
    private String orderStatus;

    @Column(name = "TOTAL_PRICE")
    private Long totalPrice;

    @Column(name = "IMG")
    private String img;

    @Column(name = "ITEM_NAME")
    private String itemName;

    @Column(name = "OPTION_CNT")
    private String optionCnt;

}
