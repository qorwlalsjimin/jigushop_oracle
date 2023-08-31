package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.OrderInfoView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderInfoViewRepository extends JpaRepository<OrderInfoView, Long> {

    //주문조회 (노션 수정하기)
    @Query(nativeQuery = true, value =  "SELECT * FROM order_info_view WHERE order_id IN (SELECT order_id FROM order_list WHERE member_uid = :memberUid)")
    List<OrderInfoView> findAllByMember(@Param("memberUid") String memberUid);
}
