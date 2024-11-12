// src/userData.js
import em1 from "../images/em1.webp"
import em2 from '../images/em2.webp';
import em3 from '../images/em3.webp';
import em4 from '../images/em4.webp';
import pfp1 from '../images/pfp1.jpg';
import pfp2 from '../images/pfp2.jpg'
import pfp3 from "../images/pfp3.webp"
import pfp4 from "../images/pfp4.jpeg"
import pfp5 from "../images/pfp5.jpeg"
import pic1 from '../images/pic1.webp';
import pic2 from '../images/pic2.webp';
import pic3 from '../images/pic3.webp';
import pic4 from '../images/pic4.webp';
import ccpfp from "../images/ccpfp.jpeg"
import t1 from "../images/tatart1.png"
import t2 from "../images/tatart2.png"
import t3 from "../images/tatart3.png"
import t4 from "../images/tatart4.png"
import t5 from "../images/tatart5.png"
import pho1 from "../images/photo1.png"
import pho2 from "../images/photo2.png"
import pho3 from "../images/photo3.png"
import pho4 from "../images/photo4.png"
import pho5 from "../images/photo5.png"
import pho6 from "../images/photo6.png"
import pho7 from "../images/photo7.png"
import pho8 from "../images/photo8.png"


const loggedInUser = {
    name: 'Connor Cochrane',
    profession: 'Musician',
    bio: "Chicago-based student. I enjoy playing classical guitar, shooting 35mm film, and logging movies in Letterboxd. Please let me play drums in your band",
    profileImage: ccpfp,
    location: 'Chicago, IL',
    experience: '2',
    skills: 'Design, Coding, Project Management',
    socialMedia: {
      instagram: 'https://instagram.com/connorcochrane',
      twitter: 'https://twitter.com/connorcochrane',
    },
    images: [
      { url: pho4, likes: 10100, comments: 200 },
      { url: pho2, likes: 6800, comments: 140 },
      { url: pho3, likes: 7500, comments: 170 },
      { url: pho5, likes: 9300, comments: 180 },
      { url: pho6, likes: 8100, comments: 150 },
      { url: pho7, likes: 6400, comments: 90 },
      { url: pho8, likes: 7200, comments: 160 },
      { url: pic4, likes: 6900, comments: 130 },
    ],
    
  };

  const userCollection = [
    {
      name: 'Darren Jones',
      profession: 'Digital Illustrator',
      bio: "Digital Illustrator with a love for vibrant colors and imaginative worlds. Specializing in digital painting, concept art, and illustration. Sharing my journey and creations one piece at a time. Always exploring new techniques and connecting with fellow artists. 🌎🎨",
      profileImage: pfp2, 
      city: 'San Francisco, CA',
      location: {lat: 41.8819, lng: -87.6232},
      experience: '5 years',
      skills: 'Digital Painting, Illustration, Concept Art',
      socialMedia: {
        instagram: 'https://instagram.com/darrenjones',
        twitter: 'https://twitter.com/darrenjones',
      },
      images: [
        { url: em1, likes: 10100, comments: 200 },
        { url: pic2, likes: 6800, comments: 140 },
        { url: pic3, likes: 7500, comments: 170 },
        { url: em2, likes: 9300, comments: 180 },
        { url: em3, likes: 8100, comments: 150 },
        { url: em4, likes: 6400, comments: 90 },
        { url: pic1, likes: 7200, comments: 160 },
        { url: pic4, likes: 6900, comments: 130 },
      ],
    },
    {
      id: 2,
      name: 'Emily Smith',
      profession: 'UI/UX Designer',
      bio: 'Emily brings user-centric design to life with her clean and intuitive UI work.',
      profileImage: pfp1,
      city: 'Chicago, IL',
      location: { lat: 41.8819, lng: -87.6232 },
      experience: '3 years',
      skills: 'UI Design, UX Research, Prototyping',
      socialMedia: {
        instagram: 'https://instagram.com/emilysmith',
        twitter: 'https://twitter.com/emilysmith',
      },
      images: [
        { url: em1, likes: 10500, comments: 220 },
        { url: em2, likes: 9500, comments: 160 },
        { url: em3, likes: 8200, comments: 140 },
        { url: em4, likes: 6500, comments: 100 },
      ],
    },
    {
      id: 3,
      name: 'Michael Johnson',
      profession: 'Photographer',
      bio: 'Michael captures the essence of Chicago with his stunning urban photography.',
      profileImage: pfp2,
      city: 'Chicago, IL',
      location: { lat: 41.8916, lng: -87.6078 },
      experience: '7 years',
      skills: 'Portraits, Urban Photography, Editing',
      socialMedia: {
        instagram: 'https://instagram.com/michaeljohnson',
        twitter: 'https://twitter.com/michaeljohnson',
      },
      images: [
        { url: em1, likes: 12000, comments: 300 },
        { url: em2, likes: 8700, comments: 190 },
        { url: em3, likes: 7600, comments: 170 },
        { url: em4, likes: 6800, comments: 130 },
      ],
    },
    {
      id: 4,
      name: 'Laura Chen',
      profession: 'Tattoo Artist',
      bio: 'NYC-Based Tattoo Apprentice. Please Schedule for inquiries',
      profileImage: pfp5,
      city: 'New York, NY',
      location: { lat: 40.7505, lng: -73.9934 },
      experience: '6',
      skills: 'Branding, Typography, Visual Design',
      socialMedia: {
        instagram: 'https://instagram.com/laurachen',
        twitter: 'https://twitter.com/laurachen',
      },
      images: [
        { url: t5, likes: 8900, comments: 240 },
        { url: t2, likes: 7700, comments: 170 },
        { url: t3, likes: 7400, comments: 130 },
        { url: t4, likes: 6200, comments: 110 },
      ],
    },
    {
      id: 5,
      name: 'Daniel Kim',
      profession: 'Animator',
      bio: 'Daniel is an expert in motion graphics and brings stories to life with animation.',
      profileImage: pfp4,
      city: 'Chicago, IL',
      location: { lat: 41.8785, lng: -87.6353 },
      experience: '4 years',
      skills: '2D Animation, Motion Graphics, Storyboarding',
      socialMedia: {
        instagram: 'https://instagram.com/danielkim',
        twitter: 'https://twitter.com/danielkim',
      },
      images: [
        { url: em1, likes: 9900, comments: 210 },
        { url: em2, likes: 8500, comments: 190 },
        { url: em3, likes: 7700, comments: 180 },
        { url: em4, likes: 6600, comments: 160 },
      ],
    },
    {
      id: 6,
      name: 'Alice Johnson',
      profession: 'Fashion Designer',
      bio: 'Alice designs bold, modern clothing that redefines urban fashion.',
      profileImage: pfp3,
      city: 'Chicago, IL',
      location: { lat: 41.8666, lng: -87.6216 },
      experience: '8 years',
      skills: 'Fashion Design, Trend Forecasting, Pattern Making',
      socialMedia: {
        instagram: 'https://instagram.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
      },
      images: [
        { url: em1, likes: 11500, comments: 270 },
        { url: em2, likes: 9000, comments: 200 },
        { url: em3, likes: 8200, comments: 160 },
        { url: em4, likes: 7100, comments: 140 },
      ],
    },
    {
      id: 7,
      name: 'Chris Evans',
      profession: 'Web Developer',
      bio: 'Chris specializes in building dynamic and responsive websites.',
      profileImage: pfp2,
      city: 'Chicago, IL',
      location: { lat: 41.8867, lng: -87.6342 },
      experience: '6 years',
      skills: 'HTML, CSS, JavaScript, React',
      socialMedia: {
        instagram: 'https://instagram.com/chrisevans',
        twitter: 'https://twitter.com/chrisevans',
      },
      images: [
        { url: em1, likes: 10300, comments: 250 },
        { url: em2, likes: 8800, comments: 180 },
        { url: em3, likes: 7700, comments: 160 },
        { url: em4, likes: 6500, comments: 130 },
      ],
    },
    {
      id: 8,
      name: 'Sophia White',
      profession: 'Product Designer',
      bio: 'Sophia designs user-friendly, functional products for everyday life.',
      profileImage: pfp1,
      city: 'Chicago, IL',
      location: { lat: 41.8712, lng: -87.6463 },
      experience: '4 years',
      skills: 'Product Design, Prototyping, CAD',
      socialMedia: {
        instagram: 'https://instagram.com/sophiawhite',
        twitter: 'https://twitter.com/sophiawhite',
      },
      images: [
        { url: em1, likes: 10900, comments: 230 },
        { url: em2, likes: 9500, comments: 210 },
        { url: em3, likes: 8900, comments: 180 },
        { url: em4, likes: 7500, comments: 150 },
      ],
    },
    {
      id: 9,
      name: 'James Patel',
      profession: 'Marketing Specialist',
      bio: 'James uses data-driven strategies to drive impactful marketing campaigns.',
      profileImage: pfp2,
      city: 'Chicago, IL',
      location: { lat: 41.8500, lng: -87.6500 },
      experience: '7 years',
      skills: 'Digital Marketing, SEO, Content Strategy',
      socialMedia: {
        instagram: 'https://instagram.com/jamespatel',
        twitter: 'https://twitter.com/jamespatel',
      },
      images: [
        { url: em1, likes: 9500, comments: 210 },
        { url: em2, likes: 8500, comments: 180 },
        { url: em3, likes: 7800, comments: 160 },
        { url: em4, likes: 7100, comments: 140 },
      ],
    },
    {
      id: 10,
      name: 'Olivia Taylor',
      profession: 'Illustrator',
      bio: 'Olivia creates whimsical and enchanting illustrations for books and prints.',
      profileImage: pfp1,
      city: 'Chicago, IL',
      location: { lat: 41.8745, lng: -87.6202 },
      experience: '5 years',
      skills: 'Book Illustration, Digital Art, Watercolor',
      socialMedia: {
        instagram: 'https://instagram.com/oliviataylor',
        twitter: 'https://twitter.com/oliviataylor',
      },
      images: [
        { url: em1, likes: 11200, comments: 250 },
        { url: em2, likes: 9600, comments: 210 },
        { url: em3, likes: 8900, comments: 180 },
        { url: em4, likes: 7700, comments: 150 },
      ],
    },
  ];
  
  export {loggedInUser, userCollection};