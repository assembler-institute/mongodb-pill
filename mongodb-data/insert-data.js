// insert authors
db.authors.insert({ name: 'Penny',lastName: 'Rimbaud',dateBirth: '1943-6-8',country: 'Great Britain'})
db.authors.insert({name: 'Umberto',lastName: 'Eco', dateBirth: '1932-1-5', dateDeath: '2016-2-19', country: 'Italy'})
db.authors.insert({ name: 'Hermann', lastName: 'Hesse', dateBirth: '1877-2-7', dateDeath: '1962-9-8', country: 'Germany'})


// insert books
db.books.insert({ title: 'El lobo estepario',releaseYear: '1927',category: 'bio-fantasy',authors: [{id: '61b9db502140b006d712c6c7',name: 'Herman',lastName: 'Hesse',}]})
db.books.insert({ title: 'Siddhartha',releaseYear: '1922',category: 'novela',authors: [{id: '61b9db502140b006d712c6c7',name: 'Herman',lastName: 'Hesse',}]})
db.books.insert({ title: 'El último verano de Klingsor',releaseYear: '1983',category: 'novela',authors: [{id: '61b9db502140b006d712c6c7',name: 'Herman',lastName: 'Hesse',}]})
db.books.insert({ title: 'Crass: tienen una bomba',releaseYear: '2008',category: 'arte-punk, politica',authors: [{id: '61ba02ef2140b006d712c6d3',name: 'Penny',lastName: 'Rimbaud'}]})
db.books.insert({ title: 'Shibboleth- My Revolting Life',releaseYear: '1999',category: 'philosophy, politics',authors: [{id: '61ba02ef2140b006d712c6d3',name: 'Penny',lastName: 'Rimbaud'}]})
db.books.insert({ title: 'Nobody\'s Child',releaseYear: '2008',category: 'politics',authors: [{id: '61ba02ef2140b006d712c6d3',name: 'Penny',lastName: 'Rimbaud'}]})
db.books.insert({ title: 'Particular nonsense',releaseYear: '2010',category: 'politics',authors: [{id: '61ba02ef2140b006d712c6d3',name: 'Penny',lastName: 'Rimbaud'}]})
db.books.insert({ title: 'El péndulo de Foucault',releaseYear: '1988',category: 'novela',authors: [{id: '61b9db502140b006d712c6c6',name: 'Umberto',lastName: 'Eco'}]})
db.books.insert({ title: 'Semiótica y filosofía del lenguaje',releaseYear: '1984',category: 'ensayo',authors: [{id: '61b9db502140b006d712c6c6',name: 'Umberto',lastName: 'Eco'}]})
db.books.insert({ title: 'Entre mentira e ironía',releaseYear: '1998',category: 'ensayo',authors: [{id: '61b9db502140b006d712c6c6',name: 'Umberto',lastName: 'Eco'}]})


