import React, { useEffect, useState } from "react"
import { items } from "../items"
import "../filterStyles.css"
import { useTranslation } from "react-i18next"


export default function Courses() {
  const { t, i18n } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(items)
  //let filterList = ["Entry Courses", "Mid Courses", "Expert Courses"]
  let filter2List = ["Art Courses", "Dev Courses", "Market Courses", "History Courses"]

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };


  useEffect(() => {
    filterItems();
  }, [selectedFilters]);


  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.type === selectedCategory);

        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="container">
        <div className="buttons-container">
          {filter2List.map((type, idx) => (
            <button
              onClick={() => handleFilterButtonClick(type)}
              className={`button ${selectedFilters?.includes(type) ? "active" : ""
                }`}
              key={`filters-${idx}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="items-container">
          {filteredItems.map((item, idx) => (
            <div key={`items-${idx}`} className="item">
              {/*<p>{item.name}</p>
                    <p className="category">{item.category}</p>*/}
              <div className="customCard">
                <div className="card-body">
                  <h4 className="card-title"><u>{item.name}</u></h4>
                  <b>{item.category}</b>
                  <br></br>
                  <br></br>
                  <p className="card-text">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}