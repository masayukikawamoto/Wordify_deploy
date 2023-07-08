import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import "./scss/index.css";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import WordDetail from "./routes/WordDetail";
import GroupList from "./routes/GroupList";
import WordList from "./routes/WordList";
import CreateWord from "./routes/CreateWord";
import Modal from "./routes/Modal";
import Menu from "./routes/Menu";
import Header from "./routes/Header";
import Footer from "./routes/Footer";

const router = createBrowserRouter([
  {
    index: true,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/grouplist",
    element: <GroupList />,
  },
  {
    path: "/createword",
    element: <CreateWord />,
  },
  {
    path: "/wordlist",
    element: <WordList />,
  },
  {
    path: "/worddetail/:wordId",
    element: <WordDetail />,
  },
  {
    element: <Modal />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  { element: <Header /> },
  { element: <Footer /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
