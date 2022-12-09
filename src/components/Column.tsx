import { useAppState } from './../context/AppContext';
import AddNewItem from './AddNewItem';
import { Card } from './Card';

type ColumnProps = {
  text: string;
  index: number;
};

const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();
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
      {state.lists[index].tasks.map((task) => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem
        // eslint-disable-next-line no-console
        onAdd={console.log}
        dark={true}
        toggleButtonText="+ Add another task"
      />
    </div>
  );
};

export default Column;
