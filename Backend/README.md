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

# Captain Endpoints Documentation

## /captain/register Endpoint

### Description
This endpoint registers a new captain by validating the input data and creating a captain record in the database. Upon successful registration, a JWT token and captain object are returned.

### Endpoint
- **URL:** `/captain/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Required Request Data
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"    // optional
  },
  "email": "john.captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"    // must be one of: "car", "motorcycle", "Auto"
  }
}
```

### Validation Rules
- Email must be valid and unique
- Password must be at least 6 characters long
- Firstname must be at least 3 characters long
- Vehicle color must be at least 3 characters long
- Vehicle plate must be at least 5 characters long
- Vehicle capacity must be at least 1
- Vehicle type must be one of: "car", "motorcycle", "Auto"

### Success Response
```json
{
  "token": "jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car",
      "location": {
        "lat": null,
        "lng": null
      }
    },
    "status": "offline",
    "_id": "captain_id"
  }
}
```

## /captain/login Endpoint

### Description
This endpoint authenticates a captain by verifying their email and password. Upon successful authentication, a JWT token and captain object are returned.

### Endpoint
- **URL:** `/captain/login`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Required Request Data
```json
{
  "email": "john.captain@example.com",
  "password": "password123"
}
```

### Success Response
```json
{
  "token": "jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car",
      "location": {
        "lat": null,
        "lng": null
      }
    },
    "status": "offline",
    "_id": "captain_id"
  }
}
```

## /captain/profile Endpoint

### Description
This endpoint retrieves the profile information of the currently authenticated captain.

### Endpoint
- **URL:** `/captain/profile`
- **Method:** `GET`
- **Authentication:** Required (JWT Token in Authorization header)

### Request Headers
```
Authorization: Bearer <jwt_token>
```

### Success Response
```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car",
      "location": {
        "lat": null,
        "lng": null
      }
    },
    "status": "offline",
    "_id": "captain_id"
  }
}
```

## /captain/logout Endpoint

### Description
This endpoint logs out the current captain by invalidating their JWT token.

### Endpoint
- **URL:** `/captain/logout`
- **Method:** `GET`
- **Authentication:** Required (JWT Token in Authorization header)

### Request Headers
```
Authorization: Bearer <jwt_token>
```

### Success Response
```json
{
  "message": "Logged out successfully"
}
```


# Rides Endpoints

## GET /rides/get-fare

**Description:**  
Calculates and returns the fare details for a ride between the provided origin and destination. This endpoint requires authentication.

**Request:**

- **Method:** GET
- **Headers:**  
  - `Authorization: Bearer <token>` (or equivalent cookie-based auth)
- **Body Parameters:**
  - `origin` (string, required) – The starting point of the ride.
  - `destination` (string, required) – The ending point of the ride.

*Note:* Although this is a GET request, the endpoint expects the data to be passed in the request body.

**Response:**

- **Success (200 OK):**
  ```json
  {
    "fare": {
      "car": "<calculated fare for car>",
      "bike": "<calculated fare for bike>",
      "auto": "<calculated fare for auto>"
    }
  }


# Maps Endpoints Documentation

## GET /maps/get-coordinates

### Description
Retrieves the geographical coordinates (latitude and longitude) for a given address using the Google Geocoding API. This endpoint requires authentication.

### Endpoint
- **URL:** `/maps/get-coordinates`
- **Method:** `GET`
- **Authentication:** Required (JWT Token in Authorization header)

### Query Parameters
- `address` (string, required, minimum 3 characters) – The address to geocode.

### Success Response
```json
{
  "coordinates": {
    "lat": "<latitude>",
    "lng": "<longitude>"
  }
}
```

## GET /maps/get-distance

### Description
Calculates and returns the distance between an origin and a destination. This endpoint requires authentication.

### Endpoint
- **URL:** `/maps/get-distance`
- **Method:** `GET`
- **Authentication:** Required (JWT Token in Authorization header)

### Query Parameters
- `origin` (string, required, minimum 3 characters) – The starting address.
- `destination` (string, required, minimum 3 characters) – The ending address.

### Success Response
```json
{
  "distance": "<calculated distance>"
}
```

## GET /maps/get-suggestion

### Description
Provides address suggestions based on the user input. This endpoint requires authentication.

### Endpoint
- **URL:** `/maps/get-suggestion`
- **Method:** `GET`
- **Authentication:** Required (JWT Token in Authorization header)

### Query Parameters
- `input` (string, required, minimum 3 characters) – The partial address input for suggestions.

### Success Response
```json
{
  "suggestions": [
    "Suggested Address 1",
    "Suggested Address 2",
    "..."
  ]
}