import { useDarkMode } from 'usehooks-ts';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import './ThemeToggler.css';

const ThemeToggler: React.FC = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <div className="themetoggler" onClick={toggle}>
      <img
        className={`themetoggler__icon ${
          isDarkMode ? 'themetoggler__icon--light' : 'themetoggler__icon--dark'
        }`}
        src={isDarkMode ? sunIcon : moonIcon}
        alt={isDarkMode ? 'Light mode icon' : 'Dark mode icon'}
      />
      <div
        className={`themetoggler__knob ${
          isDarkMode ? 'themetoggler__knob--light' : 'themetoggler__knob--dark'
        }`}
      />
    </div>
  );
};

export default ThemeToggler;
