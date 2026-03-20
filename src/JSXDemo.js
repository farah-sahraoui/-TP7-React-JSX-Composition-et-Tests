function JSXDemo() {
  const elementJSX = <h2 className="highlight">Bienvenue avec JSX</h2>;

  return (
    <div>
      {elementJSX}
      <label htmlFor="userInput">Votre prénom :</label>
      <input id="userInput" placeholder="Ex: Marie" />
    </div>
  );
}

export default JSXDemo;