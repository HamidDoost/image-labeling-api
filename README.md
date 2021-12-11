# Image Labeling API

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [API Description](#API-Description)
- [List of Technologies](#List-of-Technologies)
- [Features](#features)
- [Installation](#installation)
- [Configuration Setup](#configuration-setup)
- [Usage](#usage)
- [Testing](#testing)
- [Design and Architecture](#Design-and-Architecture)
- [Deployment Sugesstions](#Deployment-Sugesstions)
- [License](#license)
- [Contact Information](#contact-information)

---

## API Description

image-labeling-api is an image lableing and handelling API. This API manages uploading images, assiging lables (tags) to them and also enables retrieving or changing image information. Users have different roles such as administrators with highest access to the system. Every user should login to the system to upload an image and assign a lable to it. Labelling can also be done to an existing image in the system separatly. All users can upload, change and retrive information of images. Only administrators can register a new user. But, every user can change his/her own password in the system.

View the application at [Documentaion](Documentaion_v.1.0.0.html)

---

## List of Technologies

I used the following technologies for creating ILAPI.
| Technology | Description | Version |
|------------|-------------------------------------------|--------|
| TypeScript | Main programming language | 4.4.3 |
| Node.js | Runtime JavaScript Environment | 17.2.0 |
| Express.js | Web application framework for Node.js | 4.17.1 |
| TypeORM | Object Relational Mapping | 0.2.41 |
| JEST | Testing Framework | 27.2.1 |
| JWT | JASON Web Token for authentication| 8.5.1 |
| PostgreSQL | Relational Databse Management System | 14.1 |
| pgAdmin | PostgreSQL Tools | v |
| Docker | Containerization of app, database and database admin tools | 20.10.11 |
| Postman and docgen | Testing API endoints and generating documentation | 9.3.1 |

`

---

## Features

image-labeling-api has number of good features as follows:

- Documentation
- Custom error handelling
- Authentication
- Expressive use of HTTP status codes
- Log activity
- Paginate the results
- Express URLs with nouns rather than verbs
- Consistent code convention
- Scalable designed architecture
- Database migration
- Unit testing
- Development-environment and Production-ready docker images

---

## Installation

For installation please consider the following steps:

- Clone the repository from git [link to repository](https://github.com/HamidDoost/image-labeling-api.git)

- Build docker image (~docker-compose build)
- Start the docker image (~docker-compose up)

---

## Configuration Setup

### Dtabase migration

API features authentication and only admin users can create a new user. First admin user should be added through database migration. For migration and creating first user, please run the following command.

~npm run migration:run

### Database schema and access

To check database schema and access to it, please do the following steps:

pgAdmin:

- open 127.0.0.1:5050 in your borwser
- Login to pgAdmin. username: root@root.com, password: root
- in pgAdmin create new server with following parameters. server name: yourchoice, server host: db, port:5432, database: postgres, username: postgres, password: postgres

Alternatively you can access databse in terminal:

- ~docker exec -it image-labeling-api_db_1 bash
- ~psql -U postgres

---

## Usage

Detailed documentation for usage of API is provided in two formats [HTML](./docs/Documentaion_v.1.0.0.html) and [Markdown](./docs/Documentaion_v.1.0.0.md)

---

## Testing

To run unit tests please run the following command:

~npm test

I added CI through Github Actions on push and pull_requests.

---

## Design and Architecture

image-labeling-api was designed base on the REST API architecture and features:

Platform independence. Any user is able to call the API, regardless of how the API is implemented internally. It uses standard protocols, and client and server agree on the format of the data (JSON) to exchange.

Service evolution. This API is able to evolve and add functionality independently from client applications. Additionally, during the service evolution, existing client applications can continue to function without modification.

Figure below shows an example of flow of a succesful request from API.

![Flow of a request](https://github.com/HamidDoost/image-labeling-api/blob/dev-branch/docs/User_request_flow.jpg)

### Database design and data modelling

image-labeling-api has user and image data models in a schema that provides one to many relationship between user and image models. Figure below demonstrates the entitiy relation diagram designed for database.

![ERD diagram](https://github.com/HamidDoost/image-labeling-api/blob/dev-branch/docs/ERD.jpg)

### Microservice design and scalable architecture

image-labeling-api is scalable and can be used as a microservice. Figure below shows aa suggested architecture for this purpose.

![Microservice architecture](https://github.com/HamidDoost/image-labeling-api/blob/dev-branch/docs/Microservices_architecture.jpg)

---

## Deployment Sugesstions

A sugesstion for deployment of API in AWS is shown in figure below.

![Depolyment architecture](https://github.com/HamidDoost/image-labeling-api/blob/dev-branch/docs/Deployment_architecture.jpg)

---

## License

image-labeling-api is licensed under MIT.

---

## Contact Information

My Github username is hamiddoost.
