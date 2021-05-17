import React from "react";
import axios from "axios";
import Link from "next/Link";

export const getServerSideProps = async ({ query }) => {
  let id = query.id;
  let data = await axios(`https://api.audioboom.com/audio_clips/${id}.mp3`);
  let { audio_clip } = data.data.body;
  return { props: { audio_clip } };
};

const podcast = ({ audio_clip }) => {
  return (
    <div >
      <div className="modal">
        <div className="clip">
          <nav>
            <Link href={`/channel?id=${audio_clip.channel.id}`}>
              <a className="close">&lt; Volver</a>
            </Link>
          </nav>

          <picture>
            <div
              style={{
                backgroundImage: `url(${
                  audio_clip.urls.image ||
                  audio_clip.channel.urls.logo_image.original
                })`,
              }}
            />
          </picture>

          <div className="player">
            <h3>{audio_clip.title}</h3>
            <h6>{audio_clip.channel.title}</h6>
            <audio controls autoPlay={true}>
              <source src={audio_clip.urls.high_mp3} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>

      <style jsx>{`
        nav {
          background: none;
        }
        nav a {
          display: inline-block;
          padding: 15px;
          color: white;
          cursor: pointer;
          text-decoration: none;
        }
        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
          cursor: pointer;
        }
        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background: #8756ca;
          color: white;
        }
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .player {
          padding: 30px;
          background: rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        h3 {
          margin: 0;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default podcast;
