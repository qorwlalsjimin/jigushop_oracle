package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.dto.BoardDTO;

import java.util.List;

public interface BoardDAO {
    public void save(BoardDTO dto);

    public List<BoardDTO> findAll();

    public BoardDTO findOne(Long id);
}
