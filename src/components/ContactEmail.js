import myAvatar from "../assets/img/myAvatar.png"

export const ContactEmail = () => {
    const emailAddress = "kfir571@gmail.com"

    return(
        <section className="conactEmail" id="conactEmail">
            <h3>
                <img id="avatar-img" src={myAvatar} alt="My Avatar" />  Delighted you've journeyed this far! Now, let's dive into conversation – <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`} target="_blank" rel="noreferrer" >Kfir Shabi</a> awaits!
            </h3>
        </section>
    )
}