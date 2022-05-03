import { useDarkMode } from 'usehooks-ts';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Footer from './components/Layout/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="App" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
