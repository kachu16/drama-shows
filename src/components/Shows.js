import { useEffect, useState } from "react";
import Show from "./Show";
export default function Shows() {
  const [showsData, setShowsData] = useState(null);
  useEffect(() => {
    getShowsData();
  }, []);

  async function getShowsData() {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json = await data.json();
    console.log(json);
    setShowsData(json);
  }

  return (
    <div>
      <h1 id="main_heading">Drama Shows</h1>

      <div className="container">
        {showsData &&
          showsData.map((item) => {
            const showitem = item?.show;
            return <Show showitem={showitem} key={showitem?.id} />;
          })}
      </div>
    </div>
  );
}
