package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.dto.HeartForm;
import kr.jigushop_oracle.jigushop_oracle.entity.HeartList;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface HeartListRepository extends JpaRepository<HeartList, String> {

    //회원별 즐겨찾기 바구니 추가
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO heart_list VALUES (heart_list_seq.NEXTVAL, :#{#form.memberUid})")
    void saveHeartList(@Param("form") HeartForm form);

    //특정 회원의 즐겨찾기 바구니 아이디 조회
    @Query(nativeQuery = true, value = "SELECT heart_id FROM heart_list WHERE member_uid = :memberUid")
    Long findByIdNative(@Param("memberUid") String memberUid);

}