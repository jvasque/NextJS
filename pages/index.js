import axios from "axios";
import Link from "next/link";

export async function getServerSideProps() {
  let data = await axios.get("https://api.audioboom.com/channels/recommended");
  let channels = data.data.body;

  return { props: { channels: channels } };}

function index({ channels }) {
  return (
    <div>
      <header>Podcasts</header>
      <div className="channels">
        {channels.map((channel) => (
          <Link href={`/channel?id=${channel.id}`} key={channel.id}>
            <div className="channel">
              <img src={channel.urls.logo_image.original} alt="" />
              <h2>{channel.title}</h2>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
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
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
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
}

export default index;
