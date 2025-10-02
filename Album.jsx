import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const artists = [
  {
    name: "Acoostika-Beat",
    image: "img3.jpg",
    songs: [
      { title: "Jai Ho", url: "https://pixabay.com/music/wedding-love-romantic-hopeful-music-333017/" },
      { title: "Kun Faya Kun", url: "a3.mp3" },
    ],
  },
  {
    name: "Andorios",
    image: "img4.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a2.mpeg" },
      { title: "Teri Ore", url: "a4.mp3" },
    ],
  },
   {
    name: "Sniper74",
    image: "img5.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  }, 
  {
    name: "Modest Mouse",
    image: "img6.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  }, 
  {
    name: "Anuv Jain",
    image: "img7.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  }, 
  {
    name: "Lifafa",
    image: "img8.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  }, 
  {
    name: "Andrin",
    image: "img9.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  }, 
  {
    name: "Buzzpsy",
    image: "img10.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  },
  {
    name: "Apexbeats",
    image: "img11.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  },  
  {
    name: "Jean-Paul-v",
    image: "img12.jpg",
    songs: [
      { title: "Sun Raha Hai", url: "a1.mpeg" },
      { title: "Teri Ore", url: "https://linktosong.com/teriore.mp3" },
    ],
  },  
  // ... other artists ...
];

const ArtistPage = () => (
  <div
    style={{
      backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-futuristic-sci-fi-abstract-blue-and-purple-triangle-neon-light-image_400514.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      padding: "2rem",
    }}
  >
    <h1 style={{ color: "white", textAlign: "center" }}>Artist Page</h1>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
        marginTop: "2rem",
      }}
    >
      {artists.map((artist, index) => (
        <Link to={`/artist/${index}`} key={index}>

          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundImage: `url(${artist.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginBottom: "0.5rem",
              marginLeft: "0.8rem",
              marginRight: "0.8rem",
            }}
          ></div>
          <p style={{ textAlign: "center", fontSize: "28px" }}>{artist.name}</p>
        </Link>
      ))}
    </div>
  </div>
);

const ArtistDetails = () => {
  const { id } = useParams();
  const artist = artists[parseInt(id)];

  if (!artist) return <p style={{ color: "white", padding: "2rem" }}>Artist not found</p>;

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>
        Playlists of {artist.name}
      </h2>

      {/* Artist Image */}
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundImage: `url(${artist.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "2rem",
          boxShadow: "0 0 15px rgba(255,255,255,0.5)",
        }}
      ></div>

      {/* Song List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {artist.songs.map((song, index) => (
          <div key={index}>
            <p style={{ fontSize: "18px", marginBottom: "0.5rem" }}>{song.title}</p>
            <audio controls style={{ width: "100%" }}>
              <source src={song.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};



const Album = () => (
    <Routes>
      <Route path="/" element={<ArtistPage />} />
      <Route path="/artist/:id" element={<ArtistDetails />} />
    </Routes>
 
);

export default Album;