package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import kr.jigushop_oracle.jigushop_oracle.service.HeartService;
import kr.jigushop_oracle.jigushop_oracle.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api/heart")
public class HeartController {

    @Autowired
    HeartService heartService;

    //즐겨찾기 등록
    @PostMapping("/add")
    public ResponseEntity<?> login(@RequestBody HeartForm form){
        System.out.println("즐겨찾기: 즐겨찾기 상품 등록 '"+form.getItemId()+"'");
        // 1. 사용자의 고유 즐겨찾기 번호 알아내기
        // 2. 1에서 구한 번호와 상품 번호로 HeartItem에 insert
        return ResponseEntity.ok().build();
    }

    //즐겨찾기 삭제
    @DeleteMapping("/delete")
    public ResponseEntity<?> join(@RequestBody HeartForm form){
        // 1. 사용자의 고유 즐겨찾기 번호 알아내기
        // 2. 1에서 구한 번호와 상품 번호로 HeartItem에서 delete
        return ResponseEntity.ok().build();
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }


}
