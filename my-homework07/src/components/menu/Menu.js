import { useNavigate } from "react-router-dom";

import classes from "./Menu.module.css"


import{Link,NavLink} from "react-router-dom"


function Menu () {
    const navigate = useNavigate()

return(
    <>
              

    <ul className={classes.menu}>
    <li>
        <NavLink to="/" className={classes.Link}>Главный Меню</NavLink>
    </li>
    <li>
        <NavLink to="/header" className={classes.Link}><b>  Одежда </b></NavLink>
    </li>
    <li>
        <NavLink to="/footer" className={classes.Link}><b>Машына</b></NavLink>
    </li>
    <li>
        <NavLink to="/cars" className={classes.Link}><b>Ноутбук</b></NavLink>
    </li>
</ul>
  <button onClick={() => navigate(-1)}style={{fontSize: '50px'}}>←</button>
  <button onClick={() => navigate(+1)}style={{fontSize: '50px'}}> →</button>
    </>
    
    )
}

export default Menu;