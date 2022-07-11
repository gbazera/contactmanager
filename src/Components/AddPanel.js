function AddPanel(){
    return(
        <div>
            <div className="overlay"></div>
            <div className="panel">
                <div className="top">
                    <p className="title">Add new contact</p>
                    <button className="close">X</button><br></br>
                    <label htmlFor="name-input">Name:</label>
                    <input type="text" name="name-input"/><br></br>
                </div>
            </div>
        </div>
    );
}

export default AddPanel;