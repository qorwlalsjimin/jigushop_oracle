package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.HeartItemRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.HeartListRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.MemberInfoRepository;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.HeartItem;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

@Service
public class HeartService {

    @Autowired
    HeartItemRepository heartItemRepository;

    @Autowired
    HeartListRepository heartListRepository;

    @Transactional
    public void add(HeartForm form) {
        // 1. 사용자의 고유 즐겨찾기 번호 알아내기
        // 2. 1에서 구한 번호와 상품 번호로 HeartItem에 insert
        // TODO join
        Long heartId = heartListRepository.findByIdNative(form.getMemberUid());
        if(heartId==null){
            heartListRepository.saveHeartList(form);
            heartId = heartListRepository.findByIdNative(form.getMemberUid());
        }
        System.out.println("확인!!! "+heartId);

        heartItemRepository.saveAddHeart(heartId, form.getItemId());
    }

    @Transactional
    public void delete(HeartForm form) {
        // 1. 사용자의 고유 즐겨찾기 번호 알아내기
        // 2. 1에서 구한 번호와 상품 번호로 HeartItem에서 delete
        Long heartId = heartListRepository.findByIdNative(form.getMemberUid());
        heartItemRepository.deleteByItem(heartId, form.getItemId());
    }

    public Collection<HeartItem> findAll(String memberUid) {
        return heartItemRepository.findByMember(memberUid);
    }


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
