const mongodb = require("../db/connection");

const getData = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db().collection('test').find().toArray();

    if (result.length === 0) {
      // Handle the case where no documents were found
      res.status(404).json({ message: 'No user data found.' });
    } else {
      // Set the Content-Type header to indicate JSON data and send the first document
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result[0]);
    }
  } catch (error) {
    // Handle any database query errors
    console.error("Error querying the database:", error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { getData };