package kr.jigushop_oracle.jigushop_oracle.controller;

import kr.jigushop_oracle.jigushop_oracle.dto.BoardDTO;
import kr.jigushop_oracle.jigushop_oracle.service.BoardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    /*
    *     @GetMapping("/category/{countryId}")
    public Collection<CategoryList> selectCategory(@PathVariable Long countryId){
        System.out.println("카테고리 목록 get");
        return itemService.selectCategory(countryId);
    }

    //하나의 상품 상세 정보
    @GetMapping("/{itemId}")
    public ResponseEntity<?> selectById(@PathVariable Long itemId){
        System.out.println(itemId);
        Optional<Item> itemInfo = Optional.ofNullable(itemService.selectItemById(itemId));
        return itemInfo.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    * */
    @Autowired
    BoardServiceImpl boardService;

    //index
//    @GetMapping("/")
//    public String home(){
//        return "index";
//    }

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
