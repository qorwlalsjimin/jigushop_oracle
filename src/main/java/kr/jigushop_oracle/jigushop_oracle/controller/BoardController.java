package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.BoardDTO;
import kr.jigushop_oracle.jigushop_oracle.service.BoardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BoardController {

    @Autowired
    BoardServiceImpl boardService;

    //index
    @GetMapping("/")
    public String home(){
        return "index";
    }

    //게시판 목록
    @GetMapping("/list")
    public String list(Model model){
        model.addAttribute("board_list", boardService.findAll());
        return "list";
    }

    //게시판 글 하나 조회
//    @GetMapping("/findone")
//    public BoardDTO findOne(Long id){
//        return boardService.findOne(id);
//    }

    //글 쓰기
    @GetMapping("/add")
    public String write(){
        return "add";
    }

    @PostMapping("/add")
    public String write_save(@ModelAttribute BoardDTO dto){
        System.out.println(dto);
        boardService.save(dto);
        return "redirect:/list";
    }

    //글 수정하기
    @GetMapping("/update/{id}")
    public String update(@PathVariable Long id){
        return "update";
    }

    @PostMapping("/update")
    public String update_save(){
        return "redirect:/list";
    }
}
