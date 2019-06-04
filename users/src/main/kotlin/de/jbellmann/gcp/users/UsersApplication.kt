package de.jbellmann.gcp.users

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootApplication
class UsersApplication

fun main(args: Array<String>) {
	runApplication<UsersApplication>(*args)
}

@RestController
class OkOnRoot {

	@GetMapping("/")
	fun root() : ResponseEntity<String> = ResponseEntity.ok("UP")

}

@RestController
class UsersController {

	@GetMapping("/users")
	fun getUsers() : ResponseEntity<List<User>> {
		return ResponseEntity.ok(listOf(User("Klaus", "Meier"), User("Peter", "Behner")))
	}
}

data class User(val firstname : String, val lastname : String)

@Configuration(proxyBeanMethods = false)
class CorsConfiguration {

	@Bean
	fun corsConfigurer() : WebMvcConfigurer {
		return object: WebMvcConfigurer {
			override fun addCorsMappings(registry: CorsRegistry) {
				registry.addMapping("/users/**")
			}
		}
	}

}