package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.AdminInfoRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.AdminRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.BoardRepository;
import kr.jigushop_oracle.jigushop_oracle.dao.HeartItemRepository;
import kr.jigushop_oracle.jigushop_oracle.dto.AdminLoginForm;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartChartForm;
import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.Board;
import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    BoardRepository boardRepository;


    @Transactional
    public Board addOne(Board form) {
        boolean isAdded = boardRepository.saveBoard(form)>0 ? true : false;
        Board addedBoard = null;
        if(isAdded){
            addedBoard = boardRepository.findOneNative(form.getBoardId());
        }
        return addedBoard;
    }

    public List<Board> findList(){
        return boardRepository.findAllNative();
    }

    public Board findOne(Long id) {
        return boardRepository.findOneNative(id);
    }
}
