import "./App.css";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Particulars from "./components/Particulars";
import Order from "./components/Order";
import VideoFrame from "./components/VideoFrame";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header id="header" />
      <Hero />
      <Description />
      <Particulars />
      <VideoFrame />
      <Order />
      <Footer />
    </Layout>
  );
}

export default App;
