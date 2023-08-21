package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberInfoRepository extends JpaRepository<MemberInfo, String> {
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO member VALUES (:#{#member.memberUid}, :#{#member.memberUpw}, :#{#member.memberName}, :#{#member.phone}, :#{#member.gener}, CURRENT_TIMESTAMP")
    int saveAdminInfo(@Param("member") MemberInfo member);
}