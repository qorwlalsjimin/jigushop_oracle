package kr.jigushop_oracle.jigushop_oracle.service;

import kr.jigushop_oracle.jigushop_oracle.dto.BoardDTO;

import java.util.List;

public interface BoardService {
    //insert
    public void save(BoardDTO dto);

    //select
    public List<BoardDTO> findAll();
    public BoardDTO findOne(Long id);
}
