import './App.css';

function App() {

  const temMin = -20;
  const tempMax = 40;
  const heartMin = 80;
  const heartMax = 180;
  const stepsMin = 0;
  const stepsMax = 50000
  return (
    <div className="container-fluid">
      <div className="row">
        <p>Temperature :  {temMin}</p>
        <p>{tempMax}</p>
        <p> Heart :{heartMin}</p>
        <p>{heartMax}</p>
        <p>Steps : {stepsMin}</p>
        <p>{stepsMax}</p>
      </div>
     <h2>Bonjour</h2>
     <h1 className="text-primary"> Hello !</h1>
    </div>
  );
}

export default App;
