import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/*더이상 activeClassName 은 사용되지 않으며, className, style 속성을 사용하면된다*/}
            {/*<NavLink activeClassName={classes.active} to='/welcome'>*/}
            <NavLink className={(navData)= navData.isActive ? classes.active : ''} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink  className={(navData)= navData.isActive ? classes.active : ''} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
