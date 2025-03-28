import { useState } from "react";
import { RouteObject } from "react-router-dom";
import { Router } from "./router/router";
import { publicRoutes } from "./router/routes/public-routes";

function App() {
  const [allRoutes, setAllRoutes] = useState<RouteObject[]>([...publicRoutes]);
 
  return (
   <Router allRoutes={allRoutes}/>
  );
}

export default App;
