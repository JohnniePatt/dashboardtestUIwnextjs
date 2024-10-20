import Image from "next/image";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Logo from '../../public/Logo_no shadow.png'
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">NextJS Dashboard</h3>
          <p>Become full-stack developer with NextJS</p>
          <div className="flex justify-center my-10">
            <Image src={Logo} width={300} height={0} alt="My logo"></Image>
          </div>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
