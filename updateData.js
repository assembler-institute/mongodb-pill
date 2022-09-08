// the following commands are used to update DB data //



db.authors.updateOne(
  {name: 'George' , lastName: 'Orwell'} , /* Where to update */
  {$set: {                                /* What to update */
    dateOfDeath: new Date('1984')
  }}
)

db.books.updateOne(
  {title: 'The Color Purple'}, /* Where to update */
  {$set: {releaseYear: new Date('2000-01-01')}} /* What to update */
)

db.books.updateOne(
  {title: 'Pride and Prejudice'},  /* Where to update */
  {$set: {title : 'Pride and Prejudice - New Edition'}} /* What to update */
)