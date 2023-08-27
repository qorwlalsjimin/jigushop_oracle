package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.Date;

public interface MemberInfoRepository extends JpaRepository<MemberInfo, String> {
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO member_info VALUES (:#{#member.memberUid}, :#{#member.memberUpw}, :#{#member.memberName}, :#{#member.phone}, :#{#member.gender}, CURRENT_TIMESTAMP)")
    int saveMemberInfo(@Param("member") MemberInfo member);

    //회원 정보 수정
    @Modifying
    @Query(nativeQuery = true, value = "UPDATE member_info SET member_name=:#{#member.memberName}, phone=:#{#member.phone}, gender=:#{#member.gender} WHERE member_uid=:#{#member.memberUid}")
    int editMember(@Param("member") MemberInfo member);


    //회원 정보 조회
    @Query(nativeQuery = true, value = "SELECT * FROM member_info WHERE member_uid = :memberUid")
    MemberInfo findByIdNative(@Param("memberUid") String memberUid);

    // 회원 탈퇴
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM member_info WHERE member_uid = :memberUid")
    int deleteMember(@Param("memberUid") String memberUid);

}