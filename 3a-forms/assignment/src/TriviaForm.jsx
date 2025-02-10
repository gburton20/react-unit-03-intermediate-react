import { useState } from "react";

function TriviaForm (props) {
    // Create state for the following form fields, name and answer, via an object, with each of name and answer starting as an empty string:

    // My version:
    // const [ formData, setFormData ] = useState({
    //     name: '',
    //     answer: '',
    // });

    // Colin's solution:
    // Good idea to see what this component is inheriting
    // console.log('props at the start of TriviaForm() function', props);
    // Values for managing the state of answer and name
    const [name, setName] = useState('')
    const [answer, setAnswer] = useState('')

    // Clue into timeout function
    // setTimeout(() => console.log('Hi'), 3000);

    function handleNameChange(event) {
        // Set a rule for long names:
        if (event.target.value.length > 10) {
            setName('');
        } else {
            setName(event.target.value)
        }
    }

    function handleAnswerChange(event) {
        setAnswer(event.target.value);
    }

    // My solution:
    // const handleSubmit =(e) => {
    //     e.preventDefault();
    //     onSubmit(formData);
    // };
    // console.log("formData on submission", formData);

    // Colin's solution:
    function handleSubmit(e) {
        e.preventDefault();
        props.giveBackToParent({
            name: name, 
            answer, answer
        });
    }

    // My solution:
    // const handleChange = (e) => {
    //     //  Get the name and value from e.target, the HTML element that triggered the change event (e.g. <form> and assign it to e.target)
    //     const {
    //         name,
    //         value
    //     } = e.target;
    //     //  Extract from the form data the value of the name field only
    //     setName({
    //         ...formData, [name] : value
    //     })
    //     // console.log("name", name);
    //     setAnswer({
    //         ...formData, [answer] : value
    //     })
    //     // console.log("answer", value);

    // }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Your Name:</label>
                    <input type="text" name="name" value={name} onChange={handleNameChange} className="form-control"/>
                </div>
            </div>
    
            <br></br>

            <div className="form-row">
                <label className="form-group col-md-6">Answer the following question:</label>
                <p className="form-group col-md-6">
                    {props.question.question}
                </p>
            </div>

            <br></br>

            <div>
                <label>Your Answer:</label>
                <input type="text" name="answer" value={answer} onChange={handleAnswerChange} className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

}

export default TriviaForm;