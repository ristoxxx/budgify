
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// require database connection 
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const Project = require("./db/projectModel");
const Subproject = require("./db/subprojectModel");
const Scenario = require("./db/scenarioModel");
const Comment = require("./db/commentModel");

const auth = require("./auth");


// execute database connection 
dbConnect();


// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


// body parser configuration
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});


// register endpoint
app.post("/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});


// user get endpoint
app.get("/user/:id", (request, response) => {
    // find the new user
    User.findById(request.params.id, 'email -_id')
      // return success if the new user is added to the database successfully
      .then((result) => {
        response.status(201).send({
          message: "User found Successfully",
          result,
        });
      })
      // catch error if the new user wasn't added successfully to the database
      .catch((error) => {
        response.status(500).send({
          message: "User does not exist",
          error,
        });
      });
});

// project endpoint
app.post("/project", (request, response) => {
	// create a new user instance and collect the data
  	const project = new Project({
    	name: request.body.name, 
  		description: request.body.description,
  		owner: request.body.owner,
  		budget: request.body.budget,
      timelimit: request.body.timelimit,
  		type: request.body.type
		//link: request.body.link,
  	});
	// save the new user
	project
		.save()
		// return success if the new user is added to the database successfully
		.then((result) => {
		  response.status(201).send({
		    message: "Project Created Successfully",
		    result,
		  });
		})
		// catch error if the new user wasn't added successfully to the database
		.catch((error) => {
		  response.status(500).send({
		    message: "Error creating project",
		    error,
		  });
		});
});


// product get endpoint
app.get("/project/:id", (request, response) => {
    // find the new user
    Project.findById(request.params.id, 'name description type owner budget timelimit -_id')
      // return success if the new user is added to the database successfully
      .then((result) => {
        response.status(201).send({
          message: "Project found Successfully",
          result,
        });
      })
      // catch error if the new user wasn't added successfully to the database
      .catch((error) => {
        response.status(500).send({
          message: "Project does not exist",
          error,
        });
      });
});

// sceanario endpoint
app.post("/scenario", (request, response) => {
	// create a new user instance and collect the data
  	const scenario = new Scenario({
    	name: request.body.name, 
  		description: request.body.description,
  		owner: request.body.owner,
  		budget: request.body.budget
		//link: request.body.link,
  	});
	// save the new user
	scenario
		.save()
		// return success if the new user is added to the database successfully
		.then((result) => {
		  response.status(201).send({
		    message: "Scenario Created Successfully",
		    result,
		  });
		})
		// catch error if the new user wasn't added successfully to the database
		.catch((error) => {
		  response.status(500).send({
		    message: "Error creating scenario",
		    error,
		  });
		});
});


// scenario get endpoint
app.get("/scenario/:id", (request, response) => {
    // find the new user
    Scenario.findById(request.params.id, 'name description owner budget -_id')
      // return success if the new user is added to the database successfully
      .then((result) => {
        response.status(201).send({
          message: "Scenario found Successfully",
          result,
        });
      })
      // catch error if the new user wasn't added successfully to the database
      .catch((error) => {
        response.status(500).send({
          message: "Scenario does not exist",
          error,
        });
      });
});


// subproject endpoint
app.post("/subproject", (request, response) => {
	// create a new user instance and collect the data
  	const subproject = new Subproject({
    	name: request.body.name, 
		  description: request.body.description,
		  owner: request.body.owner,
		  budget: request.body.budget,
      timelimit: request.body.timelimit
		//link: request.body.link,
  	});
	// save the new user
	subproject
		.save()
		// return success if the new user is added to the database successfully
		.then((result) => {
		  response.status(201).send({
		    message: "Subroject Created Successfully",
		    result,
		  });
		})
		// catch error if the new user wasn't added successfully to the database
		.catch((error) => {
		  response.status(500).send({
		    message: "Error creating subproject",
		    error,
		  });
		});
});


// subproject endpoint
app.get("/subproject/:id", (request, response) => {
    // find the new user
    Project.findById(request.params.id, 'name description owner budget timelimit -_id')
      // return success if the new user is added to the database successfully
      .then((result) => {
        response.status(201).send({
          message: "Subproject found Successfully",
          result,
        });
      })
      // catch error if the new user wasn't added successfully to the database
      .catch((error) => {
        response.status(500).send({
          message: "Subproject does not exist",
          error,
        });
      });
});


// comment endpoint
app.post("/comment", (request, response) => {
  // create a new user instance and collect the data
    const comment = new Comment({
      text: request.body.text, 
      owner: request.body.owner,
      score: 0.0 // Get Score from sentimental analysis Library
    //link: request.body.link,
    });
  // save the new user
  comment
    .save()
    // return success if the new user is added to the database successfully
    .then((result) => {
      response.status(201).send({
        message: "Comment Created Successfully",
        result,
      });
    })
    // catch error if the new user wasn't added successfully to the database
    .catch((error) => {
      response.status(500).send({
        message: "Error creating comment",
        error,
      });
    });
}); 


// comment endpoint
app.get("/comment/:id", (request, response) => {
    // find the new user
    Project.findById(request.params.id, 'text owner -_id')
      // return success if the new user is added to the database successfully
      .then((result) => {
        response.status(201).send({
          message: "Comment found Successfully",
          result,
        });
      })
      // catch error if the new user wasn't added successfully to the database
      .catch((error) => {
        response.status(500).send({
          message: "Comment does not exist",
          error,
        });
      });
});

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});



module.exports = app;
