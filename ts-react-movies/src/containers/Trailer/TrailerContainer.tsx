import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";

import { RootState } from "modules";
import TrailerList from "components/Trailer/Trailer";
import { getVideos } from "modules/videos";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface TrailerContainerProps {
  loading: boolean | undefined;
  videos: Array<any> | undefined;
  getVideos: Function;
}

/* 어벤져스, 스파이더맨, 조커, 어벤져스, 스파이더맨, 어벤져스, 엑시트 */

function getRandomId() {
  const a: string[] = [
    "299534",
    "429617",
    "475557",
    "299536",
    "315635",
    "99861",
    "572164",
  ];
  const shuffle = [];
  while (a.length > 0) {
    shuffle.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
  }
  const getId = shuffle.splice(0, 3);
  console.log(getId);

  return [...getId];
}

const TrailerContainer: React.SFC<TrailerContainerProps> = ({
  loading,
  getVideos,
  videos,
}) => {
  const randomId = useMemo(() => getRandomId(), []);
  useEffect(() => {
    getVideos(randomId[0]);
  }, []);

  return <>{loading ? <LoadingPage /> : <TrailerList videos={videos} />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.videos.loading,
    videos: state.videos.videos,
  }),
  { getVideos }
)(TrailerContainer);
