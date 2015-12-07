# MEANstack-app

Steps to create a MEANstack-app with database, user authentication, sessions, angular and bootstrap

create repo

in repo touch server.js

npm init --> yes

npm install --save express express-session morgan
npm install --save mongoose body-parser request
npm install --save angular bootstrap

create a public folder with index.html
in public folder create js/app.js and css/style.css

-----------------------------------

in server.js require all of the dependencies

declare the server app = express()

add a port:

app.listen(3000, function () {

    console.log('server running on localhost 3000');

});

-----------------------------------
