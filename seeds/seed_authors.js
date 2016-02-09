exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('Authors').del(),

    // Inserts seed entries
    knex('Authors').insert({
      ID: '1',
      FName: 'Alex',
      LName: 'Martelli',
      Bio: 'Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. Hes a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alexs proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.',
      Portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg'
      }),
    knex('Authors').insert({
      ID: '2',
      FName: 'Anna',
      LName: 'Ravenscroft',
      Bio: 'Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.',
      Portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg'
    }),
    knex('Authors').insert({
      ID: '3',
      FName: 'Steve',
      LName: 'Holden',
      Bio: 'Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of ""Python Web Programming"", the OReilly School of Technologys ""Certificate series in Python"" and O'Reilly Media's ""Intermediate Python"" video series.',
      Portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg'
    }),
    knex('Authors').insert({
      ID: '4',
      FName: 'Allen B.',
      LName: 'Downey',
      Bio: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Masters and Bachelors degrees from MIT.',
      Portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
    }),
    knex('Authors').insert({
      ID: '5',
      FName: 'Bonnie',
      LName: 'Eisenman',
      Bio: 'Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.',
      Portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'
    }),
    knex('Authors').insert({
      ID: '6',
      FName: 'Kyle',
      LName: 'Simpson',
      Bio: 'Kyle Simpson is an Open Web Evangelist whos passionate about all things JavaScript. Hes an author, workshop trainer, tech speaker, and OSS contributor/leader.',
      Portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg'
    })
};
