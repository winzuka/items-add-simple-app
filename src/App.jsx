import { useEffect, useState } from "react"
import defaultItems from "./api/apiCalling"

const App = () => {
  const [items, setItem] = useState([])
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    const apiItems = defaultItems()
    setItem(apiItems)
  }, [])

  const addNewItem = () => {
  setItem([...items,{id:items.length + 1, name:newItem}])
  setNewItem('')
  }
  return (
    <>
      <h1 className="text-center mt-4">Add Items To The List</h1>

      <div className="text-center my-4">
        <input type="text"  placeholder="Enter new Items" className="mx-2" onChange={(event) => setNewItem(event.target.value)} value={newItem} />
        <button className="btn btn-info btn-sm" onClick={addNewItem}>Add Item</button>
      </div>

      {items.length > 0 ?
        <ul className="text-center list-unstyled">
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        : console.log("hukapan")}
    </>
  )
}

export default App
