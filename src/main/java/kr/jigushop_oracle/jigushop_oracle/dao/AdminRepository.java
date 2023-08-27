package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdminRepository extends JpaRepository<Item, Long> {

    //관리자 전체 상품 조회
    @Query(nativeQuery = true, value = "SELECT * FROM item")
    List<Item> findAllNative();

    //상품 수정하기 전, 원래 데이터 조회
    @Query(nativeQuery = true, value = "SELECT * FROM item WHERE item_id = :id")
    Item findOneNative(@Param("id") Long id);

    //상품 수정
    @Modifying
    @Query(nativeQuery = true, value = "UPDATE item SET category_id = :#{#item.categoryId}, item_name = :#{#item.itemName}, brand = :#{#item.brand}, item_option = :#{#item.itemOption}, item_desc = :#{#item.itemDesc}, img = :#{#item.img}, price = :#{#item.price}, sale = :#{#item.sale} WHERE item_id = :#{#item.itemId}")
    int updateItem(@Param("item") Item item);

    //상품 추가
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO item VALUES (item_seq.NEXTVAL, :#{#item.categoryId}, :#{#item.itemName}, :#{#item.brand}, :#{#item.itemOption}, :#{#item.itemDesc}, :#{#item.img}, :#{#item.price}, 0, :#{#item.sale})")
    int addItem(@Param("item") Item item);

    //상품 삭제
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM item WHERE item_id = :id")
    int deleteByIdNative(@Param("id") int id);


    //즐겨찾기 차트
    @Query(nativeQuery = true, value =  "SELECT NVL(TO_CHAR(category_id), 'sum'), COUNT(heart_item.item_id) FROM heart_item " +
                                        "RIGHT OUTER JOIN item ON item.item_id = heart_item.item_id " +
                                        "GROUP BY ROLLUP(category_id) " +
                                        "ORDER BY category_id")
    List<Object[]> findCountEntity();


}