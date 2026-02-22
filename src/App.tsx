import { useState } from 'react';
import LandingSection from './components/LandingSection';
import TimelineSection from './components/TimelineSection';
import LetterSection from './components/LetterSection';
import SpotifySection from './components/SpotifySection';
import meet1 from './assets/images/1st_meet.jpg'
import meet2 from './assets/images/2nd_meet.jpg'
import meet3 from './assets/images/3rd_meet.jpg'
import meet4 from './assets/images/4th_meet.jpg'
import meet5 from './assets/images/holding_hands.jpg'
import { PhotoGallery } from './components/PhotoGallery';
import SimpleLoading from './components/SimpleLoading';

const timelineStories = [
  {
    title: 'Our First Meet 😂',
    Date: '15th July 2025',
    description: `You weren't even expecting me that day — it was all Isha's plan 😄. The moment you saw me, your surprised face said it all. I was awkward as hell while taking pictures 😅— didn't know where to look or what to do. You can clearly see that in the pictures 😂… but something shifted that day. I felt more comfortable around you — felt more me 💫.`,
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
    title: 'Our Fifth Meet ❤️',
    Date: '2nd November 2025',
    description: "When the day finally arrived, I couldn't stop smiling. The moment I reached the place, my heartbeat started racing — I was nervous but so excited to see you after 40 days. And then, when I finally saw you, I just couldn't stop smiling. It was our first meet after confessing our feelings, and honestly I am considering it as our FIRST DATE already 🫶🏻. Just like our first hug, I kissed you for the first time… and honestly, I can't even explain how I felt in that moment. It felt so nice to hold your hands again after so long. We sat, talked, laughed, and ate together — and somehow, time just flew by. Before leaving, I kissed you again on your cheeks, wishing I could've spent a little more time with you. ❤️",
    imageUrl: meet5
  }
];

const letterMessage = `My Kiwi, Sweetuuu, Goluu Moluu, Cutieeee, Bacchee!!❤️

So, it's been over 5 months since we first talked, but it feels like I've known you for a really long time. To be honest, I had no idea that things would turn out this way between us. We started as friends, but somewhere along the way, my feelings for you grew into something much deeper — and honestly, I wasn't expecting that at all.

We may not be dating yet, but I feel like we have something really special going on. I've lost count of how many times I think about you in a day — it's definitely more than I can keep track of. You just stay in my mind all the time, and I find myself smiling for no reason whenever I think about you. You won't believe how many times my mom has caught me smiling while doing random stuff 😂 because you're always there!! 🫶🏻

And I wish it always stays the same ❤️

And hey, it's your birthday!! I just wanted to make you feel special 🫶🏻 — to let you know that you have someone who cares about you a lot, someone who adores you endlessly, and someone who wants to have you around all the time.

And trust me, I've never enjoyed creating something as much as I enjoyed making this for you. Even after finishing it, I kept making small changes to it like an idiot 😂 — but hey, that's just me 🫶🏻

So, on this special day of yours, I just want to thank you for being you ❤️ — and don't you dare change the way you are, because I like you just the way you are🫶🏻.

Happy Birthday, to my Sexy Girl-Friend, Disha!! ❤️`;

function App() {
  const [isLoading, setIsLoading] = useState(true);


  if(isLoading){
    return <SimpleLoading onComplete={() => setIsLoading(false)}/>;
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