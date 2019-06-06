package de.jbellmann.gcp.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class HelloGcpGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloGcpGatewayApplication.class, args);
	}

}

@Controller
class IndexController {

	@GetMapping("/")
	public ResponseEntity <String> rediretToAppWithMetaTag ( ) {
		return ResponseEntity.ok("OK");
	}

}
