package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.dto.OrderItemForm;
import kr.jigushop_oracle.jigushop_oracle.entity.HeartItem;
import kr.jigushop_oracle.jigushop_oracle.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO order_item VALUES (order_item_seq.NEXTVAL, :orderId, :#{#form.itemId}, :#{#form.optionCnt})")
    void saveOrderItem(@Param("form") OrderItemForm form, @Param("orderId") Long orderId);

    @Query(nativeQuery = true, value = "SELECT * FROM order_item WHERE order_id = :orderId")
    OrderItem findAllByMember(@Param("orderId") Long orderId);
}