package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.OrderItem;
import kr.jigushop_oracle.jigushop_oracle.entity.OrderList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderListRepository extends JpaRepository<OrderList, Long> {

}