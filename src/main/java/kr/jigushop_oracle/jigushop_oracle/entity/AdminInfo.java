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
public class AdminInfo {
    @Id
    private String adminUid;

    @Column(nullable = false)
    private String adminUpw;
    private String adminName;
}
