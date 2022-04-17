import './App.css';
import Header from './Header';
import Nav from './Navigation';
import Sidebar from './Sidebar'
import Content from './Content';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <div className='body'> 
    <Sidebar />
    <Content />
    </div> 
    <Footer />
    </div>
  );
}

export default App;


