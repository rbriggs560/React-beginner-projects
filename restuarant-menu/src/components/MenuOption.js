function MenuOption({thisMenu }) {
  const {id, img, price, title, category, desc} = thisMenu;
  return (
    // Create element for list of menue
    <section className="menu-item">
        <img className="photo" src = {img} alt={title}/>
        <div>
          <div className="item-info">
            <h4 className="order-name">{title}</h4>
            <p className="price">{`$${price}`}</p>
          </div>
          <p className="order-description">{desc}</p>
        </div>
    </section>  
  )
}
export default MenuOption;
