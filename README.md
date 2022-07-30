# IRONHACK MODULE 3 PROJECT

# A project by Ornella Escalada Corsi, Joao Beyer and Laia Markixa

## Idea

##ShareCouch

Share Couch is a couch exchange app, where couch owners can share their couch with other registered users for free, anywhere in the world.

- A version of the app is visible to non logged users, but with limited options, like search.
- When users log in, they can access their profile, edit it, and leave ratings and comments, also edit password.

Deployment: ""
Trello: https://trello.com/b/suDXWMvC
Presentation slides: ""

---

## Pages / content

```
HOME
│
└───
│   │   displays
│   │
│   └───SINGLE COUCH
│          displays single couch
│          (when logged in: user can create review or favorite others)
│
└───SIGNUP
│      displays signup form (only to logged out)
│
└───LOGIN
│      displays login form (only to logged out)
│
└───PROFILE
    │   shows own couch with option to edit + delete, also adding, editing profile info or deleting it.
    │
    └───FAVORITE COUCHES
        displays favorited couches


```

---

## Models

### 1. User model

{
username: {
type: String,
unique: true,
required: true
},
email: {
type: String,
unique: true,
required: true
},
password: {
type: String,
required: true
},

    userImage: {
      type: String,
    },

couch: [{
type: Schema.Types.ObjectId,
ref: "Couch"
}],
location: {
city: String,
country: String
},
},

### 2. Couch model

{
owner: {
type : Schema.Types.ObjectId,
ref: 'User'
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
evaluations:{
type: Schema.Types.ObjectId,
ref: "Evaluations"
},
calendar:{
type: Schema.Types.ObjectId,
ref: "Calendar"
},
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


**REVIEWS**
Ingredientreviews > create-review |
| /reviews/:id/review | POST | save review to db | redirect to recipes-details |

**USERS**

| Route    | HTTP Verb | Description       | View                 |
| -------- | --------- | ----------------- | -------------------- |
| /profile | GET       | show user profile | users > user-profile |

© 2022 Ornella & Joao & Laia
