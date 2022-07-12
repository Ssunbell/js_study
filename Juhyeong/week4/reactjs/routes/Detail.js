import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMoive = async () => {
    const json = await await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    ).json();
  };
  useEffect(() => {
    getMoive();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;