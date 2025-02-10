import { useState } from "react";
import TriviaForm from "./TriviaForm";
import ResultsCard from "./ResultsCard";
import questions from './questions-dev-mode.json';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // My solution:
  // const [formData, checkFormData] = useState(null);
  
  // const checkAnswers = (formData) => {
  //   checkFormData(formData);
  // };
  // console.log("formData from the checkAnswers form submission function in App.jsx", formData);

  // Colin's solution:
  const [results, setResults] = useState(null);
  const [randomQuestion, setRandomQuestion] = useState(getRandomQuestion(questions));


  function saveResults(formData) {
    // console.log(formData);
    setResults(formData);
  }

  function getNewQuestion() {
    setRandomQuestion(getRandomQuestion(questions));
    setResults(null);
  }

  function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
  
    return questions[randomIndex];
  };

  // George's version:
  // const randomQuestion = getRandomQuestion(questions);
  // // console.log('typeof randomQuestion', typeof randomQuestion);

  return (
    <div className="App container">
      {/* Rendering the TriviaForm component: */}

      {/* My solution: */}
      {/* <TriviaForm question={randomQuestion} onSubmit={checkAnswers} />{formData &&
      <ResultsCard question={formData.question} answer={formData.question.answer} name={formData.name} />} */}

      {/* Colin's solution: */}
      {/* Rendering the TriviaForm component and passing it to two props; question and giveBackToParent: */}
      <TriviaForm question={randomQuestion} giveBackToParent={saveResults} />
      {/* Only show the ResultsCard when there are results: */}
      {results && <ResultsCard question={randomQuestion} name={results.name} answer={results.answer} />}
      {results && <button onClick={getNewQuestion}>New question</button>}
    </div>
  );

}; // End of the App() component

export default App;