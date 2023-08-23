package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.dto.ItemForm;
import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.modelmapper.ModelMapper;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query(nativeQuery = true, value =  "SELECT * FROM item WHERE category_id = :categoryId")
    List<Item> findAllNative(@Param("categoryId") Long categoryId);

    @Query(nativeQuery = true, value =  "SELECT item_id, category_id, item_name, brand, item_option, item_desc, img, price, best, sale, " +
                                        "    CASE WHEN(item_id IN (SELECT item_id FROM heart_item " +
                                        "                          NATURAL JOIN (SELECT heart_id FROM heart_list WHERE member_uid = :memberUid ))) " +
                                        "         THEN '1' " +
                                        "    ELSE '0' " +
                                        "    END heart " +
                                        "FROM item WHERE (:memberUid IS NULL OR item_id = :itemId)")
    List<Object[]> findByIdNative(Long itemId, String memberUid);

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

    //상품목록에 heart
    default ItemForm findByIdItemForm(Long itemId, String memberUid) {
        List<Object[]> results = findByIdNative(itemId, memberUid);
        if (results.isEmpty()) {
            return null; // 또는 원하는 기본값으로 처리
        }

        Object[] result = results.get(0);
        ItemForm itemForm = new ItemForm();
        itemForm.setItemId(Long.parseLong(String.valueOf(result[0])));
        itemForm.setCategoryId(Long.parseLong(String.valueOf(result[1])));
        itemForm.setItemName((String) result[2]);
        itemForm.setBrand((String) result[3]);
        itemForm.setItemOption((String) result[4]);
        itemForm.setItemDesc((String) result[5]);
        itemForm.setImg((String) result[6]);
        itemForm.setPrice(Long.parseLong(String.valueOf(result[7])));
        itemForm.setBest((char) result[8]);
        itemForm.setSale((char) result[9]);
        itemForm.setHeart((char) result[10]);

        return itemForm;
    }

}