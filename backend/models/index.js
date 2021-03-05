const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:git-final",{
    keepAlive:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

mongoose.set("debug",true);
mongoose.Promise = Promise;