package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dao.BoardDAOImpl;
import kr.jigushop_oracle.jigushop_oracle.dto.BoardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardDAOImpl boardDAO;

    //insert
    @Override
    public void save(BoardDTO dto) {
        System.out.println(dto);
        boardDAO.save(dto);
    }

    //select
    @Override
    public List<BoardDTO> findAll() {
        return boardDAO.findAll();
    }

    @Override
    public BoardDTO findOne(Long id) {
        return boardDAO.findOne(id);
    }


}
