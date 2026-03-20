function DataProvider({ render }) {
  const names = ['Amine', 'Leila', 'Karim', 'Sofia'];
  return <div>{render(names)}</div>;
}

export default DataProvider;