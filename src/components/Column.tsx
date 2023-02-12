import { addTask } from './../context/actions';
import { useAppState } from './../context/AppContext';
import AddNewItem from './AddNewItem';
import { Card } from './Card';

type ColumnProps = {
  text: string;
  id: string;
};

const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <div
      style={{
        backgroundColor: '#ebecf0',
        borderRadius: 3,
        flexGrow: 0,
        marginRight: 20,
        minHeight: 40,
        padding: '8px 8px',
        width: 300,
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          padding: '6px 16px 12px',
        }}
      >
        {text}
      </div>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} />
      ))}
      <AddNewItem
        onAdd={(text) => {
          dispatch(addTask(text, id));
        }}
        dark={true}
        toggleButtonText="+ Add another task"
      />
    </div>
  );
};

export default Column;
