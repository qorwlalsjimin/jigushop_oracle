package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.BoardDTO;
import kr.jigushop_oracle.jigushop_oracle.service.BoardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

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

}
