import './App.css';
import menuData from './MenuData';
import Menu from './components/Menu';
import { useState, useEffect } from "react";

function App() {
  const [option, setOption] = useState("all");
  const [data, setData] = useState(menuData);
  const [itemButton] = useState(["All","Breakfast","Lunch","Shakes"]);

function changeMenu(string){
    let newDataAdded = [];
    //  eslint-disable-next-line
    menuData.filter(function (menuSelected){
      if(string === "all"){
        newDataAdded = menuData ;
      }else if(menuSelected.category === string){
        newDataAdded.push(menuSelected);

      }    
    })
    return newDataAdded;
}

useEffect(()=> {
  let testing = changeMenu(option);
  setData(testing)

}, [option]);
  
  return (
    <main className="menu section">
      <section className='section'>
        <h1 className='title'>Our Daily Menu</h1>
        <div className='underline'></div>
      </section>

      <section className='btn-container'>
        {
          itemButton.map(button => {
            return <button onClick={() => setOption(button.toLowerCase()) } className='filter-btn' key = { button.toLowerCase() }> { button } </button>

          })
        }

      </section>
      <Menu listOfMenus = { data } />
    </main>
  );
}

export default App;
