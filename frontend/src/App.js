
import './App.css';
import Home from './Home';
import SignIn from './sign-in/SignIn';
import ArtistsPage from './components/ArtistsPage';

const dummyCollection = [
  {
    id: 1,
    name: 'Darren Jones',
    profession: 'Digital Illustrator',
    bio: 'Darren is a passionate illustrator with a love for vibrant digital art.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8781, lng: -87.6298 },
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
  },
  {
    id: 2,
    name: 'Emily Smith',
    profession: 'UI/UX Designer',
    bio: 'Emily brings user-centric design to life with her clean and intuitive UI work.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8819, lng: -87.6232 },
    experience: '3 years',
    skills: 'UI Design, UX Research, Prototyping',
    socialMedia: {
      instagram: 'https://instagram.com/emilysmith',
      twitter: 'https://twitter.com/emilysmith',
    },
    images: [
      { url: '/images/em1.webp', likes: 10500, comments: 220 },
      { url: '/images/em2.webp', likes: 9500, comments: 160 },
      { url: '/images/em3.webp', likes: 8200, comments: 140 },
      { url: '/images/em4.webp', likes: 6500, comments: 100 },
    ],
  },
  {
    id: 3,
    name: 'Michael Johnson',
    profession: 'Photographer',
    bio: 'Michael captures the essence of Chicago with his stunning urban photography.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8916, lng: -87.6078 },
    experience: '7 years',
    skills: 'Portraits, Urban Photography, Editing',
    socialMedia: {
      instagram: 'https://instagram.com/michaeljohnson',
      twitter: 'https://twitter.com/michaeljohnson',
    },
    images: [
      { url: '/images/em1.webp', likes: 12000, comments: 300 },
      { url: '/images/em2.webp', likes: 8700, comments: 190 },
      { url: '/images/em3.webp', likes: 7600, comments: 170 },
      { url: '/images/em4.webp', likes: 6800, comments: 130 },
    ],
  },
  {
    id: 4,
    name: 'Laura Chen',
    profession: 'Graphic Designer',
    bio: 'Laura blends creativity and marketing to create eye-catching designs.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8858, lng: -87.6207 },
    experience: '6 years',
    skills: 'Branding, Typography, Visual Design',
    socialMedia: {
      instagram: 'https://instagram.com/laurachen',
      twitter: 'https://twitter.com/laurachen',
    },
    images: [
      { url: '/images/em1.webp', likes: 8900, comments: 240 },
      { url: '/images/em2.webp', likes: 7700, comments: 170 },
      { url: '/images/em3.webp', likes: 7400, comments: 130 },
      { url: '/images/em4.webp', likes: 6200, comments: 110 },
    ],
  },
  {
    id: 5,
    name: 'Daniel Kim',
    profession: 'Animator',
    bio: 'Daniel is an expert in motion graphics and brings stories to life with animation.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8785, lng: -87.6353 },
    experience: '4 years',
    skills: '2D Animation, Motion Graphics, Storyboarding',
    socialMedia: {
      instagram: 'https://instagram.com/danielkim',
      twitter: 'https://twitter.com/danielkim',
    },
    images: [
      { url: '/images/em1.webp', likes: 9900, comments: 210 },
      { url: '/images/em2.webp', likes: 8500, comments: 190 },
      { url: '/images/em3.webp', likes: 7700, comments: 180 },
      { url: '/images/em4.webp', likes: 6600, comments: 160 },
    ],
  },
  {
    id: 6,
    name: 'Alice Johnson',
    profession: 'Fashion Designer',
    bio: 'Alice designs bold, modern clothing that redefines urban fashion.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8666, lng: -87.6216 },
    experience: '8 years',
    skills: 'Fashion Design, Trend Forecasting, Pattern Making',
    socialMedia: {
      instagram: 'https://instagram.com/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
    images: [
      { url: '/images/em1.webp', likes: 11500, comments: 270 },
      { url: '/images/em2.webp', likes: 9000, comments: 200 },
      { url: '/images/em3.webp', likes: 8200, comments: 160 },
      { url: '/images/em4.webp', likes: 7100, comments: 140 },
    ],
  },
  {
    id: 7,
    name: 'Chris Evans',
    profession: 'Web Developer',
    bio: 'Chris specializes in building dynamic and responsive websites.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8867, lng: -87.6342 },
    experience: '6 years',
    skills: 'HTML, CSS, JavaScript, React',
    socialMedia: {
      instagram: 'https://instagram.com/chrisevans',
      twitter: 'https://twitter.com/chrisevans',
    },
    images: [
      { url: '/images/em1.webp', likes: 10300, comments: 250 },
      { url: '/images/em2.webp', likes: 8800, comments: 180 },
      { url: '/images/em3.webp', likes: 7700, comments: 160 },
      { url: '/images/em4.webp', likes: 6500, comments: 130 },
    ],
  },
  {
    id: 8,
    name: 'Sophia White',
    profession: 'Product Designer',
    bio: 'Sophia designs user-friendly, functional products for everyday life.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8712, lng: -87.6463 },
    experience: '4 years',
    skills: 'Product Design, Prototyping, CAD',
    socialMedia: {
      instagram: 'https://instagram.com/sophiawhite',
      twitter: 'https://twitter.com/sophiawhite',
    },
    images: [
      { url: '/images/em1.webp', likes: 10900, comments: 230 },
      { url: '/images/em2.webp', likes: 9500, comments: 210 },
      { url: '/images/em3.webp', likes: 8900, comments: 180 },
      { url: '/images/em4.webp', likes: 7500, comments: 150 },
    ],
  },
  {
    id: 9,
    name: 'James Patel',
    profession: 'Marketing Specialist',
    bio: 'James uses data-driven strategies to drive impactful marketing campaigns.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8500, lng: -87.6500 },
    experience: '7 years',
    skills: 'Digital Marketing, SEO, Content Strategy',
    socialMedia: {
      instagram: 'https://instagram.com/jamespatel',
      twitter: 'https://twitter.com/jamespatel',
    },
    images: [
      { url: '/images/em1.webp', likes: 9500, comments: 210 },
      { url: '/images/em2.webp', likes: 8500, comments: 180 },
      { url: '/images/em3.webp', likes: 7800, comments: 160 },
      { url: '/images/em4.webp', likes: 7100, comments: 140 },
    ],
  },
  {
    id: 10,
    name: 'Olivia Taylor',
    profession: 'Illustrator',
    bio: 'Olivia creates whimsical and enchanting illustrations for books and prints.',
    profileImage: '/images/user-profile.jpg',
    city: 'Chicago, IL',
    location: { lat: 41.8745, lng: -87.6202 },
    experience: '5 years',
    skills: 'Book Illustration, Digital Art, Watercolor',
    socialMedia: {
      instagram: 'https://instagram.com/oliviataylor',
      twitter: 'https://twitter.com/oliviataylor',
    },
    images: [
      { url: '/images/em1.webp', likes: 11200, comments: 250 },
      { url: '/images/em2.webp', likes: 9600, comments: 210 },
      { url: '/images/em3.webp', likes: 8900, comments: 180 },
      { url: '/images/em4.webp', likes: 7700, comments: 150 },
    ],
  },
];



function App() {
  return (
    <div className="App">
      <Home userCollection={dummyCollection}/>
      {/* <ArtistsPage artists={dummyCollection}/> */}
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
