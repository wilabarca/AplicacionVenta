import Layout from "../Components/Atomos/Layout/Layout";
import Card from "../Components/Moleculas/Card/Card";
import Footer from "../Components/Organismos/Footer/Footer";
import Header from "../Components/Organismos/Header/Header";
import Navar from "../Components/Organismos/Navar/Navar";

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Navar></Navar>
         <Layout></Layout>
         <Card
            src="https://scontent.ftgz1-2.fna.fbcdn.net/v/t39.30808-6/280499320_374365174739573_2727718970869304227_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyZnKh544Qbpka_QzsC-rtbKLM35a9kclsoszflr2RyU91m-WSSWmxnPBLsVJ7yEmMHxVGEfUuXC5PKp5LbKaa&_nc_ohc=jdpPc9xh0EAQ7kNvgHXQYlu&_nc_ht=scontent.ftgz1-2.fna&oh=00_AYD54smNeC3IqZtYYldLIMbNVs96--Bwr5DOgqBPtnz7Eg&oe=668C5428"
            name="Saco Bordado"
            precio="567"
         ></Card>
         <Footer></Footer>
      </div>
   );
};

export default Home;
