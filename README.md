# Foo Project

The official bar monorepo.

| Package | Description                          |
| ------- | ------------------------------------ |
| mobile  | React Native Expo app.               |
| server  | GraphQL server                       |
| admin   | Nextjs admin dashboard               |
| shared  | Shared components between modules    |

## The Error

Start the `server` package, run `yarn gen` in the `shared` project and build it with `yarn build`, run `yarn dev` in the `admin` project and the following error will be thrown.

![Error Screenshot](https://i.imgur.com/dET9l6B.png)

I noticed that removing this hook from my admin project will solve this error, check the index page in the `admin` package.
