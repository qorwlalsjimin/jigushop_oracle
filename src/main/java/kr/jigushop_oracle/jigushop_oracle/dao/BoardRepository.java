package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.Board;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.Column;
import java.util.Collection;
import java.util.Date;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    //게시판 글 쓰기
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO board VALUES(board_seq.NEXTVAL, :#{#form.nickname}, :#{#form.title}, :#{#form.content}, CURRENT_TIMESTAMP)")
    int saveBoard(@Param("form") Board form);


    //게시판 글 하나 조회
    @Query(nativeQuery = true, value = "SELECT * FROM board WHERE board_id = :boardId")
    Board findOneNative(@Param("boardId") Long boardId);

    //게시판 목록 조회
    @Query(nativeQuery = true, value = "SELECT * FROM board ORDER BY board_timestamp DESC")
    List<Board> findAllNative();
}