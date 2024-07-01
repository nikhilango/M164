use supermarket

db.createUser({
  user: "user1",
  pwd: "password1",
  roles: [{ role: "read", db: "supermarket" }]
});

use admin

db.createUser({
  user: "user2",
  pwd: "password2",
  roles: [{ role: "readWrite", db: "supermarket" }]
});
