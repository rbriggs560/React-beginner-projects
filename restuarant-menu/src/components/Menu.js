import MenuOption from "./MenuOption"
function Menu({ listOfMenus }) {
  return (
    // create a list of option 
    <main className="section-center">
      {
        listOfMenus.map( menus =>{
         return  <MenuOption key = {menus.id} thisMenu ={menus}/>
        })
      }


    </main>
  )
}

export default Menu;
