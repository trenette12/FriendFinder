app.use(bodyParser.urlencoded({extended: false }));

app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "survey.html"));
})

app.use("/home", function(req,res){
  res.sendFile(path.join(__dirname, "home.html"))
});
