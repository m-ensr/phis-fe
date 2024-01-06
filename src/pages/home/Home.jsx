import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./home.css";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Link to="/hunting">
          <button class="glowing-btn">
            <span class="glowing-txt">
              START<span class="faulty-letter"> PHI</span>SHING
            </span>
          </button>
        </Link>
        <Footer />
      </div>
    </>
  );
}

export default Home;
