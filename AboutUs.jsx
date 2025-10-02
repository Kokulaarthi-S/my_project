const AboutUs = () => {
  
  return (
    <div
      style={{
        backgroundImage: 'url(/images13.webp)',  
        backgroundSize: 'cover', 
        backgroundPosition: 'center',

        height: '138vh',
        color: 'black',
        padding: '2rem',
        textAlign: 'left',
      }}
    >
    <div>
      <br></br>
      <h1 style={{textAlign: 'center',}}>ABOUT US</h1>
      <br></br>
      <div className="container mt-4">
          <video width="640" height="360" controls>
            <source src="videos\Video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    <ul>
      <br></br>
<li>Welcome to Music World, the ultimate platform for artists and music lovers alike! We believe in the power of music to connect people across borders, cultures, and genres.</li><br></br><li> Whether you're an independent artist looking to share your sound with the world or a listener seeking fresh, undiscovered talent, Music World is your stage.</li><br></br>

<li>At Music World, we empower creators by providing a seamless platform to upload, distribute, and showcase their music to a global audience.</li><br></br><li> Unlike traditional streaming services, we put artists first—helping them reach fans worldwide without barriers.</li><br></br>

<li>🎵 For Artists: Upload your tracks with ease, build your audience, and get discovered by music enthusiasts across the globe.</li><br></br>

<li>🌍 For Listeners: Explore a diverse catalog of music, from emerging talents to established creators, all in one place.</li><br></br>
<li>We believe that every artist deserves a platform, and every music lover deserves unlimited access to fresh, diverse, and authentic sounds.</li><br></br><li> Whether you're an independent musician looking to showcase your talent or a listener eager to discover the next big hit, Music World connects you to a global stage.</li><br></br>
Join Music World today and become part of a global movement where music knows no limits!
<br></br><br></br>
</ul>
      <footer style={{ background:"black",color:"white",textAlign:"center", padding:"3px", position:"fixed" , Bottom:"0", width:"100%" }}>
        <p>&copy; 2025 Music World. All rights reserved.</p>
      </footer>
      </div> 
    </div>
    
  );
};


export default AboutUs;