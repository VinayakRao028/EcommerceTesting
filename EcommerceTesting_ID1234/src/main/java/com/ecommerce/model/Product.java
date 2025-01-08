package com.ecommerce.model;

import java.math.BigDecimal;
import java.util.UUID;

/**
 * Represents a product in the e-commerce system.
 */
public class Product {
    private UUID id;
    private String name;
    private String description;
    private BigDecimal price;
    private int stockQuantity;
    private String category;

    /**
     * Default constructor for Product.
     */
    public Product() {
        this.id = UUID.randomUUID();
    }

    /**
     * Parameterized constructor for Product.
     * 
     * @param name          The name of the product.
     * @param description   The description of the product.
     * @param price         The price of the product.
     * @param stockQuantity The available stock quantity of the product.
     * @param category      The category of the product.
     */
    public Product(String name, String description, BigDecimal price, int stockQuantity, String category) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.description = description;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.category = category;
    }

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * Checks if the product is in stock.
     * 
     * @return true if the product is in stock, false otherwise.
     */
    public boolean isInStock() {
        return stockQuantity > 0;
    }

    /**
     * Decreases the stock quantity by the specified amount.
     * 
     * @param quantity The quantity to decrease.
     * @throws IllegalArgumentException if the quantity is greater than the available stock.
     */
    public void decreaseStock(int quantity) {
        if (quantity > stockQuantity) {
            throw new IllegalArgumentException("Requested quantity exceeds available stock.");
        }
        stockQuantity -= quantity;
    }

    /**
     * Increases the stock quantity by the specified amount.
     * 
     * @param quantity The quantity to increase.
     */
    public void increaseStock(int quantity) {
        stockQuantity += quantity;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", stockQuantity=" + stockQuantity +
                ", category='" + category + '\'' +
                '}';
    }
}