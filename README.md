<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img alt="Donate" src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img alt="Follow" src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

<hr style="border:3px solid rgb(90,40,40)">

# To create new Nestjs App
```bash
nvm use 18

npm i -g @nestjs/cli

nest new nestjs-project
```
<hr style="border:2px solid rgb(80,80,40)">

# Installed Packages

## 1. Bull
Bull is a nestjs Library used to run independent Jobs which are added in the BullQueue. Bull uses Redis to persist job data. Because it is Redis-backed, your Queue architecture can be completely distributed and platform-independent.

### Package installation
```bash
npm i @nestjs/bull bull

npm i -D @types/bull
```
<hr style="border:2px solid rgb(128,128,128)">

## 2. ConfigService
`@nestjs/config` in NestJS simplifies configuration management by easily loading and accessing settings from sources like environment variables and files. It streamlines the organization of configuration for better maintainability

### Package installation
```bash
npm i @nestjs/config
```
<hr style="border:2px solid rgb(128,128,128)">

## 3. Swagger
Allows us to generate documentation simply based on our code

### Package installation
```bash
npm i @nestjs/swagger swagger-ui-express
```
<hr style="border:2px solid rgb(128,128,128)">

## 4. class-validator
Provides decorators and utilities for validating data using class-based validation rules
### Package installation
```bash
npm i class-validator
```
<hr style="border:2px solid rgb(128,128,128)">

## 4. Event Emitter
Provides a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application.
### Package installation
```bash
npm i @nestjs/event-emitter
```

<hr style="border:2px solid rgb(128,128,128)">

## 4. TypeORM
Maps tables to model classes
### Package installation
```bash
npm i @nestjs/typeorm typeorm pg

npm i typeorm-naming-strategies
```

<hr style="border:2px solid rgb(128,128,128)">

## 5. Serve-Static
serve static content like Single Page Applications (SPA)
### Package installation
```bash
npm i @nestjs/serve-static
```

<hr style="border:2px solid rgb(128,128,128)">

## 6. RXJS
a library made to ease out working with asynchronous and event-based programs
### Package installation
Not Required, as it comes pre-installed with nestJs

<hr style="border:2px solid rgb(128,128,128)">

## 6. RabbitMQ
an open-source and lightweight message broker which supports multiple messaging protocols
### Package installation
```bash
npm i @golevelup/nestjs-rabbitmq
```

<hr style="border:2px solid rgb(128,128,128)">

## 7. Rate Limiter | Throttler
used to override the limit and ttl set in the global module, to give tighter or looser security options
### Package installation
```bash
npm i @nestjs/throttler
```

<hr style="border:2px solid rgb(128,128,128)">

## 8. GraphQL
a powerful query language for APIs and a runtime for fulfilling those queries with your existing data
### Package installation
```bash
npm i @nestjs/graphql graphql-tools graphql apollo-server-express
npm i @nestjs/apollo
```

<hr style="border:2px solid rgb(90,40,40)">

## 9. KafkaJs
### Package installation
```bash
npm i kafkajs
```

<hr style="border:2px solid rgb(90,40,40)">

# Installation

```bash
npm install
```

# Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

# Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

