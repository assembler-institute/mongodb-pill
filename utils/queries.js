// Use books database
use books

// Import collections
// Authors
mongoimport utils/db/authors.json -d books -c authors --jsonArray 
// Books
mongoimport utils/db/books.json -d books -c books --jsonArray 