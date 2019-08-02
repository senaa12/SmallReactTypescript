# SmallReactTypescript
Small bolierplate for react project written in typescript.

## Current project structure (src folder only)

```
src
├── actions                 # actions for reducers (one file <=> one reducer)
├── assets                  # assets needed for application (SVGs, images, styles, routes)
│   ├── routes.ts           # defined routes in application
|   ├── style.scss          # base for all style related things, contains mixins, variables etc.
|   └── svg                 # folder to place all svg graphics 
├── components              # folder for all pure components 
├── containers              # folder for all containers
│   ├── app.tsx             # first container that mounts in applications
│   └── breadcrums          # template container for page breadcrumbs
├── model                   # folder for all models/interfaces in application
├── reducers                # all reducers in application (except root)
├── store                   # store-related files
|   ├── configureStore.ts   # file containing function for initializing store
|   └── rootReducer.ts      # root reducer
├── utils                   # utilities for application
|   ├── appSettings.ts      # class containing all settings for application
|   ├── fetcher.ts          # simple fetch-api implementing class
|   └── responsive.tsx      # component for responsive display of application
├── index.html              # template html
├── index.scss              # entry point - style; includes root variables
└── index.tsx               # entry point - component
```

## Previous versions

[Version 1.1](https://github.com/senaa12/SmallReactTypescript/tree/v1.1):
* React
* Sass
* Nice webpack configuration
* svg loading, and Icon component for displaying (all svg files must be placed in `/src/assets/svg` folder and iconName prop identifies icon to select)
* FetchApi wrapper and automatic dispatching fetch actions (Redux not included in v1), you need to setup BE location in appSettings file

[Version 2](https://github.com/senaa12/SmallReactTypescript/tree/v2.0.0):
* Redux store (reducers, initial action and logging)
* color-shades mixin and colors imported in html
* appSettings class, with environment variable reading
* build script

[Version 3](#)
* Router and breadcrumbs component template added
* all colors added to :root
* ts-lint fixed
* added component for responsive screens (just import Mobile or Desktop from `src/utils/responsive.tsx`)

## Installing

Just: 

```
npm install
```

And:

```
npm start
```


## Authors

* **Luka Senicic** 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
