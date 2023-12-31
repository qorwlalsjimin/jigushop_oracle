package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.AdminLoginForm;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartChartForm;
import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    //로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginForm adminInfo){
        System.out.println(adminInfo);
        boolean isLogin = adminService.login(adminInfo);

        if(isLogin)
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); //401

    }

    //회원가입
    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody AdminInfo adminInfo){
        boolean isJoin = adminService.join(adminInfo);

        if(isJoin)
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); //401
    }


    // 상품 목록 조회
    @GetMapping("/items")
    public Collection<Item> selectAllItems(){
        System.out.println("관리자: 상품 조회 get");
        System.out.println(adminService.adminListAll().toArray().length);
        return adminService.adminListAll();
    }


    // 수정할 상품 정보 조회
    @GetMapping("/edit_item/{id}")
    public Item selectOneItems(@PathVariable Long id){
        System.out.println("관리자: 상품 하나 조회 get");
        return adminService.adminFindOne(id);
    }

    // 상품 정보 수정하기
    @PostMapping("/edit_item")
    public ResponseEntity<Item> editOneItems(@RequestBody Item itemForm){
        System.out.println("관리자: 상품 하나 수정 post");
        return ResponseEntity.ok(adminService.editOne(itemForm));
    }

    // 상품 등록하기
    @PostMapping("/add_item")
    public ResponseEntity<Item> addOneItems(@RequestBody Item itemForm){
        System.out.println(itemForm);
        System.out.println("관리자: 상품 하나 추가 post");
//        Category category = adminService.findCategoryById(itemForm.getCategoryId().getCategoryId());
//        itemForm.setCategoryId(category);
        return ResponseEntity.ok(adminService.addOne(itemForm));
    }

    // 상품 삭제하기
    @DeleteMapping("/delete_item/{id}")
    public ResponseEntity<Item> deleteOneItems(@PathVariable int id){
        System.out.println("관리자: 상품 하나 삭제 post");
        adminService.deleteOne(id);
        return ResponseEntity.ok().build();
    }


    // 즐겨찾기 차트
    @GetMapping("/chart")
    public List<HeartChartForm> heartChart(){
        System.out.println("관리자: 즐겨찾기 차트 조회 get");
        return adminService.heartChart();
    }

}
