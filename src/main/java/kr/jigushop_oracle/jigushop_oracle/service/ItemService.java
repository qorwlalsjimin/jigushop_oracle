package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.ItemRepository;
import kr.jigushop_oracle.jigushop_oracle.dto.ItemForm;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;


    public List<Item> selectItemAll(Long categoryId) {
        return itemRepository.findAllNative(categoryId);
    }

    public ItemForm selectItemOne(Long itemId, String memberUid) {
        return itemRepository.findByIdItemForm(itemId, memberUid);
    }

    public Collection<Item> selectBestItem() {
        return itemRepository.findBest();
    }

    public Collection<Item> selectNewItem() {
        return itemRepository.findNew();
    }

    public Collection<Item> search(String keyword) {
        return itemRepository.findByKeyword(keyword);
    }
}
