const user = {
    name: 'Darren Jones',
    profession: 'Digital Illustrator',
    bio: 'Darren is a passionate illustrator with a love for vibrant digital art.',
    profileImage: '/images/user-profile.jpg', 
    city: 'San Francisco, CA',
    location: {lat: 41.928, lng: -88.50},
    experience: '5 years',
    skills: 'Digital Painting, Illustration, Concept Art',
    socialMedia: {
      instagram: 'https://instagram.com/darrenjones',
      twitter: 'https://twitter.com/darrenjones',
    },
    images: [
      { url: '/images/em1.webp', likes: 10100, comments: 200 },
      { url: '/images/em2.webp', likes: 9300, comments: 180 },
      { url: '/images/em3.webp', likes: 8100, comments: 150 },
      { url: '/images/em4.webp', likes: 6400, comments: 90 },
    ],
  };

  const userCollection = [user,user,user,user,user,user,user,user,user,user,user,user,user,user,user,]
  
  export {user, userCollection};
  