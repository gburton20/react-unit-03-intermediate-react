import { useState } from 'react';
import Form from './Form';
import GreetingCard from './GreetingCard';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // Set the state for the App component
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div className="App container">
      <Form onSubmit={handleFormSubmit} />{submittedData && <GreetingCard {...submittedData} />}
    </div>
  )
}

export default App;
