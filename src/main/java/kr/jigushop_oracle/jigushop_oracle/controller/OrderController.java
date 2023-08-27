package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.OrderForm;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.entity.OrderInfoView;
import kr.jigushop_oracle.jigushop_oracle.service.HeartService;
import kr.jigushop_oracle.jigushop_oracle.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    //주문 조회
    @GetMapping("/items")
    public Collection<OrderInfoView> findAll(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String memberUid = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("MemberloggedIn")) {
                    memberUid = cookie.getValue();
                    break;
                }
            }
        }

        // 지금 결과값이 [{orderId=...}, {} ] 이렇게 나오는데 중괄호가 아니라 소괄호여야 함
        System.out.println("주문: 마이페이지 주문내역 조회 " + memberUid);
        System.out.println("컨트롤러"+orderService.findOrderMyPage(memberUid));
        return orderService.findOrderMyPage(memberUid);
    }


    //주문 결제
    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody OrderForm orderForm){
        System.out.println("주문: 주문 결제 ");
        System.out.println(orderForm);

        if(orderForm.getMemberUid()==null){
            System.out.println("사용자 아이디가 없음");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }


        // 사용자 아이디와 상품들로 주문 완료 처리
        try{
            orderService.add(orderForm, orderForm.getOrderItems(), orderForm.getMemberUid());
            return ResponseEntity.ok().build();
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}
