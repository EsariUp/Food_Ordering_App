import {Fragment} from "react";
import classes from "./Header.module.css";
import mainHeaderImage from "../../assests/headerBanner.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return(
<div>
    <Fragment>
        <header className={classes.header}>
        <h1>Food Ordering App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>
            <img src={mainHeaderImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
</div>
    );

    
};
export default Header;