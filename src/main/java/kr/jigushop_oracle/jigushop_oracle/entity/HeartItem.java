package kr.jigushop_oracle.jigushop_oracle.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class HeartItem {
    @Id
    @SequenceGenerator(name = "heart_item_seq", sequenceName = "heart_item_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
