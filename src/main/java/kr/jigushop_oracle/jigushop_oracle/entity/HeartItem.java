package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
@Data
@NoArgsConstructor
public class HeartItem {
    @Id
    private Long heartItemId;

    @JoinColumn(
            table = "heartList",
            name = "heartId",
            referencedColumnName = "heartId")
    private Long heartId;

    @JoinColumn(
            table = "item",
            name = "itemId",
            referencedColumnName = "itemId")
    private Long itemId;

}
