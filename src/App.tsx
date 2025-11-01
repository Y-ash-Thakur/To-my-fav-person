import { useState, useEffect } from 'react';
import LandingSection from './components/LandingSection';
import TimelineSection from './components/TimelineSection';
import LetterSection from './components/LetterSection';
import SpotifySection from './components/SpotifySection';
import meet1 from './assets/images/1st_meet.jpg'
import meet2 from './assets/images/2nd_meet.jpg'
import meet3 from './assets/images/3rd_meet.jpg'
import meet4 from './assets/images/4th_meet.jpg'
import { PhotoGallery } from './components/PhotoGallery';
import SimpleLoading from './components/SimpleLoading';

const timelineStories = [
  {
    title: 'Our First Meet 😂',
    Date: '15th July 2025',
    description: 'You wasn\u0027t even expecting me that day — it was all Isha\u0027s plan 😄. The moment you saw me, your surprised face said it all. I was awkward as hell while taking pictures 😅, didn\u0027t know where to look or what to do, you can clearly see that in the picture 😂… but something shifted that day. I felt more comfortable around you, felt more me 💫.',
    imageUrl: meet1
  },
  {
    title: 'Our Second Meet 😊',
    Date: '19th july 2025',
    description: 'I was so excited to meet you again, but yeah — a bit nervous too 🫣. We roamed around the mall, did bowling, laughed, talked, ate pizaaa!! and had a great time together, and yeah I wanted to hug you that day but didn\u0027t do it then 🙂. When it came to photos again, still awkward 😂 but way better than before. It felt easy, familiar — like we were getting used to each other\u0027s presence 🧡.',
    imageUrl: meet2
  },
  {
    title: 'Our Third Meet 🤗',
    Date: '14th September 2025',
    description: 'Ohhhhh My Goodnessss!!, This one took forever to happen — and cutie!!, I missed you so much in between 🥲, though we didn\u0027t take a picture together but It was all worth it 🫶🏻. The moment I saw you, everything felt right again. For the first time, I hugged you 💗. We talked a lot that day, ate pani puri together 🤭, laughed, shared so many things with each other and hugged again before leaving. That day felt special — like something real had begun ✨.',
    imageUrl: meet3
  },
  {
    title: 'Our Fourth Meet 🫶🏻✨',
    Date: '23rd September 2025',
    description: 'The best one yet — you looked absolutely stunning that day 😍. We hugged, took a photo (and guess what, no awkwardness this time 😌). We enjoyed, played garba, ate noodles 😂 and had the most amazing time together. Couldn\u0027t hug while leaving, but the day was already perfect 🌙💃.',
    imageUrl: meet4
  },
  {
    title: 'Our Fifth Meet',
    Date: '2nd November 2025',
    description: 'From quiet evenings at home to exciting new experiences, every moment with you becomes a cherished memory. Here\'s to all the beautiful moments yet to come.',
    imageUrl: ''
  }
];

const letterMessage = `My Dear Sweetuuu!!,

So it's been over 5 months since we first met, but it feels like I've known you for a really long time. To be really honest I had no idea that things would turn out this way between us. We started as friends, but somewhere along the way, my feelings for you grew overtime into something much deeper. And I was literally not expecting this at all. We may not be dating yet, but I feel like we have something really special going on here. I don't really have any count of how many times I think about you in a day, but it's definitely more than I can keep track of. You just stayes in my mind all the time and I find myself smiling for no reasons whenever I think about you. You won't believe how many times my mom has caught me smiling while doing random ass stuff 😂. Cause you are always there  

Happy Birthday, To My More than a friend ❤️.`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading after 7 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Show loading animation
  if (isLoading) {
    return <SimpleLoading />;
  }

  // Show main app content
  return (
    <div className="min-h-screen bg-white">
      <LandingSection />

      {timelineStories.map((story, index) => (
        <TimelineSection
          key={index}
          title={story.title}
          description={story.description}
          imageUrl={story.imageUrl}
          index={index}
          Date={story.Date}
        />
      ))}
      <PhotoGallery/>
      <LetterSection message={letterMessage} />
      <SpotifySection />
    </div>
  );
}

export default App;