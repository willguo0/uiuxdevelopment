# Development

### Link to Deployed Website
If you used the stencil code, this is `https://pissedoffpenguin000.github.io/uiuxdevelopment`

### Goal and Value of the Application
The Goal of this application was to be an online website for a bakery. It allows the user to see the differing offerings of
the bakery and it allows the user to filter these options based off of what they are looking for. They can also sort the
offerings to better compare and contrast the different options. Users are able to do some small manipulations to the data which
allows them to better consider their choices. 
### Usability Principles Considered
Usability Principles considered includes consistency and efficiency. I made sure that each item sold at the bakery contains
the same amount of information and are organized in the same way to make less distractions for the user. In terms of efficiency,
I made sure to display the maximum amount items of per row without sacrifacing the size of each item to make sure that it's still 
large enough to be readable. 
### Organization of Components
There is a main App component. There is also a ShoppingCart component and a BakeryItem component under the App component.
The ShoppingCart displays what the user currently has in their cart and also shows the aggregate cost of every item in their cart.
The BakeryItem component shows each individual item. Each BakeryItem contains an image of the respective item, the price, the name,
a description, and the ability to add or subtract the item from the cart.
Finally I have a NavBar component from ReactBootstrap. This imported component allows the user to do various filters and sorts of the
BakeryItem components.

### How Data is Passed Down Through Components
Data is passed down through the components through the props. The ShoppingCart has the cart and total variables that passed in as props. When the state variables of cart and total change, the ShoppingCart component rerenders. The BakeryItem component has name, description, price, image, cart,setCart, total and setTotal passed in as props. Each BakeryItem has its own name, description price and image, while they are share the same cart, total and setter methods which are needed to implement the button that changes the aggregator.

### How the User Triggers State Changes
The User triggers state changes by clicking different aspects of the NavBar component. The user can choose to change what they filter by and what they are sorting by, by clicking on the dropdown which edits different state variables which cause the whole react component to rerender, showing the state changes on the website. For example, clicking on Low for filter by price would cause the filter to change from nothing to a filter that only shows bakery goods that are cheap.
Another state change users can cause are by adding and subtracting an item from the cart. Pressing the add to cart button adds an item to the aggregate cart and adds the item's price to the cart. Both of these are state variables so the respective components rerender.
