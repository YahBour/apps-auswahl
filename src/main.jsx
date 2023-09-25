import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Protected from "./components/Protected.jsx";
import VideoCall from "./components/video-call/VideoCall";
import Room from "./components/video-call/Room";
import ToDoList from "./components/to-do-list/ToDoList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/videocall" element={<VideoCall />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="*" element={"404 Die Seite gibt es nicht"} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
