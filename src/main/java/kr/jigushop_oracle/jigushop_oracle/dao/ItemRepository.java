package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM item WHERE category_id = :categoryId")
    List<Item> findAllNative(@Param("categoryId") Long categoryId);

    @Query(nativeQuery = true, value = "SELECT * FROM item WHERE item_id = :itemId")
    Collection<Item> findByIdNative(Long itemId);

    @Query(nativeQuery = true, value =  "SELECT * FROM (" +
                                        "    SELECT * FROM item WHERE best = 1 ORDER BY item_id" +
                                        ") WHERE ROWNUM <= 6")
    Collection<Item> findBest();

    //TODO 카테고리별로 하나씩 했으면 좋겠음.. 어떤 기준이 있었으면 함. ex) 사용자들이 즐겨찾기한 수 만큼
    @Query(nativeQuery = true, value =  "SELECT * FROM (" +
                                        "    SELECT * FROM item WHERE sale = 1 ORDER BY item_id" +
                                        ") WHERE ROWNUM <= 4")
    Collection<Item> findNew();

    //검색
    @Query(nativeQuery = true, value =  "SELECT * " +
                                        "FROM item " +
                                        "WHERE INSTR(item_name, :keyword) > 0")
    Collection<Item> findByKeyword(@Param("keyword") String keyword);

}