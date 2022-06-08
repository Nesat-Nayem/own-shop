
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import WorkFlow from './Components/WorkFlow/WorkFlow';
import PopularServices from './Components/PopularServices/PopularServices';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <WorkFlow></WorkFlow>
   <Footer></Footer> 
    </div>
  );
}

export default App;
