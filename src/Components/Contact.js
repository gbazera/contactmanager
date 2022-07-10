function Contact(){
    return(
        <div className="contact">
            <div>
                <p className="name">Person's Name</p>
                <p className="msg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto suscipit 
                    ex est fugiate ligendi facilis laboriosam, sed rem rerum eveniet minus,
                    odio, quibusdam ullam obcaecati optio libero beatae molestiae?
                </p>
                <div className="bot">
                    <a>person.name@email.com</a>
                    <a>+00-000-000</a>
                    <a>USA, New York</a>
                </div>
            </div>
            <div className="btns">
                <button className="btn scnd">EDIT</button>
                <button className="btn scnd del">DELETE</button>
            </div>
        </div>
    );
}

export default Contact;