package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.OrderInfoView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderInfoViewRepository extends JpaRepository<OrderInfoView, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM order_info_view WHERE item_name = '칫솔꽂이'")
    OrderInfoView test();

    //주문조회
    @Query(nativeQuery = true, value = "SELECT * FROM order_info_view")
    List<OrderInfoView> findAllByMember(String memberUid);
    //TODO 흠... 좀 이상함!  kr.jigushop_oracle.jigushop_oracle.entity.OrderInfoView@10e7e0ae, kr.jigushop_oracle.jigushop_oracle.entity.OrderInfoView@10e7e0ae 이런 식이네용
}
