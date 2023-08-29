package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class Board {
    @Id
    private Long boardId;

    @Column(nullable = false)
    private String nickname;
    private String title;
    private String content;
    private Date boardTimestamp;
}
