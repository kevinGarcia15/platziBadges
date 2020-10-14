import React from "react";
import "./styles/PageLoading.css";
import Skeleton from "./Skeleton";

function PageLoading() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="PageLoading">
      {items.map((i) => {
        return <Skeleton key={i} />;;
      })}
    </div>
  );
}

export default PageLoading;
