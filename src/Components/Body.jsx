import React from "react";

import Restcard from "./Restcard";
import "./comp.css";
import { useState } from "react";
import { useEffect } from "react";

function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchList, setSearchList] = useState("");
  const [filterList, setFilterList] = useState([]);
  console.log("searchlst", searchList);
  function handleClick() {
    setListOfRestaurant(
      listOfRestaurant.filter((resitem) => resitem.info.avgRating > 4.3)
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        let restData =
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurant(restData);
        setFilterList(restData);
      } catch {
        console.log("error occured");
      }
    };
    fetchData();
  }, []);

  return listOfRestaurant.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body-main">
      <div>
        <input
          type="text"
          value={searchList}
          onChange={(e) => {
            setSearchList(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let filteredList = listOfRestaurant.filter((item) =>
              item?.info?.name.toLowerCase().includes(searchList.toLowerCase())
            );
            setFilterList(filteredList);
          }}
        >
          Search
        </button>

        <button onClick={handleClick}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filterList.length > 0 ? (
          filterList.map((resItem) => (
            <Restcard key={resItem.info.id} resData={resItem} />
          ))
        ) : (
          <p>No Restaurants Found</p>
        )}
      </div>
    </div>
  );
}

export default Body;
