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

function createSession(username, pass) {
  var user = getUser(username, pass);
  logAction(user);
  return user;
}

//>MOCK getUser
//>MOCK logAction
createSession("john","test") === { username : "john"};
// Verify invocation on getUser && logAction


//Add Anonymous login
