import LandingSection from './components/LandingSection';
import TimelineSection from './components/TimelineSection';
import LetterSection from './components/LetterSection';
import SpotifySection from './components/SpotifySection';

const timelineStories = [
  {
    title: 'The Day We Met',
    description: 'A moment that changed everything. I still remember the way you smiled, the way time seemed to slow down. That was the beginning of our beautiful journey together.',
    imageUrl: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Our First Adventure',
    description: 'Every step with you feels like discovering a new world. From spontaneous road trips to quiet moments watching sunsets, every adventure is better with you by my side.',
    imageUrl: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'The Little Things',
    description: 'Morning coffee together, late night conversations, your laughter filling the room. These small moments have become my favorite parts of every day.',
    imageUrl: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Growing Together',
    description: 'Through challenges and triumphs, we\'ve grown stronger together. You inspire me to be better, to dream bigger, and to love deeper with each passing day.',
    imageUrl: 'https://images.pexels.com/photos/1024974/pexels-photo-1024974.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Creating Memories',
    description: 'From quiet evenings at home to exciting new experiences, every moment with you becomes a cherished memory. Here\'s to all the beautiful moments yet to come.',
    imageUrl: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const letterMessage = `My dearest love,

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

      <LetterSection message={letterMessage} />

      <SpotifySection />
    </div>
  );
}

export default App;
