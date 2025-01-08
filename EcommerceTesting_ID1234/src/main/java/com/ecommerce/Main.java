package com.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Main entry point for the E-commerce application.
 * This class initializes the Spring Boot application and enables Swagger for API documentation.
 */
@SpringBootApplication
@EnableSwagger2
public class Main {

    /**
     * The main method which serves as the entry point for the application.
     * 
     * @param args Command line arguments passed to the application
     */
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
        System.out.println("E-commerce application is running!");
    }
}