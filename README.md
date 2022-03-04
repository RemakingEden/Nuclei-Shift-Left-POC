# RemakingEden in Express/Postgres/Jest/Supertest

RemakingEden is a mock plant shop. It is an example of a very basic REST API with integration tests. My hope is to make a test framework that can be scaled.

## Installation

Ensure you have [Node & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

```bash
npm install
```

```bash
docker-compose up -d
```

## Usage
See the package.json for all available commands

```bash
# Set up the database

# Create the sb
npm run db:create

# Set up the tables
npm run migrate

# Set up some very basic seeded data 
npm run seed
```

```bash
# General server use

# Start the server using nodemon
npm start 

# returns all plants
curl localhost:3000/api/plants

# returns a specific plant
curl localhost:3000/api/plants/1
```
```bash
# Using the test suite
npm test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
