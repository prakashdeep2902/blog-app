import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../reuseblecom/Card";

const Album = () => {
  const [albumData, SetalbumData] = useState([]);
  useEffect(() => {
    const APi = "https://jsonplaceholder.typicode.com/albums";

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

  return (
    <div>
      <>{albumData && <Cards data={albumData} />}</>
    </div>
  );
};

export default Album;
