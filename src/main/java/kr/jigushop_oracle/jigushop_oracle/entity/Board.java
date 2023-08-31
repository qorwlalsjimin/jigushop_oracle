package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class Board {
    @Id
    @SequenceGenerator(name = "board_seq", sequenceName = "board_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(nullable = false)
    private String nickname;
    private String title;
    private String content;
    private Date boardTimestamp;
}
