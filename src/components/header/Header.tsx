import './header.scss'
import { useTheme } from '../../shared/context/ChangeTheme';
import Switch from '../../shared/ui/SwitchButton';
import { User2 } from 'lucide-react';

const Header = () => {
  const { isOn, toggleTheme } = useTheme();

  return (
    <div className='header'>

      <div className="header__container">
        <User2 size={20} className='header__container--icon' />

        <p className="header__container--text">
          #React App
        </p>
      </div>

      <Switch
        isOn={isOn}
        toggleTheme={toggleTheme}
        items={{ start: '🌒', end: '☀️' }}
        style='toggle' /> {/* NOTE: You can change type to radio switch in style prop*/}

    </div>
  );
};

export default Header;
