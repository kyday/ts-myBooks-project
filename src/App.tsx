import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Add from "./pages/Add/Add";
import Edit from "./pages/Edit/Edit";
import Detail from "./pages/Detail/Detail";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error/Error";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/edit/id' component={Edit} />
          <Route exact path='/book/id' component={Detail} />

          <Route exact path='/add' component={Add} />
          <Route exact path='/signin' component={Signin} />

          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
