import Card from "../Components/Moleculas/Card/Card";
import Header from "../Components/Organismos/Header/Header";
import Navar from "../Components/Organismos/Navar/Navar";

const Adress = () =>{
    return(
        <div>
            <Header></Header>
            <Navar></Navar>
            <Card
            src="https://scontent.ftgz1-2.fna.fbcdn.net/v/t39.30808-6/268797447_283457277163697_4154242140656638199_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9oY-wIvsSS6XWHZtUMt0u2g0W_IvveZ3aDRb8i-95nblI8z__0aVQ6gFyrsIixybOliFbPeCAU6MJ9-D7Pj-9&_nc_ohc=Ne6kOPSEAJgQ7kNvgGS74T1&_nc_ht=scontent.ftgz1-2.fna&oh=00_AYAZZNS605ZZfymAdFIEW9VPw0J6LuS_-SPKeK1XZyBx_w&oe=668C3951"
            name="Blusa Doble Borde"
            precio="300">
           </Card>
        </div>
    )}

    export default Adress;