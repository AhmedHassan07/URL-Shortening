# URL-Shortening

Getting Started

First clone or download the repo to your computer.

Clone the repository git clone https://github.com/AhmedHassan07/URL-Shortening.git
Go into the repository cd URL-shortening/.
Install dependencies with NPM npm install.
Wire up the database connection found in /server/config/env/development.json.

run ng build to build angular project and then npm start to start server.
Thats all! Now go and open up your browser at http://localhost:3000

Prerequisites

Node.js - Download and Install Node.js. 
Angular-cli - Download and Install Angular/cli.
Mongodb - Download and Install Mongodb.

Tool Prerequisites

NPM - Node.js package manager, should be installed when you install node.js. NPM (Node Package Manager) will look at the package.json file in the root of the project and download all of the necessary dependencies and put them in a folder called node_modules

NPM Modules Used

Passport - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
Express - Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.
Mongoose - NoSql Database

Front-End Tools Used

Angular - Angular is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications.
Twitter Bootstrap - Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.


Purpose

To generate a short url from a long url and redirect to longurl when short url is hit.

Design Decisions

- Mongodb is used for persistent storage. Hashmap is used to cache links. It would be more efficient if we use Redis for persistent storage and also for cache.
- Url expiry time is to be set while generating url.
- Helmet and ddos modules are used for security purpose.
- Dashboard is set but its not real time No designing or charts are used on dashboard.for now authentication is not set for admin. signin/signup and sessions are set but not in use.
- Url hits count are saved/maintained and are displayed on dashboard.
- For Real time dashboard we need to use socket.io. On url hit and on creating new url a socket event will be emitted from server side and client side will be listening for event when that event will be fired dashboard will be updated.      
- When invalid or expired short url hits it does not redirect to 404 or expiry page.  
