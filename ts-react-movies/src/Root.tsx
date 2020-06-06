import * as React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { library } from "@fortawesome/fontawesome-svg-core";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "pages/HomePage";
import NowPlayingPage from "pages/NowPlayingPage";

library.add(faSearch);

interface RootProps {}
const Root: React.SFC<RootProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/nowPlaying" component={NowPlayingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
