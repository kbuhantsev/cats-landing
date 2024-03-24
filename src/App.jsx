import Layout from "./components/Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Particular from "./components/Particular";
import Order from "./components/Order";
import VideoFrame from "./components/VideoFrame";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header id="header" />
      <Hero />
      <Description />
      <Particular left={true} />
      <Particular left={false} />
      <Particular left={false} />
      <Particular left={false} />
      <VideoFrame />
      <Order />
      <Footer />
    </Layout>
  );
}

export default App;
