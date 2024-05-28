import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "Next_APP",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log(
      "we are connected with database now DB Name :- ",
      connection.name
    );
    // console.log(connection);
  } catch (error) {
    console.log("failed to connect with database");
  }
};
