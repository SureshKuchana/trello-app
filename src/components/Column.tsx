import AddNewItem from './AddNewItem';

type ColumnProps = {
  text: string;
  children?: React.ReactNode;
};

const Column = ({ text, children }: ColumnProps) => {
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
      {children}
      <AddNewItem
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onAdd={() => {}}
        dark={false}
        toggleButtonText={'Add New Item'}
      />
    </div>
  );
};

export default Column;
