package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class HeartList {
    @Id
    @SequenceGenerator(name = "heart_list_seq", sequenceName = "heart_list_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long heartId;

    @JoinColumn(
            table = "memberInfo",
            name = "memberUid",
            referencedColumnName = "memberUid")
    private String memberUid;

}
