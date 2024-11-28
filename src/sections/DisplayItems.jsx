import { useEffect, useState } from "react";

const DisplayItems = () => {
  const storedItems = JSON.parse(window.localStorage.getItem("items")) || [];

  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([...storedItems]);

  // Save items to localStorage whenever the items state changes
  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const clearFilter = () => {
    setQuery("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search items..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button onClick={clearFilter}>Clear Filter</button>
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Type an item and press Enter..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={handleKeyPress} // Listen for "Enter" key
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index}>
              {item} <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No matching items.</p>
        )}
      </div>
    </>
  );
};

export default DisplayItems;
