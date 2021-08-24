import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
    return <div className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Basket</span>
        <span className={classes.badge}>4</span>
    </div>
}

export default HeaderCartButton ;