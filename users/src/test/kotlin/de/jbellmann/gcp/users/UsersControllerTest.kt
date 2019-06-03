package de.jbellmann.gcp.users

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType.APPLICATION_JSON
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultHandlers.print
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*

@WebMvcTest
class UsersControllerTest(@Autowired val mockMvc: MockMvc) {

    @Test
    fun `get all users`() {
        mockMvc.perform(get("/users").accept(APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk)
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("\$.[0].firstname").value("Klaus"))
                .andExpect(jsonPath("\$.[0].lastname").value("Meier"))
                .andExpect(jsonPath("\$.[1].firstname").value("Peter"))
                .andExpect(jsonPath("\$.[1].lastname").value("Behner"))
    }
}