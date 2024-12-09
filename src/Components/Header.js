import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";
  import React, { useEffect } from "react";
  import { useStateValue } from "./StateProvider";
  
  function Header() {
    const [{ cart }, dispatch] = useStateValue();
  
    useEffect(() => {
      const toggleIcon = document.querySelector(".toggleMenu");
      toggleIcon.addEventListener("click", () => {
        document.querySelector(".rightMenu").classList.toggle("active");
      });
    }, []);
  
    return (
      <header>
        <img
          src=""
          alt=""
          className="logo"
        />
  
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
  
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
            <p>{cart ? cart.length : ""}</p>
          </div>
        </div>
  
        <div className="profileContainer">
          <div className="imgBox">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <h2 className="userName">Vetrivel Ravi</h2>
        </div>
  
        <div className="toggleMenu">
          <BarChart className="toggleIcon" />
        </div>
      </header>
    );
  }
  
  export default Header;
  
