function logAction(user, action) {
  return user.username.lowercase() + " performs: " + action;
}

function getUser(username, pass) {
  // check omited
  return {username : username};
}

logAction({username : "johndoe", action : "Sign in"}) === "johndoe performs: Sign in";
logAction({username : "peter1234", action : "Creates thing"}) === "peter1234 performs: Creates thing";
login("admin", "test1234") === { username : "admin"};

// Create a function that creates a session and logs this.
