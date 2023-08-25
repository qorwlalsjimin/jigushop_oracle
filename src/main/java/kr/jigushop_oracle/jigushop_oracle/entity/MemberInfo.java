package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class MemberInfo {
    @Id
    private String memberUid;

    @Column(nullable = false)
    private String memberUpw;
    private String memberName;

    @Column(length = 11, nullable = false)
    private String phone;

    @Column(nullable = false)
    private String gender;
    private Date joinTimestamp;

}
