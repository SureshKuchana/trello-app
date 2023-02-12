import './App.css';
import AddNewItem from './components/AddNewItem';
import Column from './components/Column';
import { addList } from './context/actions';
import { useAppState } from './context/AppContext';

export function App() {
  const { lists, dispatch } = useAppState();
  if (Object.keys(lists).length === 0) {
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
      {lists.map((list) => {
        return <Column text={list.text} key={list.id} id={list.id} />;
      })}
      <AddNewItem
        toggleButtonText="+Add another list"
        onAdd={(text) => {
          dispatch(addList(text));
        }}
      />
    </div>
  );
}
