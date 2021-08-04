/****************** Delete Data ************/

//Eliminate all the books for a given author
db.books.deleteMany({ "authors.name": { $in: ["Anthony"] } });

// Eliminate all the death authors
db.authors.deleteMany({ Dod: { $ne: "" } });
