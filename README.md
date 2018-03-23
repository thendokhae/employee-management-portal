# EmPortal (Empoyee Management Portal)



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Project structure:

```
em-portal
├── README.md
├── angular-cli.json 
├── e2e (Contains jasmin / protractor e2e test for the application)
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── shared-components (contains components that are shared across and reused in mutliple places)
│   │   │   ├── shared-components.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.css
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.css
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.css
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── main-components (All the independent components are found here)
│   │   │    └── dashboard  
|   |   |    |   ├── dashboard.component.css
│   │   │    |   ├── dashboard.component.html
│   │   │    |   ├── dashboard.component.spec.ts
│   │   │    |   |__ dashboard.component.ts
|   |   |    |   
|   |   |    |___ employee-profile
|   |   |    |     |__ employee-profile.component.css 
|   |   |    |     |__ employee-profile.component.html
|   |   |    |     |__ employee-profile.component.spec.ts
|   |   |    |     |__ employee-profile.component.ts
|   |   |    |
|   |   |    |___ employees-list
|   |   |    |    |__ employee-list.component.css
|   |   |    |    |__ employee-list.component.html
|   |   |    |    |__ employee-list.component.spec.ts
|   |   |    |    |__ employee-list.component.ts
|   |   |    |    
|   |   |    |___ login
|   |   |    |    |__ login.component.css
|   |   |    |    |__ login.component.html
|   |   |    |    |__ login.component.spec.ts
|   |   |    |    |__ login.component.ts
|   |   |    |    
|   |   |    |
│   │   ├── models
│   │   │   ├── employee.ts
│   │   │   ├── employeeFilter.ts
│   │   │   ├── position.ts
│   │   │   └── user.ts
│   │   ├── services
│   │   │   ├── authentication.service.spec.ts
│   │   │   ├── authentication.service.ts
│   │   │   ├── employee.service.spec.ts
│   │   │   └── employee.service.ts
|   |   |   |__ user.service.spec.ts
|   |   |   |__ user.service.ts
|   |   |
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   └── sass
│   │       ├── material-dashboard.scss
│   │       └── md
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
├── tslint.json
└── typings

```
