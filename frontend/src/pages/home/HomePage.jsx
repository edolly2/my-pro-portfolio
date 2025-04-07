import "./HomePage.css";
import Container from "../../layout/container/Container.jsx";
import PageTitle from "../../layout/title/PageTitle";
import Card from "../../components/card/Card.jsx";
// import HomeInfo from "../components/HomeInfo";

const HomePage = () => {
  return (
    <Container>
      <PageTitle title="Eric Dollinger" />
      <div className="home-page-wrapper">
        <Card className="card" />
        {/* <HomeInfo className="home-info" /> */}
      </div>
    </Container>
  );
};

export default HomePage;
