import axios from "axios";
import React, { useState, useEffect} from "react";
import Cards from "./components/Cards/Cards";
import Basket from "./components/Basket/Basket";

function App() {
  const [getItems, setGetItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse] = await Promise.all([
          axios.get("https://dummyjson.com/products"),
        ]);

        setIsLoading(false);
        setGetItems(itemsResponse.data.products);
      } catch (error) {
        alert("Downloading failed");
      }
    }

    fetchData();

  }, []);

  const addToCard = (title) => {
    setGetItems((prevItems) => [...prevItems, { title, key: title }]);
    console.log(getItems);
  };
  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  }
  const filteredItems = getItems.filter(item =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );


  return (
    <div className="mainCard">
    
      {isLoading ? (
        <p className="loading">идет загрузка...</p>
      ) : (
        
        <>
             <input
        type="text"
        placeholder="Поиск товаров в корзине"
        value={searchItem}
        onChange={handleSearch}
      />
       
           {filteredItems
            .filter(item => item.key && item.title)
            .map(item => (
              <Basket
                {...item}
              />
            ))}

          {getItems.map((item) => (
            <Cards addToCard={addToCard} 
            key={item.id} 
            {...item} />
          ))}
        
        </>
      )}
    </div>
  );
}

export default App;
