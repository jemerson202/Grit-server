# GRIT
GRIT (Girls Representing in Trades). GRIT is a unique program administered by [YWCA Missoula](http://ywcaofmissoula.com/) as part of their GUTS!  (Girls Using Their Strengths) Girls Leadership Programming. With compelling content and dynamic design elements, the site is intended to present a strong, positive image of girls and women in trades. The website is built with React JS and will help GRIT’s recruiting efforts by raising the program’s profile on the web.

##GRIT project description

The GRIT project website includes two github repositories: [GRIT](https://github.com/Montana-Code-School/GRIT) and [Grit-server](https://github.com/jemerson202/Grit-server). Each repository is deployed to its own Heroku instance. The front-end static files (__GRIT__) can be found at: [https://damp-brushlands-83783.herokuapp.com/](https://damp-brushlands-83783.herokuapp.com/). The back-end server (__Grit-server__) can be found at [http://shrouded-stream-81997.herokuapp.com/](https://shrouded-stream-81997.herokuapp.com/).

__GRIT__ is the repository with the project's static front-end files. It is built primarily with Create-React-App. Since the built-in server in the Create-React-App package (npm package React-Scripts) is primarily there for development purposes only, it is not suitable for a production environment. Heroku also doesn't seem to work easily when the static front-end files make calls to a production server from within the same Heroku instance. For this reason, the decision was made to separate the GRIT front-end project files from the GRIT server and to set up two separate repositories and Heroku instances.

##Getting start (development environment)

####GRIT (front-end)
1. git clone the repository [GRIT](https://github.com/Montana-Code-School/GRIT)
2. In the terminal, change directory into the project root directory.
3. run `npm install` to install dependencies
4. To start the development server and run in local host, run `npm start` in terminal

####Grit-server (server/API)
1. git clone the repository [Grit-server](https://github.com/jemerson202/Grit-server)
2. In the terminal, change directory into the project root directory
3. run `npm install` to install dependencies
4. Get a [Mailgun](https://www.mailgun.com/) API key and domain. The contact form in the front-end project (GRIT/src/components/contactform.js) is built to integrate with the Mailgun send email API and NodeMailer (npm package). The user will need to set up a Mailgun account, get a new API key and domain address. See [Mailgun documentation](https://documentation.mailgun.com/en/latest/user_manual.html) and [this tutorial](http://denisecase.github.io/2016/10/08/enabling-contact-form/)for additional documentation.
5. In the __Grit-server__ root directory, add a 'config.json' file if there isn't one. (The config.json file should be listed in the .gitignore file and should not be pushed to github). Include the following:
    {
       "auth": {
           "api_key": "YOUR_API_KEY",
           "domain": "DOMAIN.mailgun.org"
       }   
    }
5. In the server file (Grit-server/app.js), change out the email address for the correct YWCA Missoula/GRIT program contact person in 'to:' and 'from:' in the `mailOptions` variable.
6. To start the development server and run in local host, run `node app.js` in terminal

##YWCA Branding considerations

If developers work on this in the future for the YWCA, there are branding standards that the YWCA wants to use so that the site is in line with other YWCA marketing materials.  Please see YWCA brand guidelines at http://www.ywcabrand.org/ for reference about typography, graphics and logo standards.

# Built With
- React [create-react-app](https://www.npmjs.com/package/create-react-app)
- JSX
- [Mailgun](http://www.mailgun.com)
- Express
- Node.js

# Authors
Montana Code School Part Time 2017 Class
