import React from "react";
import "../scss/style.css";
import Header from "./Header";
import GroupList from "./GroupList";
import Footer from "./Footer";

export default function Root() {
  return (
    <div className="root">
      <Header />
      <GroupList />
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}
