import './App.css';
import logo from './ec-basic-logo.png';
import Search from './Search';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={logo} className='App-logo img-fluid' alt='logo' />
        </header>
        <main>
          <Search />
        </main>
        <footer className='App-footer'>
          This project was coded by <a href='#'>Erica Chambers</a> and is{' '}
          <a href='https://github.com/ebc1201/react-dictionary-app'>
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
