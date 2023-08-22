package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    ItemService itemService;

    /*
    *     @GetMapping("/category/{countryId}")
    public Collection<CategoryList> selectCategory(@PathVariable Long countryId){
        System.out.println("카테고리 목록 get");
        return itemService.selectCategory(countryId);
    }

    //하나의 상품 상세 정보
    @GetMapping("/{itemId}")
    public ResponseEntity<?> selectById(@PathVariable Long itemId){
        System.out.println(itemId);
        Optional<Item> itemInfo = Optional.ofNullable(itemService.selectItemById(itemId));
        return itemInfo.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    * */

    /* 상품 목록 */
    // 카테고리별
    @GetMapping("/items/{categoryId}")
    public Collection<Item> selectItemAll(@PathVariable Long categoryId){
        System.out.println("카테고리별 상품 조회 get");
        return itemService.selectItemAll(categoryId);
    }

    // best, sale 상품 갯수 제한
    @GetMapping("/items/best")
    public Collection<Item> selectBestItemAll(){
        System.out.println("best 상품 조회 get");
        return itemService.selectBestItem();
    }

    @GetMapping("/items/sale")
    public Collection<Item> selectNewItemAll(){
        System.out.println("sale 상품 조회 get");
        return itemService.selectNewItem();
    }

    // 검색
    @GetMapping("/search")
    public Collection<Item> selectSearch(@RequestParam String keyword){
        System.out.println(keyword+" 상품 검색 get");
        return itemService.search(keyword);
    }


    /* 상품 하나 */
    @GetMapping("/{itemId}")
    public Collection<Item> selectItemOne(@PathVariable Long itemId){
        System.out.println("상품 하나 조회 get");
        return itemService.selectItemOne(itemId);
    }


}
