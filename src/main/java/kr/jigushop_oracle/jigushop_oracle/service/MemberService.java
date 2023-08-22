package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.*;
import kr.jigushop_oracle.jigushop_oracle.dto.AdminLoginForm;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collection;

@Service
public class MemberService {

    @Autowired MemberInfoRepository memberInfoRepository;
    @Autowired HeartListRepository heartListRepository;

    public boolean login(MemberLoginForm form) {
        MemberInfo dbInfo = memberInfoRepository.findByIdNative(form.getMemberUid());

        if(dbInfo == null) return false;
        System.out.println(form.getMemberUpw());
        System.out.println(dbInfo.getMemberUpw());
        if(form.getMemberUpw().equals(dbInfo.getMemberUpw()))
            return true;
        else
            return false;
    }

    @Transactional
    public boolean join(MemberInfo form) {
        // DB에 회원 정보 추가
        int isSave = memberInfoRepository.saveMemberInfo(form);

        // 즐겨찾기 추가
        HeartList heartList = new HeartList();
        heartList.setMemberUid(form.getMemberUid());
        heartListRepository.saveHeartList(heartList);

        return isSave>0 ? true : false;
    }
}
