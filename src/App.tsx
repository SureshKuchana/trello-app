import './App.css';
import AddNewItem from './components/AddNewItem';
import Column from './components/Column';
import { useAppState } from './context/AppContext';

export function App() {
  const { state } = useAppState();
  if (Object.keys(state).length === 0) {
    return <p>no tasks currently</p>;
  }

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
      {state.lists.map((list, i) => {
        return <Column text={list.text} key={list.id} index={i} />;
      })}
      <AddNewItem toggleButtonText="+Add another list" onAdd={console.log} />
    </div>
  );
}
