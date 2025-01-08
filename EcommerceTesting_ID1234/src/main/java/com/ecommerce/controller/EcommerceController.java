package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.model.Product;
import com.ecommerce.service.ProductService;
import io.swagger.annotations.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@Api(value = "Ecommerce Product Management", description = "Operations pertaining to products in Ecommerce")
public class EcommerceController {

    private final ProductService productService;

    @Autowired
    public EcommerceController(ProductService productService) {
        this.productService = productService;
    }

    @ApiOperation(value = "View a list of available products", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully retrieved list"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @ApiOperation(value = "Get a product by Id")
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") long id) {
        Product product = productService.getProductById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        }
        return ResponseEntity.notFound().build();
    }

    @ApiOperation(value = "Add a new product")
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.createProduct(product);
        return ResponseEntity.ok(createdProduct);
    }

    @ApiOperation(value = "Update an existing product")
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
        Product updatedProduct = productService.updateProduct(id, product);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        }
        return ResponseEntity.notFound().build();
    }

    @ApiOperation(value = "Delete a product")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") long id) {
        boolean deleted = productService.deleteProduct(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}