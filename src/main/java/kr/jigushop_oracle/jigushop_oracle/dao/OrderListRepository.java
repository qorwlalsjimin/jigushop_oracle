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
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO order_list VALUES (order_list_seq.NEXTVAL, :#{#form.memberUid}, :#{#form.totalPrice}, '주문완료', CURRENT_TIMESTAMP)")
    void saveOrder(@Param("form") OrderForm form);

    @Query(nativeQuery = true, value =  "SELECT * FROM (SELECT * FROM order_list WHERE member_uid = :memberUid " +
                                        "ORDER BY order_timestamp DESC) " +
                                        "WHERE ROWNUM = 1 ")
    OrderList findIdByMember(@Param("memberUid") String memberUid);

    @Query(nativeQuery = true, value = "SELECT * FROM order_list WHERE member_uid = :memberUid")
    List<OrderList> findAllByMember(@Param("memberUid") String memberUid);

}