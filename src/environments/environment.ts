// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDZg7q1kHXM457OyCzCcXX6SR6zRGDUyfQ",
    authDomain: "scrumportal.firebaseapp.com",
    databaseURL: "https://scrumportal.firebaseio.com",
    projectId: "scrumportal",
    storageBucket: "scrumportal.appspot.com",
    messagingSenderId: "1064432034503"
  }

};
