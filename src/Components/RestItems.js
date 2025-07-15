import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./comp.css";
import { useDispatch } from "react-redux";
import { addItems } from "./utils/Store/cartSlice";

const RestItem = () => {
  const [resdata, setResdata] = useState([]);
  const [title, setTitle] = useState("");
  const [showIndices, setShowIndices] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const fetchcall = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${id}`
      );
      const json = await fetchcall.json();
      let jsonData = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
      setTitle(json.data.cards[0].card.card.text);
      console.log(jsonData);
      const filterData = jsonData.filter(
        (f) =>
          f.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      setResdata(filterData);
      console.log("fd", filterData);
    };

    data();
  }, []);

  function handleToggle(id) {
    setShowIndices((prev) => ({ ...prev, [id]: !prev[id] }));
  }
  const dispatch = useDispatch();
  function handleAdd(data) {
    dispatch(addItems(data));
  }
  return (
    <div>
      <h1>{title}</h1>
      {resdata.map((e) => (
        <div key={e.card.card.title}>
          <div className="resItem">
            <span>
              <h5>
                {e?.card?.card?.title}({e.card.card.itemCards.length})
              </h5>
            </span>
            <button onClick={() => handleToggle(e.card.card.title)}>
              {showIndices[e.card.card.title] ? "▲" : "▼"}
            </button>
          </div>
          {showIndices[e.card.card.title] && (
            <div>
              <li>
                {e.card.card.itemCards.map((it) => (
                  <div key={it.card.info.id}>
                    <span>{it.card.info.name}</span>
                    <button onClick={() => handleAdd(it.card.info)}>Add</button>
                  </div>
                ))}
              </li>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestItem;
