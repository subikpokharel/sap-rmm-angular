Steps to run and deploy Angular Application :

Prior to Angular CLI we need to have Nodejs installed in your system . 

Nodejs has to be greater than 8.11 and npm has to be greater than 5.6.
Check Node version and npm version using npm -v and node -v.

1. Use npm install -g @angular/cli
2. ng new my-app --> Creates New Angular Application 
3. Run the application by opening browser: localhost:4200 
ng serve --open
4. To Install Bootstrap use  npm install --save bootstrap@3 , AS we have used version 3 in our application.
5. In angular.json file , copy styles as: 
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ]

Links for Angular  :

https://www.tutorialspoint.com/angular_material7/angular_material7_environment_setup.htm

https://angular.io/guide/setup-local




# SapRmmApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
