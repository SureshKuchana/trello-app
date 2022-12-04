import './App.css';
import { Card } from './components/Card';
import Column from './components/Column';

function App() {
  return (
    <div
      style={{
        alignItems: 'flex-start',
        backgroundColor: '#3179ba',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        padding: 20,
        width: '100%',
      }}
    >
      <Column text="Todo">
        <Card text="Suresh" />
      </Column>
      <Column text="In-Progress">
        <Card text="Koochana" />
      </Column>
      <Column text="In-QA">
        <Card text="Koochana" />
      </Column>
      <Column text="Done">
        <Card text="Koochana" />
      </Column>
    </div>
  );
}

export default App;
