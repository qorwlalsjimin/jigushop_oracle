package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.AdminLoginForm;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import kr.jigushop_oracle.jigushop_oracle.service.AdminService;
import kr.jigushop_oracle.jigushop_oracle.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Collection;

@RestController
@RequestMapping("/api/member")
public class MemberController {

    @Autowired
    MemberService memberService;

    //회원정보 조회
    @GetMapping("/")
    public MemberInfo select(HttpServletRequest request){
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

        return memberService.select(memberUid);
    }


    //로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody MemberLoginForm form){
        System.out.println(form);
        boolean isLogin = memberService.login(form);

        if(isLogin)
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); //401

    }

    //회원가입
    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody MemberInfo memberInfo){
        boolean isJoin = memberService.join(memberInfo);

        if(isJoin)
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); //401
    }

    //회원 정보 수정
    @PostMapping("/edit")
    public ResponseEntity<?> edit(@RequestBody MemberInfo memberInfo){
        boolean isEdit = memberService.edit(memberInfo);

        if(isEdit)
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); //401
    }

    //회원 탈퇴
    @DeleteMapping("/drop")
    public ResponseEntity<?> drop(HttpServletRequest request){
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

        boolean isDelete = memberService.drop(memberUid);

        if(isDelete)
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); //401
    }


}
