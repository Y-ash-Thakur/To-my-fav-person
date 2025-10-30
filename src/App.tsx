import LandingSection from './components/LandingSection';
import TimelineSection from './components/TimelineSection';
import LetterSection from './components/LetterSection';
import SpotifySection from './components/SpotifySection';
import meet1 from './assets/images/1st_meet.jpg'
import meet2 from './assets/images/2nd_meet.jpg'
import meet3 from './assets/images/3rd_meet.jpg'
import meet4 from './assets/images/4th_meet.jpg'
import { PhotoGallery } from './components/PhotoGallery';


const timelineStories = [
  {
    title: 'Our First Meet',
    Date: '15th July 2025',
    description: 'You wasn\u0027t even expecting me that day — it was all Isha\u0027s plan 😄. The moment you saw me, your surprised face said it all. I was awkward as hell while taking pictures 😅, didn\u0027t know where to look or what to do, you can clearly see that in the picture 😂… but something shifted that day. I felt more comfortable, more me 💫.',
    imageUrl: meet1
  },
  {
    title: 'Our Second Meet',
    Date: '19th july 2025',
    description: 'I was so excited to meet you again, but yeah — a bit nervous too 🫣. We roamed around the mall, did bowling, laughed, talked, ate pizaaa!! and had a great time together, and yeah I wanted to hug you but didn\u0027t do it then 🙂. When it came to photos again, still awkward 😂 but way better than before. It felt easy, familiar — like we were getting used to each other\u0027s presence 🧡.',
    imageUrl: meet2
  },
  {
    title: 'Our Third Meet',
    Date: '14th September 2025',
    description: 'Ohhhhh My Goodnessss!!, This one took forever to happen — and man, I missed you so much in between 🥲, though we didn\u0027t take a picture together but It was all worth it 🫶🏻. The moment I saw you, everything felt right again. For the first time, I hugged you 💗. We talked a lot that day, ate pani puri together 🤭, laughed, shared so many things with each other and hugged again before leaving. That day felt special — like something real had begun ✨.',
    imageUrl: meet3
  },
  {
    title: 'Our Fourth Meet',
    Date: '23th September 2025',
    description: 'The best one yet — you looked absolutely stunning that day 😍. We hugged, took a photo (and guess what, no awkwardness this time 😌). We enjoyed, played garba, ate noodles 😂 and had the most amazing time together. Couldn\u0027t hug while leaving, but the day was already perfect 🌙💃.',
    imageUrl: meet4
  },
  {
    title: 'Our Fifth Meet',
    description: 'From quiet evenings at home to exciting new experiences, every moment with you becomes a cherished memory. Here\'s to all the beautiful moments yet to come.',
    imageUrl: ''
  }
];

const letterMessage = `My Dear Sweetuuu!!,

As I reflect on our journey together, I'm overwhelmed with gratitude for every moment we've shared. You've brought so much joy, laughter, and love into my life in ways I never imagined possible.

Every day with you is a gift. Your kindness, your strength, and your beautiful spirit inspire me constantly. You make the ordinary extraordinary, and you've shown me what it means to truly love and be loved.

Thank you for being my partner, my best friend, and my home. Thank you for the adventures, the quiet moments, the laughter, and even the challenges we've faced together. Each experience has only deepened my love for you.

Here's to us, to our story, and to all the beautiful chapters still waiting to be written. I love you more than words could ever express, today and always.

Happy Birthday, my love.`;

function App() {
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
        />
      ))}
      <PhotoGallery/>
      <LetterSection message={letterMessage} />

      <SpotifySection />
    </div>
  );
}

export default App;
