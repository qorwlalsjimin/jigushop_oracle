package kr.jigushop_oracle.jigushop_oracle.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderForm {
    private String memberUid;
    private List<OrderItemForm> orderItems;
    private int totalPrice;

}
