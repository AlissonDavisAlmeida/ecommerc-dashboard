import { useState } from "react";
import { RouteObject } from "react-router-dom";
import { Router } from "./router/router";

function App() {
  const [allRoutes, setAllRoutes] = useState<RouteObject[]>([]);
 
  return (
   <Router allRoutes={allRoutes}/>
  );
}

export default App;
