
import Button from './Button';
import Header from './Header';

import {useTheme} from '../Context/ThemeContext';
import Profile from './Profile';


function Container() {
    const {theme} = useTheme();
  return (
    <div className={`App ${theme === 'dark' ? theme : ''}`}>
        <Header/>
        <hr />
        <Button/>
        <hr />
        <Profile/>
    </div>
  )
}

export default Container