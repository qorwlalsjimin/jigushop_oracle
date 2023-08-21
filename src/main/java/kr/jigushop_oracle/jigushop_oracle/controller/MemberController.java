package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.AdminLoginForm;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import kr.jigushop_oracle.jigushop_oracle.service.AdminService;
import kr.jigushop_oracle.jigushop_oracle.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/member")
public class MemberController {

    @Autowired
    MemberService memberService;

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


}
