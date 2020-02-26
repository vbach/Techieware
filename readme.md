## Techieware

1. [Branding Techieware](#1)
2. [User Stories](#2)
3. [UX Flow & Interactive Prototype](#3)
4. [Install Project](#4)

<br><hr>

<br><hr><a name=1>

## Branding Techieware

Techieware is a computer hardware online store. This store is directed toward hobbiest and PC Gamers who enjoy building their computers piece by piece. I am building this store for this audience to give them other options outside of the big name computer hardware stores, as well as to encourage build your own PC's instead of purchasing out of the box. By specializing in computer hardware built for the needs of todays PC gamers, this shop will help computer building enthusiasts to find the best products more quickly. Combined with building computers is a passion of mine, as well as PC gaming, I have a eye for quality product and know what the current PC gamer is looking for in a top knotch home built PC.

## Target Audience & Industry:

Techiewares target audience is PC Gamers who reside in the US and are between the ages of 25 and 40 years old. The targetted industry is Computer Hardware.

## Impact of Your Work:

I chose this audience and industry because it is a audience I am a member of and a industry that I am very familiar with. I also chose the audience of PC Gamers and PC building enthusiasts because these are primary groups that would be seeking these types of products. A person who uses a computer for every day tasks such as social media, research, etc. would not seek out computer parts or likely be very interested in them. However someone who uses their PC for video games is much more likely to seek out ways to improve their computer specs to enhance their gaming experience.

Professionally, this project will demonstrate my knowledge and interests beyond development and design. It could potentially open doors to other companies who would value my expertise and knowledge of computer hardware and computer building. This project would also impact the gaming community in a sense that computer hardware is being promoted and sold by a fellow PC gaming enthusiast. This would build trust with the audience and would give them confidence in the products being offered.

>

## Technologies Used:

> I will be using Materialize for the front end of Techieware. For the back end, I will be using the MERN stack which includes MondoDB, Express, React and Node. For the unique features of Techieware, there will be an automatic update of quantity to the cart on the navigation, as well as a login/sign up options for customers.

<br><hr><a name=2>

# 2. User Stories & Features:

- **Header Count Functionality**: As a Client-User, I want to see the 'quantity of total products added' to my cart before leaving the Home page. (Quantity should show on the TOP "Home Page" header----in real time);
- **Cart-Page Functionality**: As a Client-User, I want to automatically be taken to the "Cart" page (after adding a new product) to see the current total of my order at the bottom of the Cart page.
- **Client Signup and Login**: As a Client-User, I want to initiate & sign-up for an account.

**[Spreadsheet for User Story Submission](https://drive.google.com/open?id=1P7U5gIA3sG0pqdL2oTFEYSg9WDHS0rkq)**

![Vanessa's CPR User Story Template](https://drive.google.com/uc?id=1-1ncB4lRxm-iZq7Befwkw4jmq3hu7rrT)

<br><hr>

<a name=3>
 
 
# 3. UX Flow & Interactive Prototype

![Techieware Flowchart)](https://drive.google.com/uc?id=1pZVYL1xM8MwVMWgqptrZVWF9sCu_RtIn)

<br><hr>

<a name=4>
 
 
# 4. Install Project
1. Clone the repo to a directory on your computer
```
git clone https://github.com/ePortfolios/wd6-1911-vbach.git
```

2. Once you have cloned the repo, in the root directory (02-ProjectCPR-Work) install all dependencies

```
npm install
```

3. cd to techieware and install dependencies

```
cd techieware
npm install
```

4. In root directory (02-ProjectCPR-Work) create a config directory and keys.js and passport.js

```
mkdir config
touch keys.js & passport.js
```

5. In config/keys.js add the following code:

```
module.exports = {
  mongoURI:
    'YOUR_MONGO_URI',
  secretOrKey: 'secret'
};
```

6. Go to MongoDB and create a database with the following columns: name, email, password

7. Replace the mongoURI in keys.js with your MongoDB's MongoURI

8. Open config/passport.js and add the following code:

```
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
```

9. Once all dependencies have been installed and the database created and connected return to the root directory and run the app.

```
npm run dev
```
