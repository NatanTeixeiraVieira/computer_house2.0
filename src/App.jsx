import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './routes';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
