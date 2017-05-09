api.get("/api/friends", function(err, data){
  if (err) {
    throw err;
  }
  res.render("home", {friends: data});
});

api.post("/api/friends", function(err, res){
  if (err) {
    throw err;
  }
  res.render("home", res);  
});
