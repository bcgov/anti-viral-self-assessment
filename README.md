This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

yarn install

First, run the development server:

Using Make commands:

```bash
make run
```

Or with npm/yarn commands:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Accessibility

This package handles automated accessibility using the [axe test runner](https://github.com/pa11y/pa11y-runner-axe)

Run tests with `a11y-test`

Screenshots will be output into `/a11y/results` for each tested page.

## Deployment

This project uses a mix of tagging and push triggered actions workflows to deploy to dev, test, or production

The steps to deploy the project are as follows:
1. Make your changes locally on a branch from main
2. Check code quality: 
```bash
make lint
```
3. Format code: 
```bash
make format-check
```
4. Run automated test: 
```bash
make test
```
5. Build app for Prod: 
```bash
make build
```
6. "git add" and "git commit" your changes as normal
7. Run "git log", and grab the hash of your commit. It should be the first entry
8. Run (depending on the env where you want to deploy)
```bash
make tag-dev
make tag-test
make tag-prod
```
Or 

Run "git tag -f -a <dev/test/prod> <commit hash>"

9. Push your changes to your branch
10. Open a Pull Request for your branch
11. Allow the testing actions to complete and get someone to review your PR (if any of these fails, make changes and git add, commit, push)
12. Once all tests have passed and the changes are approved, merge the code to main
13. This will trigger a deployment that uses whichever tag you set (dev/test/prod) as the target environment

Note: you can run the unit tests on your local by running "make test" or "yarn test"