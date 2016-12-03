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
  var user;
  if (username == null) {
    user = { username : null, anonymous : true};
  } else {
    user = getUser(username, pass);
  }
  logAction(user);
  return user;
}

//>MOCK getUser -> to return { username : "john"}
//>MOCK logAction
createSession("john","test") === { username : "john"};
// Verify invocation on getUser && logAction

//>MOCK getUser
//>MOCK logAction
createSession(null,null) === { username : null, anonymous : true};
// Verify invocation on logAction
// Verify *no* invocation on getUser
