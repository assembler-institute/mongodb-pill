//Authors
db.autors.insertOne({ name: 'Name', lastName: 'Lastname', dateOfBirth: 'XXXX-XX-XX', dateOfDeath: 'XXXX-XX-XX', country: 'Spain' })
//Copy and paste this *3 


// Insert books with differents characteristics
db.books.insertOne({ title: 'BookTitle', releaseYears: [XXXX, XXXX], category: 'category', authors: [{ id: '60f7a6d4f9b0299616569b90', name: 'Name', lastName: 'Lastname' }] })
