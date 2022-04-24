import './App.css';
import Header from './Header.js'
import ProductList from './ProductList.js'
import Trend from './LastestTrend.js'
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
      <Trend/>
      <Footer/> 
    </div>
  );
}

export default App;
