import './App.css';
import {useEffect, useState} from 'react';
import * as React from 'react';
import { Checkbox } from '@nextui-org/react';
import { Grid, Card, Button } from '@nextui-org/react';

export function Main(){
  const [finalItems, updateFinal] = useState([])
  const [cartItems, updateCart] = useState([])
  const [glutenfree, setglutenfree] = useState(false)
  const [vegan, setvegan] = useState(false)
  const [sortcondition, setsortcondition] = useState(false)
  const [finalPrice, updatePrice] = useState(0)
  let listItems = [
    {
      name: "Apple Turnover",
      url: "https://imgs.search.brave.com/-pMRcPlT4CohyzcgXpYn8W5JLYMbwKFQ7VS_Sn_OU98/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9tc2Rpc2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA5L1F1aWNrLUFw/cGxlLVR1cm5vdmVy/cy0wNS1zY2FsZWQu/anBn",
      price: 20,
      gluten: "Gluten Free",
      vegan: "Not Vegan"
    },
    {
      name: "Banana Pudding",
      url: "https://imgs.search.brave.com/cYzhj3dE5hBnwVFcVT72IZkLuufWibAUPWaGAzo3lBU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5t/YWNhcm9uaWFuZGNo/ZWVzZWNha2UuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA4L0Jlc3QtRXZl/ci1CYW5hbmEtUHVk/ZGluZy00LmpwZw",
      price: 15,
      gluten: "Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Banoffee Pie",
      url: "https://imgs.search.brave.com/jVBAAbSybI8NRBetFPsS6QxeHTnw5fI1DO9WJO4dqu4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/c2F2aW5nZGVzc2Vy/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTUvMDgvQmFu/b2ZmZWUtUGllLTEx/LmpwZw",
      price: 15,
      gluten: "Not Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Ricotta Cheescake",
      url: "https://imgs.search.brave.com/DdphiZEccs24OHiVuA6NsyhKU7tH4TxPqf4t3YGrcmQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ZyZWVm/b29kcGhvdG9zLmNv/bS9pbWFnZWxpYnJh/cnkvY29uZmVjdGlv/bmVyeS9jaGVlc2Vj/YWtlX2Rlc3NlcnQu/anBn",
      price: 20,
      gluten: "Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Chocolate Cake",
      url: "https://imgs.search.brave.com/AUhUiQRhEk8ZzGJ-O5yhlXIZGNncBnPJUpAubS_MMLI/rs:fit:1200:1200:1/g:ce/aHR0cDovL2hkcXdh/bGxzLmNvbS93YWxs/cGFwZXJzL2Nob2Nv/bGF0ZS1kZXNzZXJ0/LXBhc3RyeS1jYWtl/LTVrLXl3LmpwZw",
      price: 10,
      gluten: "Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Macaroons",
      url: "https://imgs.search.brave.com/q9m6-AainzCRVYy8Fdoo-kFtfRdEvrMKgof8Zv1DTEI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ibG9n/LmdldHNuZWFrLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNi9mcmVuY2gt/cGFzdHJ5X2hlYWRf/Y2hlbHNlYS1hdWRp/YmVydC1oVjFnQ2hn/TWEtay11bnNwbGFz/aC1zY2FsZWQuanBn",
      price: 10,
      gluten: "Not Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Raspberry Pretzel",
      url: "https://imgs.search.brave.com/37p4ONjm5nKclm1pkkDSaAXcjbGU20S0n_DbAlGU1yk/rs:fit:1140:770:1/g:ce/aHR0cDovL3d3dy5i/ZXN0cmVjaXBlc2V2/YXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDEzLzA0L3By/ZXR6ZWwtZGVzc2Vy/dC5qcGc",
      price: 15,
      gluten: "Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Tiramisu",
      url: "https://imgs.search.brave.com/VIMNArd1yqgn5ulcmgvMDasWuNEWhjSQdoc8gSIL6F4/rs:fit:1024:683:1/g:ce/aHR0cHM6Ly9jYW1w/YW5pYWdhLmNvbS9t/ZWRpYS90aXJhbWlz/dS1kZXNzZXJ0LTEw/MjR4NjgzLmpwZw",
      price: 10,
      gluten: "Gluten Free",
      vegan: "Not Vegan"
    },
    {
      name: "Pumpkin Cake",
      url: "https://imgs.search.brave.com/XPOMPtIln4ebfNHcfyXh3smJY_xyDK1MZ99CGVmxQAo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHJpb3JpdHltYXJr/ZXRpbmcuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEx/L1B1bXBraW4tUGll/LmpwZw",
      price: 15,
      gluten: "Not Gluten Free",
      vegan: "Not Vegan"
    },
    {
      name: "Carrot Cake",
      url: "https://imgs.search.brave.com/7H8bTDWia12dTNauoGiwe3LixXUG1McmjEUW9Je6qaA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS83OTQv/dGh1bWItMTkyMC03/OTQyNTkuanBn",
      price: 20,
      gluten: "Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Filled Donuts",
      url: "https://imgs.search.brave.com/tK66BKdWVabZyniR5LfUCLChf1aVbs9aGwB9UuYvBtI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zLmlu/eW91cnBvY2tldC5j/b20vZ2FsbGVyeS9r/cmFrb3cvMjAxOS8w/OS9wYWN6a2ktcGhv/dG9ieS1haXJib3Ju/ZTc3LmpwZw",
      price: 5,
      gluten: "Gluten Free",
      vegan: "Vegan"
    },
    {
      name: "Cheescake",
      url: "https://imgs.search.brave.com/W7tnhYZQ5F4q5Ig6Twe7LTlrwbabmmY1Xck5yABDjAM/rs:fit:1200:1131:1/g:ce/aHR0cDovL2ltZy1j/ZG4uaGVyYmVhdXR5/LmNvL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA1L1RoZS0x/MC1Nb3N0LURlbGlj/aW91cy1EZXNzZXJ0/cy1Jbi1UaGUtV29y/bGQuanBn",
      price: 18,
      gluten: "Gluten Free",
      vegan: "Not Vegan"
    },
  ]
  const clickFilter = filter => {
    if (filter === "All"){
      updateFinal(listItems);
    }
    else if (filter === "Gluten Free"){
      setglutenfree(!glutenfree);
    }
    else if (filter === "Vegan"){
      setvegan(!vegan);
      console.log(vegan)
    }
  }

  const addToCart = item => {
    updateCart([...cartItems, item])
    updatePrice(finalPrice + item.price)
  }

  const removeItem = item => {
    let index = 0
    for (let i=0; i < cartItems.length; i++){
      if (cartItems[i].name === item.name){
        index = i
        break
      }
    }
    cartItems.splice(index,1)
    updateCart(cartItems)
    updatePrice(finalPrice - item.price)
  }
  
  const sorted = sorted => {
    setsortcondition(!sortcondition)
  }

  const resetfunc = res => {
    if(glutenfree){
      document.getElementById("gtf").click()
    }
    if(vegan){
      document.getElementById("vg").click()
    }
    if(sortcondition){
      document.getElementById("price").click()
    }
    // clickFilter("All");
  }

  useEffect(() => {
    if(glutenfree){
      listItems = listItems.filter(item => item.gluten === "Gluten Free")
    }
    if(vegan){
      console.log("Yes")
      listItems = listItems.filter(item => item.vegan === "Vegan")
    }
    if(sortcondition){
      listItems = listItems.sort((a, b) => {
        return a.price - b.price;
      })
    }
    updateFinal(listItems)
    // console.log(finalItems)
  }, [glutenfree, vegan, sortcondition])

  return (
    <div id = "main">
      <h1 class = "head"><i>CS1300 Bakery</i></h1>
      <div id = "scroll">
      <div id = "options-bar">
        <Button css = {{borderRadius:40}} onClick={resetfunc} shadow color ="primary"><b>RESET</b></Button><br/>
        <Checkbox.Group color="secondary" label="Filter By:">
          <Checkbox value="gluten-free" onChange = {() => clickFilter("Gluten Free")} id = "gtf">Gluten Free</Checkbox>
          <Checkbox value="vegan" onChange = {() => clickFilter("Vegan")} id = "vg">Vegan</Checkbox>
        </Checkbox.Group><br/>
        <Checkbox.Group color="secondary" label="Sort By:">
          <Checkbox value="price-lth" onChange = {() => sorted("pricelth")} id = "price">Price [Low to High]</Checkbox>
        </Checkbox.Group>
      </div>
      <div id = "cart">
        <br/>
        <b>Final Price:</b> ${finalPrice}
        {cartItems.map(function(item){
          return(
            <div>
              <p>{item.name} - ${item.price}</p>
              <Button flat color="primary" css = {{height:40,borderRadius:30}} onClick={() => removeItem(item)}><b>REMOVE</b></Button>
            </div>
          )
        })}
      </div>
      </div>
      <div id = "cards">
        <Grid.Container gap={2}>
          {finalItems.map(function(item) {
            return(
              <Card css={{mw: "400px", marginRight:15, marginBottom:15}}>
              <Card.Image src = {item.url} objectFit="cover"></Card.Image>
              <Card.Body css = {{lineHeight:0.5}}>
                <h2><b>{item.name}</b></h2>
                <p><b>Price:</b> ${item.price}</p>
                <p><i>{item.gluten}</i></p>
                <p><i>{item.vegan}</i></p>
              </Card.Body>
              <Button css = {{height:70, borderRadius:0}} onClick={() => addToCart(item)}>ADD</Button>
              </Card>
            )
          })}
        </Grid.Container>
      </div>
    </div>
  );
}

function App() {

  return (
    <div id = "body">
      <p>{Main()}</p>
    </div>
  );
}

export default App
