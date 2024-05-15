import Hero from "./hero"
import NavBar from "./navbar"
import Content from "./content"
import Aboutme from "./aboutme"
import Porfolio from "./porfolio"
import Workwithme from "./workwithme"
import Footer from "./footer"
const Main = () => {

    return (
        //Main
        <div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="">
                <Hero/>
            </div>
          <div>
            <Content/>
          </div>
          <div>
            <Aboutme/>
          </div>
          <div>
            <Porfolio/>
          </div>
          <div>
            <Workwithme/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
    )
}
export default Main