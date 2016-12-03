function logAction(user, action) {
  return user.username.lowercase() + " performs: " + action;
}

function getUser(username, pass) {
  // check omited
  return {username : username};
}

// We would like some tests
