import React from 'react';
import Marquee from "react-fast-marquee";
const images = [
  "/public/im1.jfif",
  "/public/im2.jpg",
  "/public/im3.jpeg",
  "/public/im4.jfif",
  "/public/im5.webp",
  "/public/im6.jfif",
  "/public/im7.jpg",
  "/public/im8.jpg",
  "/public/im10.jfif",
  "/public/im11.jfif",
];
function App() {

  return (
<div style={{ backgroundColor:"black",}}>
<div
      style={{
        backgroundImage: 'url(/images14.avif)',  
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh',
        color: '#fff',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1>WELCOME TO MUSIC WORLD!</h1>
      </div>
      <br></br><br></br><br></br>
      <div>
      <img
        src="iq1.jpg"
        alt="Description"
        style={{ float: 'right', marginLeft: '20px',height:"400px" }}
      />
      <br></br><br></br>
      <p style={{color:"white", fontSize:"25px",}}>At Music World, we believe every artist deserves to be heard.
         Our platform is built with one goal in mind: to give talented,
         unknown musicians the space and tools they need to share their sound with the world.</p>
      <br></br><br></br><br></br><br></br>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <div>
      <img
        src="iq2.jpg"
        alt="Description"
        style={{ float: 'left', marginRight: '20px',height:"400px" }}
      />
      <br></br><br></br>
      <p style={{color:"white", fontSize:"25px",}}>Share your original tracks, demos, and finished
         songs with a global audience. 
        Whether it’s your first beat or your latest project, Music World is your stage.</p>
      <br></br><br></br><br></br><br></br>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div>
      <img
        src="iq3.jpg"
        alt="Description"
        style={{ float: 'right', marginLeft: '20px',height:"400px" }}
      />
      <br></br><br></br>
      <p style={{color:"white", fontSize:"25px",}}>Our mission is simple: help artists grow, 
        share their music, and get the recognition they deserve. No big labels, no complicated contracts—just
         pure talent and passion.</p>
      <br></br><br></br><br></br><br></br>
    </div>
    <br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <h2 style={{color:"yellow"}}><i>FREE MUSIC DEVELOPMENT</i></h2>
      <br></br>
      <Marquee speed={50} gradient={false}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`img-${i}`}
          style={{ height: "250px", marginRight: "30px" }}
        />
      ))}
    </Marquee>
    <br></br>
    <h2 style={{color:"yellow", textAlign:"right"}}><i>FOR INDEPENDENT ARTIST</i></h2>
</div>
  );
}

export default App;
