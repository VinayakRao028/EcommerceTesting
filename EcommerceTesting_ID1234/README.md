# E-commerce Testing Project

## Project Overview
This project is dedicated to testing an e-commerce platform. It encompasses various testing methodologies to ensure the reliability, functionality, and performance of the e-commerce system.

## Table of Contents
1. [Setup](#setup)
2. [Running Tests](#running-tests)
3. [Test Suites](#test-suites)
4. [Reporting](#reporting)
5. [Continuous Integration](#continuous-integration)

## Setup

### Prerequisites
- Node.js (v14 or later)
- Java Development Kit (JDK) 11 or later
- Maven

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-repo/EcommerceTesting_ID1234.git
   cd EcommerceTesting_ID1234
   ```

2. Install Node.js dependencies:
   ```
   npm install
   ```

3. Install Java dependencies:
   ```
   mvn install
   ```

## Running Tests

### JavaScript Tests
To run the JavaScript tests:
```
npm test
```

### Java Tests
To run the Java tests:
```
mvn test
```

## Test Suites

1. **Unit Tests**: Located in `src/test/java` and `src/test/javascript`
2. **Integration Tests**: Found in `src/integration-test`
3. **UI Tests**: Selenium-based tests in `src/ui-test`
4. **Performance Tests**: JMeter scripts in `src/performance-test`

## Reporting

Test reports are generated after each test run:
- JavaScript test reports: `reports/js-test-results`
- Java test reports: `target/surefire-reports`
- UI test reports: `reports/ui-test-results`
- Performance test reports: `reports/performance-test-results`

## Continuous Integration

This project uses Jenkins for CI/CD. The Jenkins pipeline is defined in `Jenkinsfile` at the root of the project.

To set up the CI pipeline:
1. Ensure Jenkins is installed and running
2. Create a new pipeline job in Jenkins
3. Configure the job to use the `Jenkinsfile` from the repository

The pipeline includes stages for building, testing, and deploying the application.

---

For more detailed information about specific test cases or methodologies, please refer to the documentation in the `docs` folder.