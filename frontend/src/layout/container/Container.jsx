import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Container;
