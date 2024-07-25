import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import "./video.scss";

interface Video {
  id: string;
  description: string;
}

const Video: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = import.meta.env.VITE_CHANNEL_ID;
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
        );

        const videoData = response.data.items.map((item: any) => ({
          id: item.id.videoId,
          description: item.snippet.description,
        }));

        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };

    fetchVideos();
  }, []);
  

  return (
    <section className="section video">
      <div className="box video-yt">
        <h2 className="h2">VIDEO</h2>
        <hr
          style={{
            background:
              "linear-gradient(to right, #1C86EE, rgba(51, 255, 102, 0))",
          }}
          className="gradient-line"
        />
        <div className="video-yt-link none">
          <div className="iframe-wrapper">
            <iframe
              src="https://www.youtube.com/embed/ac0oVzZ6A0o?si=w2lRLKILKDxGh-8v"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p>Giới thiệu Bệnh viện Nhi đồng 2</p>
        </div>
        <div style={{ marginTop: "16px" }}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              993: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div
                  className="video-yt-link iframe-wrapper"
                  style={{ width: "100%", paddingTop: "48.25%" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>{video.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Video;
