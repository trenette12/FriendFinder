// app.get("/api/friends", function(req,res){
//   if (err) {
//     throw err;
//   })
//   res.render("survey", {friends: data});
// })
//
// app.post("/api/friends", function(req, res){
//
//
// })
// var friend {
//   name: $("#name").val().trim();
//   photo: $("#photo").val().trim();
//   scores: $("#score").val().trim();
// };

var friendList = [];
var friends = {
  name: $("#name").val().trim(),
  photo: $("#photo").val().trim(),
  scores: [$("#q1").val().trim(),
    $("#q2").val().trim(),
    $("#q3").val().trim(),
    $("#q4").val().trim(),
    $("#q5").val().trim(),
    $("#q6").val().trim(),
    $("#q7").val().trim(),
    $("#q8").val().trim(),
    $("#q9").val().trim(),
    $("#q10").val().trim()],
};

$("submit").on("click", function(){
    friendListPush();
    console.log(friendList);
});

function friendListPush(){
    friendList.push(friends);
}
