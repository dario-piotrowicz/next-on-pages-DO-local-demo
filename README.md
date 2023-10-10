# next-on-pages DO local demo

The app contains a single route that shows the usage of a durable object in local mode.

## Steps to run the app

Install dependencies:
```
$ npm i
```

Then you need to run the durable object worker in a terminal (so that it can be accessed from the next-on-pages worker):
```
$ cd do_worker
$ npm run dev
```

Then in a separate terminal run the app using `next dev` (with the [dev-bindings](https://github.com/cloudflare/next-on-pages/pull/486) implemented using Miniflare's magic proxy):
```
$ cd next-app
$ npm run dev
```

To instead run the application using `wrangler`, start by building the worker:
```
$ cd next-app
$ npm run pages:build
```
(or `pages:build:watch` for building in watch mode)
abd then run:
```
$ npm run pages:dev
```
