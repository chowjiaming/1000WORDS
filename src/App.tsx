import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Footer from './components/Layout/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
