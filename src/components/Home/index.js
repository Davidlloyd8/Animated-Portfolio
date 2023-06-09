import { Link } from "react-router-dom"
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm David
                {/* <img src={} alt="developer" /> */}
                <br />
                web developer
                </h1>
                <h2>Frontend Developer / Backend Developer / PHP Expert</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home