package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.AdminLoginForm;
import kr.jigushop_oracle.jigushop_oracle.dto.HeartChartForm;
import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.Board;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import kr.jigushop_oracle.jigushop_oracle.service.AdminService;
import kr.jigushop_oracle.jigushop_oracle.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @Autowired
    BoardService boardService;


    //글 작성
    @PostMapping("/write")
    public ResponseEntity<?> join(@RequestBody Board board){
        return ResponseEntity.ok(boardService.addOne(board));
    }


    // 목록 조회
    @GetMapping("/")
    public Collection<Board> selectAllItems(){
        return boardService.findList();
    }


    // 글 하나 조회
    @GetMapping("/{id}")
    public Board selectOne(@PathVariable Long id){
        return boardService.findOne(id);
    }


}
