//Remove all the books of name author 
db.books.remove({ 'authors.name': 'Name' })




//Remove all the death authors if exist
db.authors.remove({ dateOfDeath: { $exists: true } })