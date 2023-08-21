package kr.jigushop_oracle.jigushop_oracle;

import kr.jigushop_oracle.jigushop_oracle.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class JigushopOracleApplication {
	public static void main(String[] args) {
		SpringApplication.run(JigushopOracleApplication.class, args);
	}
}
