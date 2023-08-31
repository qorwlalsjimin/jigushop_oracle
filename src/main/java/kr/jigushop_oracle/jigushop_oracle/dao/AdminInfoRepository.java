package kr.jigushop_oracle.jigushop_oracle.dao;

import kr.jigushop_oracle.jigushop_oracle.entity.AdminInfo;
import kr.jigushop_oracle.jigushop_oracle.entity.Category;
import kr.jigushop_oracle.jigushop_oracle.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdminInfoRepository extends JpaRepository<AdminInfo, String> {

    // 관리자 정보 추가
    @Modifying
    @Query(nativeQuery = true, value = "INSERT INTO admin_info VALUES (:#{#admin.adminUid}, :#{#admin.adminUpw}, :#{#admin.adminName})")
    int saveAdminInfo(@Param("admin") AdminInfo admin);

    // 관리자 정보 조회
    @Query(nativeQuery = true, value = "SELECT * FROM admin_info WHERE admin_uid = :adminUid")
    AdminInfo findByIdNative(@Param("adminUid") String adminUid);
}