import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCart from "./components/ShoppingCart";



/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("All");
  const [costFilter, setCostFilter] = useState("All");
  const [sortType, setSortType] = useState("popular");
  const myFilterFunction = item => {
    // all items should be shown when no filter is selected
    if(type === "All") { 
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }
  const myCostFilterFunction = item => {
    // all items should be shown when no filter is selected
    if(costFilter === "All") { 
      return true
    } else if (costFilter === 'low') {
      return item.price < 3
    } else if (costFilter === 'high'){
      return item.price > 7
    }else{
      return item.price > 3 && item.price < 7
    }
  }
  
    
  const filteredData = bakeryData.filter(myFilterFunction)
  const filteredData2 = filteredData.filter(myCostFilterFunction)
  const selectFilterType = eventKey => {
    setType(eventKey);
  };
  const selectCostFilterType = eventKey => {
    setCostFilter(eventKey);
  };
  const selectSortType = eventKey => {
    console.log(eventKey)
    setSortType(eventKey);
  };
  const mySortFunction = (a, b) => {
    // all items should be shown when no filter is selected
    console.log('s')
    if(sortType === "popular") { 
       
        return 1;
        
    } else if (sortType === 'price') {
        return a.price - b.price;
        
    } else if (sortType === 'description'){
     
        return a.description.localeCompare(b.description);
        
    }
  }
  const sortedArray = filteredData2.sort(mySortFunction)


  return (
    <div className="App">
      <h1>Expired Foods Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand >Filtering and Sorting</Navbar.Brand>
      <NavDropdown title="Filter by Type" id="basic-nav-dropdown" onSelect={selectFilterType}>
              <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
              <NavDropdown.Item eventKey="pastry">Pastry
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="cake">Cake</NavDropdown.Item>
              <NavDropdown.Item eventKey="bread">Bread</NavDropdown.Item>
            </NavDropdown>

      <NavDropdown title="Filter by Price" id="basic-nav-dropdown" onSelect={selectCostFilterType}>
              <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
              <NavDropdown.Item eventKey="low"> Low
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="medium">Medium</NavDropdown.Item>
              <NavDropdown.Item eventKey="high">High</NavDropdown.Item>
            </NavDropdown>
      <NavDropdown title="Sort By" id="basic-nav-dropdown" onSelect={selectSortType}>
              <NavDropdown.Item eventKey="popular">Original Ordering</NavDropdown.Item>
              <NavDropdown.Item eventKey="price">
                Price
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="description">Description</NavDropdown.Item>
            </NavDropdown>
      </Container>
      </Navbar>
      <div id='g'>
      {sortedArray.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem total= {total} setTotal = {setTotal} name={item.name} description={item.description} price={item.price} image = {item.image} cart={cart} setCart = {setCart}/> // replace with BakeryItem component
      ))}
      </div>
      <ShoppingCart cart={cart} total={total}/>
      
    </div>
  );
}

export default App;
