/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./DetailTrailer.scss";
import ReactPlayer from "react-player";

interface DetailTrailerProps {
  videos:
    | Array<{
        id?: string;
        key: string;
        name?: string;
        site?: string;
        size?: number;
        type?: string;
      }>
    | undefined;
}

const DetailTrailer: React.FC<DetailTrailerProps> = ({ videos }) => {
  const [playing, setPlaying] = useState(Boolean);
  const backdrop = require("assets/backdrop.png");

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "Trailer-Dots",
  };

  const handleOnReady = () => {
    setTimeout(() => setPlaying(true), 100);
  };

  return (
    <div>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Movie Trailer</h1>
      {videos === undefined ? (
        <div className="DetailVideo-Wrap-Fail">
          <p>Trailer를 제공하지 않는 영화입니다.</p>
          <img
            className="DetailRecommend-Wrap-Content-Img"
            style={{
              width: "300px",
              height: "180px",
              marginRight: "20px",
              float: "left",
              borderRadius: "5px",
            }}
            src={backdrop}
          />
        </div>
      ) : (
        <div className="DetailVideo-Wrap">
          <Slider {...settings} className="DetailVideo-Wrap-VideoSlider">
            {videos?.map((k, i) => (
              <ReactPlayer
                key={k.key}
                url={`https://www.youtube.com/embed/${k.key}?enablejsapi=1&origin=http://localhost:9999/`}
                width="100%"
                height="480px"
                left="0px !important"
                muted={true}
                playing={i === 0 ? playing : false}
                controls={true}
                onReady={handleOnReady}
                className="DetailVideo-Wrap-Player"
                /*  config={{
                  youtube: {
                    embedOptions: {
                      host: "https://www.youtube-nocookie.com",
                    },
                  },
                }} */
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default DetailTrailer;
