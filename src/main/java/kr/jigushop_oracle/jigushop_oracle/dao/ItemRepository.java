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
}