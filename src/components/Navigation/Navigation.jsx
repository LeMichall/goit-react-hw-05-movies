import { NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './Navigation.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <div className={css.navBox}>
      <div className={css.navLinks}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          Movies
        </NavLink>
      </div>
      {/* <div> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* </div> */}
    </div>
  );
};
