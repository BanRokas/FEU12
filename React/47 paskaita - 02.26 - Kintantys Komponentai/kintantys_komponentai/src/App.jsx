import './App.css';
import Headings from './components/Headings';

const App = () => {

  const data = ['Labas rytas', 'Pietų metas','Geros dienos','Labanaktis'];

  return (
    <>
      <Headings
        stuff={data}
      />
    </>
  );
}

export default App;