import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './routes';
import Login from './pages/Login/index';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
      <Login />
    </>
  );
}

export default App;
