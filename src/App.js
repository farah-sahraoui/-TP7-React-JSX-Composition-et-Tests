import JSXDemo from './JSXDemo';
import SubmitButtonWithTracker from './SubmitButtonWithTracker';
import DataProvider from './DataProvider';
import ClickCounter from './ClickCounter';

function App() {
  const handleSubmit = () => {
    alert('Formulaire envoyé (simulation)');
  };

  return (
    <div>
      <h1>Mon Apprentissage React</h1>
      <JSXDemo />
      <hr />
      <h2>Composant avec suivi (HOC)</h2>
      <SubmitButtonWithTracker text="Envoyer le formulaire" onClick={handleSubmit} />
      <hr />
      <h2>Liste d'utilisateurs (Render Props)</h2>
      <DataProvider
        render={(names) => (
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      />
      <hr />
      <h2>Compteur de clics (avec test)</h2>
      <ClickCounter />
    </div>
  );
}

export default App;
