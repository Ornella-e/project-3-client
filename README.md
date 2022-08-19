# IRONHACK MODULE 3 PROJECT

# A project by Ornella Escalada Corsi, Joao Beyer and Laia Markixa

## Idea

##ShareCouch

Share Couch is a platform, where the owners of couches can offer their couch for free to other registered users, anywhere in Europe.

- A version of the app is visible to non logged users, but with limited options, like homepage and the details of the couches.
- When users create an account and log in, they can access their profile, make a post, edit it or delete it and leave ratings and comments.

Deployment Netlify: "https://sharecouch.netlify.app/"
Trello: "https://trello.com/b/suDXWMvC"

---

## Pages / content

```
HOME
│
└───
│   │   displays
│   │
│   └───SINGLE COUCH - DETAILS
│          displays the details of a single couch
│          (when host: user can make a post, edit it and delete it| when logged in: user can make a reservation, evaluate accomodation.)
│
└───SIGNUP
│      displays signup form (only to logged out)
│
└───LOGIN
│      displays login form (only to logged out)
│
└───PROFILE
│   │   shows own couch with option to edit + delete, also adding, editing profile info or deleting it.
│   │
│   └───FAVORITE COUCHES
│        displays favorited couches
└───RESERVATIONS
│   │   user can pick a check-in and check-out date. 
│   │
│   └───EVALUATIONS
│        displays an evaluation form (only when stayed at the accomodation)
└───ABOUT
       shows team members

```

---

## Models

### 1. User model

  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    userImage: {
      type: String,
    },
    couch: [
      {
        type: Schema.Types.ObjectId,
        ref: "Couch",
      },
    ],
    location: {
      city: String,
      country: String,
    },
    renting: [{ type: Schema.Types.ObjectId, ref: "RentingTime",  default:[] }],
    evaluations: [{ type: Schema.Types.ObjectId, ref: "Ranking",  default:[] }],
  },

### 2. Couch model

{
    owner: {
      type : Schema.Types.ObjectId,
      ref: 'User'
    },
    title:{
      type:String
    },
    description:{
      type:String
    },
  
    image:{
      type:String
    },
  
   location:{
      city :String,
      country: String
   },
    evaluations:[{
      type: Schema.Types.ObjectId,
      ref: "Ranking",
      default:[]
    }],
    calendar: [{
      type: Schema.Types.ObjectId,
      ref: "RentingTime",
      default:[]
    }],
},

### 3. Ranking model

({
user: { type: Schema.Types.ObjectId, ref: "User", required:true},
evaluation: { type: String, maxLength: 200, required:true},
grade: {type: Number, required:true},
couch: { type: Schema.Types.ObjectId, ref: "Couch", required:true},
});

### 4. Renting time model

({
    user: { type: Schema.Types.ObjectId, ref: "User", required:true},
    startingDate: {type: Date, required:true},
    endingDate: {type: Date, required:true},
    couch: { type: Schema.Types.ObjectId, ref: "Couch", required:true},
  });

---

## Routes

**INDEX**

| Route | HTTP Verb | Description    | View  |
| ----- | --------- | -------------- | ----- |
| /     | GET       | show home page | index |

**AUTH**

| Route        | HTTP Verb | Description                   | View                                   |
| ------------ | --------- | ----------------------------- | -------------------------------------- |
| /auth/signup | GET       | show signup form              | auth > signup                          |
| /auth/signup | POST      | check input, save user to db  | redirect to auth > login if successful |
| /auth/login  | GET       | show login form               | auth > login                           |
| /auth/login  | POST      | check credentials, login user | redirect to index if successful        |
| /auth/logout | POST      | logout user                   | redirect to index                      |


**USERS**

| Route      | HTTP Verb | Description       | View                 |
| ---------- | --------- | ----------------- | -------------------- |
| /myaccount | GET       | show user profile | users > user account |


**RESERVATIONS**
| Route         | HTTP Verb | Description                       | View                 |
| ------------- | --------- | --------------------------------- | -------------------- |
| /reservations | GET       | find all reservations             | users > reservations |
| /:id          | POST      | create reservations, update couch | users > reservations |

**EVALUATIONS**
| Route                                | HTTP Verb | Description                       | View                 |
| ------------------------------------ | --------- | --------------------------------- | -------------------- |
| /evaluations                         | GET       | find all evaluations              | users > evaluations  |
| /:reservationId/evaluations/:couchId | POST      | create reservations, update couch | users > evaluations  |


© 2022 Ornella & Joao & Laia
