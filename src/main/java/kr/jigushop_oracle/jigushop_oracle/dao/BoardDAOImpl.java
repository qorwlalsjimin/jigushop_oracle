package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.dto.BoardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoardDAOImpl implements  BoardDAO{
    @Autowired
    private JdbcTemplate jdbc;

    @Override
    public void save(BoardDTO dto) {
        String sql = "INSERT INTO board(nickname, title, content, board_timestamp) VALUES(?, ?, ?, CURRENT_TIMESTAMP)";
        jdbc.update(sql, dto.getNickname(), dto.getTitle(), dto.getContent());
    }

    @Override
    public List<BoardDTO> findAll() {
        String sql = "SELECT * FROM board ORDER BY board_timestamp DESC";
        List<BoardDTO> list = jdbc.query(sql, new BeanPropertyRowMapper<>(BoardDTO.class));
        return list;
    }

    @Override
    public BoardDTO findOne(Long id) {
        String sql = "SELECT * FROM board WHERE board_id="+id;
        BoardDTO one = jdbc.queryForObject(sql, new BeanPropertyRowMapper<>(BoardDTO.class));
        return one;
    }
}
