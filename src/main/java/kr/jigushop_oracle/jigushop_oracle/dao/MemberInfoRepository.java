package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberInfoRepository extends JpaRepository<MemberInfo, String> {
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO member_info VALUES (:#{#member.memberUid}, :#{#member.memberUpw}, :#{#member.memberName}, :#{#member.phone}, :#{#member.gender}, CURRENT_TIMESTAMP)")
    int saveMemberInfo(@Param("member") MemberInfo member);

    @Query(nativeQuery = true, value = "SELECT * FROM member_info WHERE member_uid = :memberUid")
    MemberInfo findByIdNative(@Param("memberUid") String memberUid);
}