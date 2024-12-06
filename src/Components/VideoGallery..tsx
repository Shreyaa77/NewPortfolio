import "../Components/VideoGallery.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function VideoGallery() {
  return (
    <>
      <Navbar />

      <section id="VideoGallery" className="VideoGallery-body">
        <h2 className="VideoGallery">Video Gallery</h2>

        <div className="VideoContainer">
            
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SHZnsudfHA0?si=u3Ee0g8ns5-ZGZtD" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

        </iframe>

        <p className="vstory">
        BackTrack Video production is one of the most recent projects I have 
worked on, this project was an opportunity for me to experience new 
things.</p>
<p className="vstory"> 
This was a group project and we had five team members in our 
group. This was the first time that I had worked on something so fun, 
and practical. 
For the video we had lots of discussions and came up with this idea 
for an app demo. We did a lot of brainstorming and wanted to come 
up with something that could combine both a demo and the spooky 
theme. So that is how we came up with this concept for a historical 
app demo with a touch of spook. </p>

<p className="vstory"> 
We found a gorgeous location to film the video at, its an old ruined 
house called Cullane House. The place had an ominous dark vibe. It 
was the perfect location for the video. 
Production was a lot of work but also was very fun and I enjoyed 
every bit of it. I was in charge of lighting and other miscellaneous 
things.  </p>
<p className="vstory"> 
Because the weather was rainy and cloudy during the time of 
shooting of this video, lighting was very important. It was important 
that we had the light at the start of the video as the storyline starts 
with a brighter cheery note. As we moved further with the scenes it 
was necessary that the lighting was on the darker side.  </p>
<p className="vstory"> 
Coming up with the ideas on how to adjust the light, helping on how 
or in which room to shoot the scene at, trying different angles, 
playing around with the location to get the some real sound effects 
and helping with the timing was big learning experience for me. 
As a group we had a lot of fun and I learned a lot from my teammates 
during this time. It was a very engaging project that helped us 
experiment with our ideas and creativity. </p>
<p className="vstory"> 
I loved every bit of this project and I'm eager and excited to work on 
more projects like this in future and have new experiences.
          </p>

        </div>
          

      </section>

      <Footer />
    </>
  );
}

export default VideoGallery;
