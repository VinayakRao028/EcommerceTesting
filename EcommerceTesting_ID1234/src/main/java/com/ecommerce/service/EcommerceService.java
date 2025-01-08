package com.ecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.ecommerce.model.Product;
import com.ecommerce.repository.ProductRepository;
import java.util.List;
import java.util.Optional;

/**
 * Service class for handling e-commerce related operations.
 */
@Service
public class EcommerceService {

    private final ProductRepository productRepository;

    @Autowired
    public EcommerceService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * Retrieves all products.
     *
     * @return List of all products
     */
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    /**
     * Retrieves a product by its ID.
     *
     * @param id The ID of the product
     * @return Optional containing the product if found, empty otherwise
     */
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    /**
     * Adds a new product.
     *
     * @param product The product to be added
     * @return The saved product
     */
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    /**
     * Updates an existing product.
     *
     * @param id The ID of the product to update
     * @param productDetails The updated product details
     * @return The updated product, or null if the product was not found
     */
    public Product updateProduct(Long id, Product productDetails) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            Product existingProduct = product.get();
            existingProduct.setName(productDetails.getName());
            existingProduct.setDescription(productDetails.getDescription());
            existingProduct.setPrice(productDetails.getPrice());
            return productRepository.save(existingProduct);
        }
        return null;
    }

    /**
     * Deletes a product by its ID.
     *
     * @param id The ID of the product to delete
     * @return true if the product was deleted, false if it was not found
     */
    public boolean deleteProduct(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }
}