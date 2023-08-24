package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.dto.HeartChartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.ItemForm;
import kr.jigushop_oracle.jigushop_oracle.entity.HeartItem;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface HeartItemRepository extends JpaRepository<HeartItem, String> {
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO heart_item VALUES (heart_item_seq.NEXTVAL, :itemId, :heartId)")
    void saveAddHeart(@Param("heartId") Long heartId, @Param("itemId") Long itemId);

    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM heart_item WHERE heart_id = :heartId AND item_id = :itemId")
    void deleteByItem(@Param("heartId") Long heartId, @Param("itemId") Long itemId);


    @Query(nativeQuery = true, value =  "SELECT category_id, COUNT(heart_item.item_id) FROM heart_item " +
                                        "RIGHT OUTER JOIN item ON item.item_id = heart_item.item_id " +
                                        "GROUP BY category_id " +
                                        "ORDER BY category_id")
    List<Object[]> findCountEntity();


}