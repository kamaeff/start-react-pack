import './header.scss'
import { useTheme } from '../../shared/context/ChangeTheme';
import Switch from '../../shared/ui/SwitchButton';

const Header = () => {
  const { isOn, toggleTheme } = useTheme();

  return (
    <div className='header'>
      <Switch
        isOn={isOn}
        toggleTheme={toggleTheme}
        items={{ start: '🌒', end: '☀️' }}
        style='toggle' /> {/* NOTE: You can change type to radio switch in style prop*/}
    </div>
  );
};

export default Header;
