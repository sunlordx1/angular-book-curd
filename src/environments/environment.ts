// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDDUQvw6v9vPwdk65I5GYdmo_kvJXilO3Q",
    authDomain: "sun-book.firebaseapp.com",
    databaseURL: "https://sun-book.firebaseio.com",
    projectId: "sun-book",
    storageBucket: "",
    messagingSenderId: "1093325474079"
  }
};
