import Section from "./Section";

const VideoFrame = () => {
  return (
    <Section id="video" title="Відео огляд">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/leiKK8MuWDU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Section>
  );
};

export default VideoFrame;
