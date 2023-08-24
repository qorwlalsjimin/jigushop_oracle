package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.HeartItem;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import kr.jigushop_oracle.jigushop_oracle.service.HeartService;
import kr.jigushop_oracle.jigushop_oracle.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/heart")
public class HeartController {

    @Autowired
    HeartService heartService;

    //즐겨찾기 조회
    @GetMapping("/items")
    public Collection<Item> findAll(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        String memberUid = null;

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("MemberloggedIn")) {
                    memberUid = cookie.getValue();
                    break;
                }
            }
        }

        System.out.println("즐겨찾기: 즐겨찾기 조회 "+memberUid);
        return heartService.findAll(memberUid);
    }

    //즐겨찾기 등록
    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody HeartForm form){
        System.out.println("즐겨찾기: 즐겨찾기 상품 등록 '"+form.getItemId()+"'");
        heartService.add(form);
        try{
//            heartService.add(form);
            return ResponseEntity.ok(form.getItemId());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //즐겨찾기 삭제
    @DeleteMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody HeartForm form){
        System.out.println("즐겨찾기: 즐겨찾기 상품 삭제 '"+form.getItemId()+"'");
        try{
            heartService.delete(form);
            return ResponseEntity.ok(form.getItemId());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


}
