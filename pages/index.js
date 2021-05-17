import axios from "axios";
import Link from "next/Link";
import ChannelGrid from "./components/ChannelGrid";
import Layout from "./components/Layout";

export async function getServerSideProps() {
  let data = await axios.get("https://api.audioboom.com/channels/recommended");
  let channels = data.data.body;

  return { props: { channels: channels } };
}

function index({ channels }) {
  return (
    <Layout title="Podcast">
      <ChannelGrid channels={channels} />
    </Layout>
  );
}

export default index;
