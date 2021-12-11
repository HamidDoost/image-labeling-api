# image-labeling-api

## Indices

- [Authentication](#authentication)

  - [1-User Login](#1-1-user-login)
  - [2-Change password](#2-2-change-password)

- [Image](#image)

  - [Add image label](#1-add-image-label)
  - [Get an image by ID](#2-get-an-image-by-id)
  - [Get images](#3-get-images)
  - [Upload an image](#4-upload-an-image)

- [Invalid requests](#invalid-requests)

  - [Not found URL](#1-not-found-url)

- [User](#user)

  - [Add a user](#1-add-a-user)
  - [Get a user by ID](#2-get-a-user-by-id)
  - [Get users](#3-get-users)

- [Ungrouped](#ungrouped)

  - [Server health check](#1-server-health-check)

---

## Authentication

### 1. 1-User Login

Useres sends request to login.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/auth/login
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
    "username":"admin",
    "password":"admin",
    "role":"ADMIN"
}
```

**_More example Requests/Responses:_**

##### I. Example Request: User Login

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
    "username":"admin",
    "password":"admin",
    "role":"ADMIN"
}
```

##### I. Example Response: User Login

```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0
  .Wyd - x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU;
```

**_Status Code:_** 200

<br>

### 2. 2-Change password

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/auth/change-password
```

**_Headers:_**

| Key  | Value                                                                                                                                                                     | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJuYW1lIjoiSGFtaWQyIiwiaWF0IjoxNjMyNzQ1ODY2LCJleHAiOjE2MzI3NTMwNjZ9.WAHtQY93QBqB0bWEJ3JlciQ1xDFjsF1RIh5Bd6NaxCU |             |

**_Body:_**

```js
{
    "oldPassword":"admin",
    "newPassword":"admin12"
}
```

**_More example Requests/Responses:_**

##### I. Example Request: Change password

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

```js
{
    "oldPassword":"admin",
    "newPassword":"admin12"
}
```

##### I. Example Response: Change password

```js
{
    "message": "Password changed successfully."
}
```

**_Status Code:_** 200

<br>

## Image

### 1. Add image label

**_Endpoint:_**

```bash
Method: PUT
Type: FORMDATA
URL: http://localhost:3000/images/label/1
```

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzI3OTgwNDEsImV4cCI6MTYzMjgwNTI0MX0.ApxRjUp6YGo-oDM21OKVdWKQPbUjN4kbVMDhEsjKPjA |             |

**_Body:_**

| Key        | Value           | Description |
| ---------- | --------------- | ----------- |
| imageLabel | "medical image" |             |

**_More example Requests/Responses:_**

##### I. Example Request: Add image label

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

| Key        | Value           | Description |
| ---------- | --------------- | ----------- |
| imageLabel | "medical image" |             |

##### I. Example Response: Add image label

```js
{
    "id": 1,
    "content": "\"image1\"",
    "imageLabel": "\"medical image\"",
    "imageName": "Sample_img_1",
    "imagePath": "/app/src/routes/uploads/sample_image_1.jpeg",
    "userId": 1,
    "createdAt": "2021-12-11T19:32:33.314Z",
    "updatedAt": "2021-12-11T19:34:33.118Z"
}
```

**_Status Code:_** 200

<br>

### 2. Get an image by ID

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/images/2
```

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzI3OTgwNDEsImV4cCI6MTYzMjgwNTI0MX0.ApxRjUp6YGo-oDM21OKVdWKQPbUjN4kbVMDhEsjKPjA |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get an image by ID

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

##### I. Example Response: Get an image by ID

```js
{
    "id": 2,
    "content": "\"apple\"",
    "imageLabel": "\"medical image2\"",
    "imageName": "Sample_img_2",
    "imagePath": "/app/src/routes/uploads/Sample_image_2.jpeg",
    "userId": 1,
    "createdAt": "2021-12-11T19:33:25.601Z",
    "updatedAt": "2021-12-11T19:35:57.211Z"
}
```

**_Status Code:_** 200

<br>

### 3. Get images

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/images/
```

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzI3OTgwNDEsImV4cCI6MTYzMjgwNTI0MX0.ApxRjUp6YGo-oDM21OKVdWKQPbUjN4kbVMDhEsjKPjA |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get images

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

##### I. Example Response: Get images

```js
[
  {
    id: 1,
    content: '"image1"',
    imageLabel: '"medical image"',
    imageName: "Sample_img_1",
    imagePath: "/app/src/routes/uploads/sample_image_1.jpeg",
    userId: 1,
    createdAt: "2021-12-11T19:32:33.314Z",
    updatedAt: "2021-12-11T19:34:33.118Z",
  },
  {
    id: 2,
    content: '"apple"',
    imageLabel: '"medical image2"',
    imageName: "Sample_img_2",
    imagePath: "/app/src/routes/uploads/Sample_image_2.jpeg",
    userId: 1,
    createdAt: "2021-12-11T19:33:25.601Z",
    updatedAt: "2021-12-11T19:35:57.211Z",
  },
  {
    id: 3,
    content: '"flower"',
    imageLabel: '"medical image2"',
    imageName: "Sample_img_3",
    imagePath: "/app/src/routes/uploads/Sample_image_3.jpeg",
    userId: 1,
    createdAt: "2021-12-11T19:33:58.180Z",
    updatedAt: "2021-12-11T19:36:03.582Z",
  },
];
```

**_Status Code:_** 200

<br>

### 4. Upload an image

**_Endpoint:_**

```bash
Method: POST
Type: FORMDATA
URL: http://localhost:3000/images/upload
```

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzI3OTgwNDEsImV4cCI6MTYzMjgwNTI0MX0.ApxRjUp6YGo-oDM21OKVdWKQPbUjN4kbVMDhEsjKPjA |             |

**_Body:_**

| Key       | Value        | Description |
| --------- | ------------ | ----------- |
| imageFile |              |             |
| content   | "hello"      |             |
| imageName | "file name3" |             |

**_More example Requests/Responses:_**

##### I. Example Request: Upload an image

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

| Key       | Value        | Description |
| --------- | ------------ | ----------- |
| imageFile |              |             |
| content   | "image1"     |             |
| imageName | Sample_img_1 |             |

##### I. Example Response: Upload an image

```js
{
    "status": true,
    "message": "File is uploaded",
    "data": {
        "name": "sample_image_1.jpeg",
        "mimetype": "image/jpeg",
        "size": 6109
    }
}
```

**_Status Code:_** 200

<br>

##### II. Example Request: Upload an image

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

| Key       | Value        | Description |
| --------- | ------------ | ----------- |
| imageFile |              |             |
| content   | "apple"      |             |
| imageName | Sample_img_2 |             |

##### II. Example Response: Upload an image

```js
{
    "status": true,
    "message": "File is uploaded",
    "data": {
        "name": "Sample_image_2.jpeg",
        "mimetype": "image/jpeg",
        "size": 4630
    }
}
```

**_Status Code:_** 200

<br>

## Invalid requests

### 1. Not found URL

**_Endpoint:_**

```bash
Method: GET
Type:
URL:
```

**_More example Requests/Responses:_**

##### I. Example Request: Not found URL

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

##### I. Example Response: Not found URL

```js
{
    "errors": [
        {
            "message": "Not Found"
        }
    ]
}
```

**_Status Code:_** 404

<br>

## User

### 1. Add a user

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/users/
```

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

```js
{
    "username" : "Susi",
    "password": "123456",
    "role":"user",
    "firstName": "Suusi",
    "lastName":"Smith",
    "email":"Ssmith@email"

}
```

**_More example Requests/Responses:_**

##### I. Example Request: Add a user

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

```js
{
    "username" : "Susi",
    "password": "123456",
    "role":"user",
    "firstName": "Suusi",
    "lastName":"Smith",
    "email":"Ssmith@email.com"

}
```

##### I. Example Response: Add a user

```js
{
    "password": "$2a$08$iB96vU6KuUkwFcPL46vCJuHdGPI/vJuxxY3ZcGjsNxSMl6Y6YkxzG",
    "username": "Susi",
    "role": "user",
    "firstName": "Suusi",
    "lastName": "Smith",
    "email": "Ssmith@email.com",
    "id": 11,
    "createdAt": "2021-12-11T20:02:56.547Z",
    "updatedAt": "2021-12-11T20:02:56.547Z"
}
```

**_Status Code:_** 200

<br>

##### II. Example Request: Add a user - Bad passowrd

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

```js
{
    "username" : "Susi",
    "password": "123",
    "role":"user",
    "firstName": "Suusi",
    "lastName":"Smith",
    "email":"Ssmith@email.com"

}
```

##### II. Example Response: Add a user - Bad passowrd

```js
{
    "errors": [
        {
            "message": "Password must be between 6 and 20 characters",
            "field": "password"
        }
    ]
}
```

**_Status Code:_** 400

<br>

##### III. Example Request: Add a user - not valid email

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Body:_**

```js
{
    "username" : "Susi",
    "password": "123456",
    "role":"user",
    "firstName": "Suusi",
    "lastName":"Smith",
    "email":"Ssmith@email"

}
```

##### III. Example Response: Add a user - not valid email

```js
{
    "errors": [
        {
            "message": "Email must be valid",
            "field": "email"
        }
    ]
}
```

**_Status Code:_** 400

<br>

### 2. Get a user by ID

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/users/1
```

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzI3MjYwOTAsImV4cCI6MTYzMjczMzI5MH0.CQxqTyKm3b7OMR9XRpccMkIwSXzCLhnRwtyP-j9C-ss |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get a user by ID

**_Headers:_**

| Key  | Value                                                                                                                                                                    | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| auth | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDg2MTMsImV4cCI6MTYzOTI1NTgxM30.wzupwr0m5Cdx-yhapCeNfkB0XrrPiJqA7FykmyObzc4 |             |

##### I. Example Response: Get a user by ID

```js
{
    "id": 5,
    "username": "Xin",
    "password": "$2a$08$4uFo7eEJdA/83dAUqo.5B.N7imquYTM1VdLmY11.GdxYI2M1jfLc2",
    "role": "user",
    "firstName": "Xin",
    "lastName": "Cao",
    "email": "Xin@gmail.com",
    "createdAt": "2021-12-11T19:18:14.047Z",
    "updatedAt": "2021-12-11T19:18:14.047Z"
}
```

**_Status Code:_** 200

<br>

### 3. Get users

**_Endpoint:_**

```bash
Method: GET
Type: FORMDATA
URL: http://localhost:3000/users/
```

**_Headers:_**

| Key          | Value                                                                                                                                                                    | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Content-Type | application/json                                                                                                                                                         |             |
| auth         | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzI3ODUzNDAsImV4cCI6MTYzMjc5MjU0MH0.dy7JkEtZB2UCN07i0mJhNR_15u06_AU9LWRjE0bXtkU |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get users

**_Headers:_**

| Key          | Value                                                                                                                                                                    | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Content-Type | application/json                                                                                                                                                         |             |
| auth         | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

##### I. Example Response: Get users

```js
[
  {
    id: 2,
    username: "John",
    password: "$2a$08$GBvK9CBI6flctVr0CScQHeS0qqJoREQMlC4b788hd.hT9kaWZYgyC",
    role: "ADMIN",
    firstName: "John",
    lastName: "Smith",
    email: "Johnsmith2@email.com",
    createdAt: "2021-12-11T18:51:55.095Z",
    updatedAt: "2021-12-11T18:51:55.095Z",
  },
  {
    id: 1,
    username: "admin",
    password: "$2a$08$XjPsTheyfijn2R3EB/ogKegNwJ0arfN4GXb5B.zCyQxheficl3nba",
    role: "ADMIN",
    firstName: "Hamid",
    lastName: "Doost",
    email: "hamid@email.com",
    createdAt: "2021-12-11T04:31:00.436Z",
    updatedAt: "2021-12-11T19:12:10.788Z",
  },
  {
    id: 3,
    username: "Sara",
    password: "$2a$08$7iXB58aE.H3Oc/PNZWrPueCdXtxfbTbeHyL7GUb0jFE69gB8m8YLm",
    role: "ADMIN",
    firstName: "Sara",
    lastName: "Smith",
    email: "Sarasmith@email.com",
    createdAt: "2021-12-11T19:14:04.020Z",
    updatedAt: "2021-12-11T19:14:04.020Z",
  },
  {
    id: 4,
    username: "Mukesh",
    password: "$2a$08$c8BTtuG//1mimBaWd4atSeNyr7ZhhGCC6l42DtOR2MWatNMfg7sNu",
    role: "ADMIN",
    firstName: "Mukesh",
    lastName: "Kapishla",
    email: "M.Kap@email.com",
    createdAt: "2021-12-11T19:16:46.830Z",
    updatedAt: "2021-12-11T19:16:46.830Z",
  },
  {
    id: 5,
    username: "Xin",
    password: "$2a$08$4uFo7eEJdA/83dAUqo.5B.N7imquYTM1VdLmY11.GdxYI2M1jfLc2",
    role: "user",
    firstName: "Xin",
    lastName: "Cao",
    email: "Xin@gmail.com",
    createdAt: "2021-12-11T19:18:14.047Z",
    updatedAt: "2021-12-11T19:18:14.047Z",
  },
  {
    id: 6,
    username: "Faiyam",
    password: "$2a$08$dDSQw6w0ov6y2bpPqVX01.qOhaYOkSrDOaswuPRehWSyEzY753XRO",
    role: "user",
    firstName: "Faiyam",
    lastName: "Islan",
    email: "F.Is@gmail.com",
    createdAt: "2021-12-11T19:19:29.821Z",
    updatedAt: "2021-12-11T19:19:29.821Z",
  },
  {
    id: 7,
    username: "Mia",
    password: "$2a$08$1qxFRyznbqELZ/1dgPI7Pun.wgoKi3V0UaYQ8sSt.8Wk1UOD58LQK",
    role: "user",
    firstName: "Mia",
    lastName: "Moore",
    email: "m.moore@gmail.com",
    createdAt: "2021-12-11T19:20:15.875Z",
    updatedAt: "2021-12-11T19:20:15.875Z",
  },
  {
    id: 8,
    username: "Ali",
    password: "$2a$08$Rmy4VenEXbbZhCeC0XFDuOicJcINiaAhrjnSwXwIXnltd5J4hD8Ru",
    role: "user",
    firstName: "Ali",
    lastName: "Abad",
    email: "a.abad@yahoo.com",
    createdAt: "2021-12-11T19:20:51.318Z",
    updatedAt: "2021-12-11T19:20:51.318Z",
  },
  {
    id: 9,
    username: "Bali",
    password: "$2a$08$L1ZEMRPqqPLt5OpEf1M3bedUyaRA2NPezDecvi55wFIiXsSN2bWmC",
    role: "user",
    firstName: "Bali",
    lastName: "wood",
    email: "Bali@yahoo.com",
    createdAt: "2021-12-11T19:21:19.008Z",
    updatedAt: "2021-12-11T19:21:19.008Z",
  },
];
```

**_Status Code:_** 200

<br>

##### II. Example Request: Get users

**_Headers:_**

| Key          | Value                                                                                                                                                                    | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Content-Type | application/json                                                                                                                                                         |             |
| auth         | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MzkyNDk4NDQsImV4cCI6MTYzOTI1NzA0NH0.Wyd-x94vSCxvHVaYDQHWqEcpIP3ATCqufmOeU7oKOTU |             |

**_Query:_**

| Key  | Value | Description |
| ---- | ----- | ----------- |
| page | 1     |             |

##### II. Example Response: Get users

```js
[
  {
    id: 10,
    username: "Tom",
    password: "$2a$08$XT9DqNmeazFqQrsm/u5Ix.H1aMcaC7Gd2N1fVxGqXXfrWn4eha8He",
    role: "user",
    firstName: "Tom",
    lastName: "Fiannon",
    email: "Tom.F@yahoo.com",
    createdAt: "2021-12-11T19:21:58.305Z",
    updatedAt: "2021-12-11T19:21:58.305Z",
  },
];
```

**_Status Code:_** 200

<br>

## Ungrouped

### 1. Server health check

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/health
```

**_More example Requests/Responses:_**

##### I. Example Request: Health

##### I. Example Response: Health

```js
{
    "message": "OK"
}
```

**_Status Code:_** 200

<br>

---

[Back to top](#image-labeling-api)
