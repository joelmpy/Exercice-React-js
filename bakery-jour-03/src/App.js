import './App.css';
import {useState} from 'react'
import Button from './component/Button';
import Pay from './component/Pay';
import List from './component/List';
import Add from './component/Add';

function App() {

  const [activeTab, setActiveTab] = useState('add');
  const [items, setItems] = useState([]);

  const addButton = () => {
    setActiveTab('add')
  }

  const payButton = () => {
    setActiveTab('pay')
  }

  const listButton = () => {
    setActiveTab('list')
  }

  const addItem = (name, price) => {
    let newItem = items
    newItem.push({name : name, price : price })
      setItems(newItem)
      console.log(newItem)
  }

  const deleteItems = (index) => {
    let newItem  = items
    newItem.splice(1, index)
    console.log(newItem)
    // [...items]
    setItems(newItem);
    setActiveTab('list')
  }

  return (
    <div className="App">
      <h1>Bonjour</h1>
      <div>
        <Button isSelected = {activeTab === "add" ? true : false} onClick={addButton} children = {"add"} />
        <Button isSelected = {activeTab === "pay" ? true : false} onClick={payButton} children = {"pay"} />
        <Button isSelected = {activeTab === "list" ? true : false} onClick={listButton} children = {"list"} />
      </div>
      {
        activeTab === "add" ? <Add addFunction = {addItem}/> :  activeTab === "pay" ? <Pay/> :  activeTab === "list" ? <List listItems = {items} delete = {deleteItems}/> : null
      }
    </div>
  );
}

export default App;
