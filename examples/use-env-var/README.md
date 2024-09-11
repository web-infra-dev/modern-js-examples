# Modern.js App

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

get the deploy product:

```bash
pnpm run deploy
```

copy the `.env.test` file:

```bash
cp .env.test .output/.env.test
```

run the product:

```bash
MODERN_ENV=test node .output/index.js
```

open `http://localhost:8080`, now you will see:

in terminal:

```bash
API in loader:  http://SERVER_URL_ADDRESS/api
API in server:  http://SERVER_URL_ADDRESS/api
```

in browser console:

```bash
API in browser:  http://URL_ADDRESS/api
```
