# Simple User Registration and Login functionality with MERN stack.



# Configuration :
- Create a ```config.env``` file in the root directory and fill it with the following informations :

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


Advanced Node JS Authentication Workflow (include password reset)
