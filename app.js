const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;
const dbURI = process.env.DATABASE_URL;

//model
const Tasks = require("./models/todos");

const connect = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(
  (db) => {
    console.log("Connected Successfully to Mongodb Server");
    let newTask = {
      description: "task added using create",
    };

    // Tasks.create(newTask)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    let saveTask = new Tasks({ description: "saved using save" });

    saveTask
      .save()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    //all tasks
    Tasks.find({})
      .then((data) => {
        console.log("All tasks", data);
      })
      .catch((err) => {
        console.log(err);
      });

    //find with condition
    // Tasks.find({ completed: true })
    //   .then((data) => {
    //     console.log("All tasks", data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //update

    //delete tasks
    // Tasks.remove({});
  },
  (err) => {
    console.log(err);
  }
);

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
