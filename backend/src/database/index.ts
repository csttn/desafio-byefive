import mongoose from "mongoose";

const connect = mongoose
  .connect("mongodb://mongo:27017/moneydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default connect;
