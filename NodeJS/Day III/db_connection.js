const mongoose = require("mongoose");
const url =
  "mongodb+srv://osalama:OSalama_123@initialcluster.uen29.mongodb.net/Todo?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });