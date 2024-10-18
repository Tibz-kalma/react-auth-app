# 🌐 Test Cases for API Endpoints with JMeter

## 1. Users Endpoint
- **Endpoint**: `GET https://jsonplaceholder.typicode.com/users`

### 🛠️ JMeter Test Steps:
1. Create an **HTTP Request** sampler for the users endpoint.

### ✅ Assertions:
- **Response Assertion**: 
  - Verify the response code is **`200`**.
- **JSON Assertion**: 
  - Validate that each user object contains the following fields:
    - `id`
    - `name`
    - `username`
    - `email`
    - `address`
    - `phone`
    - `website`
    - `company`

### 📊 Listeners:
- **View Results Tree**: Inspect individual responses for verification.
- **Summary Report**: Overview of test results, including successful requests and response times.
- **Aggregate Report**: Analyze detailed performance metrics (average and percentile response times).

---

## 2. Albums Endpoint
- **Endpoint**: `GET https://jsonplaceholder.typicode.com/albums`

### 🛠️ JMeter Test Steps:
1. Create an **HTTP Request** sampler for the albums endpoint.

### ✅ Assertions:
- **Response Assertion**: 
  - Verify the response code is **`200`**.
- **JSON Assertion**: 
  - Validate that each album object contains the following fields:
    - `userId`
    - `id`
    - `title`

### 📊 Listeners:
- **View Results Tree**: Inspect responses to ensure data integrity.
- **Summary Report**: Review overall performance and success rates.
- **Aggregate Report**: Evaluate detailed response time statistics.

---

## 3. Photos Endpoint
- **Endpoint**: `GET https://jsonplaceholder.typicode.com/photos`

### 🛠️ JMeter Test Steps:
1. Create an **HTTP Request** sampler for the photos endpoint.

### ✅ Assertions:
- **Response Assertion**: 
  - Verify the response code is **`200`**.
- **JSON Assertion**: 
  - Validate that each photo object contains the following fields:
    - `albumId`
    - `id`
    - `title`
    - `url`
    - `thumbnailUrl`

### 📊 Listeners:
- **View Results Tree**: Use this to verify the structure of individual photo responses.
- **Summary Report**: Summarize performance metrics for the photo requests.
- **Aggregate Report**: Analyze performance metrics in detail.
