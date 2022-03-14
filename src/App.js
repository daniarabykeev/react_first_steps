import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


function App() {
  let arr=["Sasha","Petya","Vasya","Leha"];
  const getName = (data) => {
    console.log(data);
  }
  return (
    <>
    <Navbar/>
    <Section arr={arr} getName={getName}/>
    <Footer/>
    </>
  );
}

export default App;
