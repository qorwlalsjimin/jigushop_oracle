package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.*;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.OrderForm;
import kr.jigushop_oracle.jigushop_oracle.dto.OrderItemForm;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderItemRepository orderItemRepository;

    @Autowired
    OrderListRepository orderListRepository;

    @Autowired
    ItemRepository itemRepository;

    @Transactional
    public void add(OrderForm orderForm, List<OrderItemForm> orderItemForm, String memberUid) {
        orderListRepository.saveOrder(orderForm); //사용자 이름, 총 결제액
        Long orderId = orderListRepository.findIdByMember(memberUid).getOrderId(); //사용자 이름에 주문이 여러 개 걸려있으면 어떡함 ㅜㅜ?
        for (OrderItemForm item : orderItemForm) {
            orderItemRepository.saveOrderItem(item, orderId);
        }
    }



}
