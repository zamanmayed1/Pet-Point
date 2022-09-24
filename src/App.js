import Footer from "./Components/Footer";
import HomeCard from "./Components/HomeCard";

function App() {
  return (
    <div className="w-full h-[100vh]  ">
      <div className="w-full h-[450px] bg-cover bg-[url('https://i.ibb.co/wdkNx9D/bg.jpg')] bg-no-repeat">
     
      <div className="mx-auto">
        <div className="w-56  mx-auto mb-2 ">
          <img className="w-4/4" src="https://i.ibb.co/zrSy97C/logo.png" alt="" />
        </div>
        <div className="p-2">
          <HomeCard />
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
