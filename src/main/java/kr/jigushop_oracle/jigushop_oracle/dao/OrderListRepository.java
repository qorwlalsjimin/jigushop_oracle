package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.dto.OrderForm;
import kr.jigushop_oracle.jigushop_oracle.entity.OrderItem;
import kr.jigushop_oracle.jigushop_oracle.entity.OrderList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderListRepository extends JpaRepository<OrderList, Long> {

    // 총 주문 묶음 추가
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO order_list(order_id, member_uid, total_price, order_status, order_timestamp) VALUES (order_list_seq.NEXTVAL, :#{#form.memberUid}, :#{#form.totalPrice}, '주문완료', CURRENT_TIMESTAMP)")
    void saveOrder(@Param("form") OrderForm form);

    // 가장 최근에 추가된 주문 아이디 조회
    @Query(nativeQuery = true, value =  "SELECT * FROM (SELECT * FROM order_list WHERE member_uid = :memberUid " +
                                        "ORDER BY order_timestamp DESC) " +
                                        "WHERE ROWNUM = 1 ")
    OrderList findIdByMember(@Param("memberUid") String memberUid);
}