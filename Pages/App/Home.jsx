import Footer from "../../Components/App/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
        <h1>Lupine Art Academy</h1>
      <h3>Welcome to Lupine Art Academy</h3>

      <p>Our Motto:
        Art🖼️ never loses its colour🎨, if you love❤️ it
      </p>

      <div id="about">
        <Link to="/about">Learn More</Link>
      </div>

      <div id="login">
        <Link to="/login">
        <button>Login</button>
        </Link>
      </div>

      <div id="register">
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Home;
