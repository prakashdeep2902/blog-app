import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../reuseblecom/Card";

const Commnet = () => {
  const [albumData, SetalbumData] = useState([]);
  useEffect(() => {
    const APi = "https://jsonplaceholder.typicode.com/comments";

    async function fetchAlbum() {
      try {
        const res = await axios.get(APi);
        SetalbumData(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAlbum();
  }, []);
  return <>{albumData && <Cards data={albumData} />}</>;
};

export default Commnet;
