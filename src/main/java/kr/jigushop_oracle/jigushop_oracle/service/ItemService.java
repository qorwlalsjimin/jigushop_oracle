package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.AdminRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.ItemRepository;
import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;


    public Collection<Item> selectItemAll(Long categoryId) {
        return itemRepository.findAllNative(categoryId);
    }

    public Collection<Item> selectItemOne(Long itemId) {
        return itemRepository.findByIdNative(itemId);
    }
}
