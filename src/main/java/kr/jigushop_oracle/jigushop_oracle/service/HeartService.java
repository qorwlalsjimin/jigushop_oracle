package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.HeartItemRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.HeartListRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.ItemRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.MemberInfoRepository;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.dto.MemberLoginForm;
import kr.jigushop_oracle.jigushop_oracle.entity.HeartItem;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
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

    @Autowired
    ItemRepository itemRepository;

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

    public Collection<Item> findAll(String memberUid) {
        return itemRepository.findByMember(memberUid);
    }

    @Transactional
    public void setBest() {
        itemRepository.updateBest();
    }

}
