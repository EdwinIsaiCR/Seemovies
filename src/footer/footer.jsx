import { BsFacebook, BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import './Footer.css'

export default function Footer() {
    
    return (
        <>
        <footer className="footer-distributed">

            <div className="footer-right">

                <a href="#"><i className="fa fa-facebook"><BsFacebook/></i></a>
                <a href="#"><i className="fa fa-twitter"><BsTwitter/></i></a>
                <a href="#"><i className="fa fa-linkedin"><BsLinkedin/></i></a>
                <a href="#"><i className="fa fa-github"><BsGithub/></i></a> 

            </div>

            <div className="footer-left">
                <p>Creado por: Edwin Isai Cruz Ramirez</p>
            </div>

        </footer>
        </>
    );
}