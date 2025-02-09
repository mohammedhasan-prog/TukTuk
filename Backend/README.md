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


