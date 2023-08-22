package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdminRepository extends JpaRepository<Item, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM item")
    List<Item> findAllNative();

    @Query(nativeQuery = true, value = "SELECT * FROM item WHERE item_id = :id")
    Item findOneNative(@Param("id") Long id);

    @Modifying
    @Query(nativeQuery = true, value = "UPDATE item SET category_id = :#{#item.categoryId}, item_name = :#{#item.itemName}, brand = :#{#item.brand}, item_option = :#{#item.itemOption}, item_desc = :#{#item.itemDesc}, img = :#{#item.img}, price = :#{#item.price}, best = :#{#item.best}, sale = :#{#item.sale} WHERE item_id = :#{#item.itemId}")
    int updateItem(@Param("item") Item item);

    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO item VALUES (item_seq.NEXTVAL, :#{#item.categoryId}, :#{#item.itemName}, :#{#item.brand}, :#{#item.itemOption}, :#{#item.itemDesc}, :#{#item.img}, :#{#item.price}, :#{#item.best}, :#{#item.sale})")
    int addItem(@Param("item") Item item);

    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM item WHERE item_id = :id")
    int deleteByIdNative(@Param("id") int id);

    @Query(nativeQuery = true, value = "SELECT * FROM category WHERE category_id = :categoryId")
    Category findCategoryById(@Param("categoryId") Long categoryId);
}