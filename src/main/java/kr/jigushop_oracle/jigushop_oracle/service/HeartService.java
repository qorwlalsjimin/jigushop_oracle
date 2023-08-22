package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.HeartItemRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.HeartListRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.MemberInfoRepository;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class HeartService {

    @Autowired
    HeartItemRepository heartItemRepository;

    @Autowired
    HeartListRepository heartListRepository;

//
//    public boolean login(MemberLoginForm form) {
//        MemberInfo dbInfo = memberInfoRepository.findByIdNative(form.getMemberUid());
//
//        if(dbInfo == null) return false;
//        System.out.println(form.getMemberUpw());
//        System.out.println(dbInfo.getMemberUpw());
//        if(form.getMemberUpw().equals(dbInfo.getMemberUpw()))
//            return true;
//        else
//            return false;
//    }
//
//    @Transactional
//    public boolean join(MemberInfo form) {
//        int isSave = memberInfoRepository.saveMemberInfo(form);
//        return isSave>0 ? true : false;
//    }
}
