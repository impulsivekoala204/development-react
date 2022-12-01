# Development

### Link to Deployed Website
https://impulsivekoala204.github.io/development-react/

### Goal and Value of the Application
The goal of this application is to provide an easy to use, intutive interface to order desserts from a bakery. The interface allows users to browse through the available items and filter them based on their chosen criteria. It also allows users to add and remove items in their cart for ordering.

### Usability Principles Considered
I tried to make a simple and effective hierarchy that doesn't complicate the components and can facilitate a clean, easy-to-use UI. I pushed all the menu items to the right in a card grid which is scrollable and the controls on the left. The controls included the filter and the aggregator which has a fixed position and doesn't change as the user scrolls through the items. This seperation was a key principle to enhance usability. I also made the page responsive to different viewports to prevent any difficulties in usage.

### Organization of Components
I kept track of all the control filters and variables through the use of useState. This allowed me to keep track of what the user's preferences were along with important information like the final price of the user's order. I also used useEffect to continually update the items based on these states. The items itself were stored in a master list containing the items and all their properties. Depending on the state, I would filter out the elements in the final list and then render the list. Again, using useEffect allowed me to keep track of this final list continously. The specific way I usually changed state was calling the setter function on user events. These events included the user selecting a filter, the user adding items and the user removing items from the cart. I used props like name, gluten free, vegan and price in the menu items themselves.


