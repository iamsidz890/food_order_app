import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Sid's Restaurant</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt='Indian food'/>
      </div>
    </>
  );
};

export default Header ;
