import React from "react";
import axios from "axios";
import Link from "next/Link";


const getChannels = async (id) => {
  let data = await axios.get(`https://api.audioboom.com/channels/${id}`);
  let { channel } = data.data.body;
  return channel;
};

const audioClips = async (id) => {
  let audioClips = await axios.get(
    `https://api.audioboom.com/channels/${id}/audio_clips`
  );
  let { audio_clips } = audioClips.data.body;
  return audio_clips;
};

const getChildChannels = async (id) => {
  let child_channels = await axios.get(
    `https://api.audioboom.com/channels/${id}/child_channels`
  );
  let { channels } = child_channels.data.body;
  return channels;
};

export async function getServerSideProps({ query }) {
  let id = query.id;

  let [channel, audio_clips, channels] = await Promise.all([
    getChannels(id),
    audioClips(id),
    getChildChannels(id),
  ]);

  return { props: { channel, audio_clips, channels } };
}

const channel = ({ channel, audio_clips, channels }) => {
  return (
    <div>
      <Link href="http://localhost:3000">
        <header>Podcasts</header>
      </Link>

      <div
        className="banner"
        style={{
          backgroundImage: `url(${channel.urls.banner_image.original})`,
        }}
      />

      <h1>{channel.title}</h1>

      {channels.length > 0 && (
        <>
          <h2>Series</h2>
          <div style={{display:"flex", justifyContent:"space-around", marginLeft:"35%"}}>
            <div className="channels">
              {channels.map((serie) => (
                <Link href={`/channel?id=${serie.id}`}>
                  <a className="channel">
                    <img src={serie.urls.logo_image.original} alt="" />
                    <h2>{serie.title}</h2>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      <h2>Ultimos Podcasts</h2>
      {audio_clips.map((clip) => (
        <Link href={`/podcast?id=${clip.id}`} key={clip.id}>
          <a className="podcast">
            <h3>{clip.title}</h3>
            <div className="meta">{Math.ceil(clip.duration / 60)} minutes</div>
          </a>
        </Link>
      ))}

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
          cursor:pointer;
        }

        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
        }

        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
        a.channel {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
          width: 100%;
        }

        h1,
        h2 {
          color: #fff;
          background: #8756ca;
          text-align: center;
        }

        h1 {
          font-weight: 600;
          padding: 15px;
        }
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
         
        }

        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}</style>

   
    </div>
  );
};

export default channel;
