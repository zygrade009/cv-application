import Header from "./components/common/Header"
import Footer from "./components/common/Footer";
import Content from "./components/content/Content"
function App() {
  
  return ( 
      <div className="body-container">
        <Header/>
         <Content/>
         <Footer/>
      </div>
  );
}

export default App