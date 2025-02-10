function ResultsCard(props) {

    // if(question.answer === question.answer) {
    //     <p>Correct!</p>
    // } else {
    //     <p>Incorrect!</p>
    // };

    const isCorrectMessage = props.question.answer === props.answer
        ? "Well done!"
        : "Bad luck, try again"

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {props.question.question}
                </h5>
                <br></br>
                {/* The name of the person who submitted the form: */}
                <h6 className="card-subtitle">
                    {props.name}'s results:
                </h6>
                <br></br>
                {/* The answer: */}
                <h6 className="card-text">
                    The correct answer: {props.question.answer}
                </h6>
                <br></br>
                {/* The user's answer: */}
                <h6 className="card-text">
                    Your answer: {props.answer}
                </h6>
                <br></br>
                {/* The question object that was randomly selected: */}
                <h6 className="blockquote-footer">
                    {props.question.question}
                </h6>
                <h6 className="card-text">
                    {isCorrectMessage}
                </h6>
                <button></button>

            </div>
        </div>
    )
}

export default ResultsCard;