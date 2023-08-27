package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.*;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.OrderForm;
import kr.jigushop_oracle.jigushop_oracle.dto.OrderItemForm;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.entity.OrderInfoView;
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
    OrderInfoViewRepository orderInfoViewRepository;

    @Autowired
    ItemRepository itemRepository;

    //주문 결제
    @Transactional
    public void add(OrderForm orderForm, List<OrderItemForm> orderItemForm, String memberUid) {
        orderListRepository.saveOrder(orderForm); //사용자 이름, 총 결제액
        Long orderId = orderListRepository.findIdByMember(memberUid).getOrderId();
        for (OrderItemForm item : orderItemForm) {
            orderItemRepository.saveOrderItem(item, orderId);
        }
    }


    //주문 조회
    public List<OrderInfoView> findOrderMyPage(String memberUid) {
        List<OrderInfoView> orderInfoList = orderInfoViewRepository.findAllByMember(memberUid);
//        System.out.println("여기1"+orderInfoViewRepository.test());
//        System.out.println("여기2"+orderInfoViewRepository.findAllByMember(memberUid));
        //toString 메서드있으면 잘 출력됨

        return orderInfoList;
    }





}
