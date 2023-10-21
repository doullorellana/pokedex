import { useEffect, useState } from "react";

function Card({ link, fnToogle }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(link);
      const datos = await res.json();
      // console.log(datos);

      setData(datos);
    };

    getData();
  }, []);

  return (
    <>
      <div className="card" onClick={fnToogle}>
        <img src={data?.sprites.front_default} alt="" />
      </div>
    </>
  );
}

export default Card;
