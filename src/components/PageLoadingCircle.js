import React from "react";
import "./styles/PageLoading.css";
import Loader from "./Loader"

function PageLoading() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="PageLoading">
      <Loader/>
    </div>
  );
}

export default PageLoading;
