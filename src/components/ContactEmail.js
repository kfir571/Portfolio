import { Container, Row, Col } from "react-bootstrap";
import myAvatar from "../assets/img/myAvatar.png"

export const ContactEmail = () => {
    const emailAddress = "kfir571@gmail.com"
    const handleEmailContact = () => {
        console.log("email sent");
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`, '_blank');

    }

    return(
        <section className="conactEmail" id="conactEmail">
            <h3>
                <img id="avatar-img" src={myAvatar} alt="My Avatar" />  Delighted you've journeyed this far! Now, let's dive into conversation – <a href="#" onClick={handleEmailContact}>Kfir Shabi</a> awaits!
            </h3>
        </section>
    )
}