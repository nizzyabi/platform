# Nizzyabi.com

Nizzyabi.com is a Programming Course Platform for self-taught developers who want to improve their web development skills.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

Requirements for the software and other tools to build, test, and push 
- [NPM](https://www.npmjs.com/) (or any other package manager)

Note: In case you use another package manager, research the equivalent commands for your package manager.

### Installing

A step-by-step series of examples that tell you how to get a development
environment running

### Spin up the environment
```shell
npm run compose:up
```
> ℹ️ You can spin down the environment with `npm run compose:down`, or `npm run compose:wipe`
> to completely wipe the environment and the volumes it created

Alternatively you can use a local postgres server or an instance in the cloud (Supabase for example)

### Setting up environment variables
Copy the `.env.example` file into your own `.env` file 
(which you have to create at the same level) and fill in the environment variables

### Setting up the database
```shell
npx prisma generate
npx prisma migrate dev
```

### Installing modules and dependencies:
```shell
npm install --save-dev
```

### Running the local development server
```shell
npm run dev
```

You should now be able to see the project up and running at http://localhost:3000/

## Updating the database schema
Update the prisma schema (located in [./prisma/schema.prisma](./prisma/schema.prisma))

Generate a new migration with the following prisma command:
```shell
npx prisma migrate dev --name "MIGRATION NAME"
# or
npx prisma migrate dev
# then it will prompt you for a migration name
```

Regenerate the prisma client just to be sure it's up-to-date
```shell
npx prisma generate
```

The schema and the database should be updated now, you're good to go.

## Running the tests

These steps ensure you are doing everything correctly and stay within structure.

### Style test

Check if the best practices and the right coding format have been used:

```shell
npm run check
# or
npx prettier . --check
```

If the command before succeeds, you should see something similar to this:

    Checking formatting...
    All matched files use Prettier code style!

If that is not the case, you can adjust your code to match the project's code format. For that simply run:

```shell
npm run format
# or
npx prettier . --write
```

## Built With

  - [Contributor Covenant](https://www.contributor-covenant.org/) - Used for the Code of Conduct
  - [GNU](https://www.gnu.org/) - Used to choose the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Authors

  - **Nizar Abi** - *Project owner* - [NizarAbiZaher](https://github.com/NizarAbiZaher)

See also the list of
[contributors](https://github.com/NizarAbiZaher/platform/graphs/contributors)
who participated in this project.

## License

This project is licensed under the GNU General Public License Version 3 - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

  - [dpaulos6](https://github.com/dpaulos6) - *Styling and project cleanup, README writer*
  - [mezotv](https://github.com/mezotv) - *Repository setup, Folder structure cleanup*
