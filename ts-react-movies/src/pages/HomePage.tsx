import * as React from "react";
import PageTemplate from "components/common/PageTemplate/PageTemplate";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import NowPlayingPage from "pages/NowPlayingPage";
import PopularPage from "./PopularPage";
import VideosPage from "./VideosPage";

interface HomePageProps {}
const HomePage: React.SFC<HomePageProps> = (props) => {
  const Components = {
    Navbar: <Navbar />,
    Header: <Header />,
    NowPlayingPage: <NowPlayingPage />,
    PopularPage: <PopularPage />,
    VideosPage: <VideosPage />,
  };

  return <PageTemplate Components={Components}></PageTemplate>;
};

export default HomePage;
