// import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
