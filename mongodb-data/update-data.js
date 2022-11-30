db.authors.updateOne({name: "Umberto"},{$set: {dateDeath: "18-2-2026"}})
db.books.updateOne({title: "Crass: tienen una bomba"}, {$set: {releaseYear: "2021"}})
db.books.updateOne({title: "Crass: tienen una bomba"}, {$set: {title: "Crass: tienen una bomba - New edition"}})
