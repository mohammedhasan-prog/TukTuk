# /users/register Endpoint Documentation

## Description
This endpoint registers a new user by validating the input data and creating a user record in the database. Upon successful registration, a JWT token and user object are returned.

## Endpoint
- **URL:** `/users/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

## Required Request Data
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"   // optional
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## /users/login Endpoint Documentation

### Description
This endpoint authenticates a user by verifying the email and password. On successful authentication, a JWT token and user object are returned.

### Endpoint
- **URL:** `/users/login`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Required Request Data
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## /users/profile Endpoint Documentation

### Description
This endpoint retrieves the profile information of the currently authenticated user.

### Endpoint
- **URL:** `/users/profile`
- **Method:** `GET`
- **Authentication:** Required (JWT Token in Authorization header)

### Request Headers
```
Authorization: Bearer <jwt_token>
```

### Response Data
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "user_id"
  }
}
```

## /users/logout Endpoint Documentation

### Description
This endpoint logs out the current user by invalidating their JWT token.

### Endpoint
- **URL:** `/users/logout`
- **Method:** `POST`
- **Authentication:** Required (JWT Token in Authorization header)

### Request Headers
```
Authorization: Bearer <jwt_token>
```

### Response
```json
{
  "message": "Logged out successfully"
}
```


