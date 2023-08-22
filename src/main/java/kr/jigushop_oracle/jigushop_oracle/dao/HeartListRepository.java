package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.HeartList;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface HeartListRepository extends JpaRepository<HeartList, String> {
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO heart_list VALUES (heart_seq.NEXTVAL, :#{#heartList.memberUpw})")
    void saveHeartList(@Param("heartList") HeartList heartList);

}