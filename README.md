# Simple Authentification System (include password reset) with MERN stack : 

MERN APP for registering users with mongodb and authentication using a JWT (json web token), It includes also a password reset functionality.



# Configuration :
Create a ```config.env``` file in the root directory and fill it with the following informations :

```
PORT=5000

DATABASE_CONNECTION="Your DB URI"

JWT_SECRET="Your JWT Secret key"
JWT_EXPIRE="10min"

#For password Reset :

EMAIL_SERVICE=""
EMAIL_USERNAME=""
EMAIL_PASSWORD=""
EMAIL_FROM=""
```

# Quick Start :
```Javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```


For more details follow the tutorial : https://www.youtube.com/watch?v=h6fOErvWIGI
