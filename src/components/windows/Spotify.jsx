import React from 'react'
import MacWindow from './MacWindow'
import "./Spotify.scss"
const Spotify = () => {
  return (
    <MacWindow w="600" h="400">
        <div className="spotify">
           <iframe data-testid="embed-iframe" src={
            "https://open.spotify.com/embed/artist/2rN8LHqK4TBI7y3d9POvJb?utm_source=generator&theme=0"} width="100%" height="100%" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>        
  )
}

export default Spotify
