# Deduplicate Schema

A TypeScript Node.js library to remove all duplicate objects from a given JSON schema. It recursively traverses the entire schema and deduplicates any array of objects it encounters.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the library, run the following command in your terminal:

```bash
npm install deduplicate-schema
```

This will install the library and its dependencies.

## Usage

To use the library, import it in your TypeScript or JavaScript file, and then call the `deduplicateSchema` function with the schema you want to deduplicate.

Here's a simple example:

```typescript
import deduplicateSchema from 'deduplicate-schema';

const schema = {
  // Your JSON schema here
};

const newSchema = deduplicateSchema(schema);
```

This will return a new schema with all duplicate objects removed from any arrays.

## Running Tests

To run tests, navigate to the root directory of the project and run:

```bash
npm test
```

This will execute all the test cases defined in the `tests/` directory.

## Build

To build the project, run:

```bash
npm run build
```

This will compile the TypeScript files and output them to the `dist/` directory. It will also copy test files from `tests/files/*` to `dist/tests/files/`.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

MIT License. See the `LICENSE` file for more information.
