function GreetingCard({ recipientName, senderName, message, occasion, includesPersonalNote }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Greeting Card</h5>
                <h6 className="card-subtitle mb-2 text-muted">{occasion}</h6>
                <p className="card-text">{message}</p>
                <footer className="blockquote-footer">
                    From: {senderName} {includesPersonalNote && <small className="d-block mt-2">Personal Note: Have a wonderful day!</small>}
                </footer>
            </div>
        </div>
    );
};

export default GreetingCard;