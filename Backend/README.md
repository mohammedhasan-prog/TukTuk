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

## How Data is Sent by User
The user sends the data as a JSON object in the body of the POST request. The `Content-Type` header must be set to `application/json`.
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```


