import ThemeToggler from '../../ThemeToggler/ThemeToggler';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__heading">1000WORDS</h1>
      <div className="header__container">
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
