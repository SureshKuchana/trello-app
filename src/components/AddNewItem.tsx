import { useState } from 'react';
import NewFormItem from './NewFormItem';

type AddNewItemProps = {
  toggleButtonText: string;
  onAdd(text: string): void;
  dark?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddNewItem = ({ toggleButtonText, onAdd, dark }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  if (showForm) {
    return (
      <NewFormItem
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <button
      onClick={() => setShowForm(true)}
      style={{
        backgroundColor: '#ffffff3d',
        border: 'none',
        borderRadius: 3,
        color: dark ? '#000' : '#fff',
        cursor: 'pointer',
        maxWidth: 300,
        padding: '10px 12px',
        textAlign: 'left',
        transition: 'background 85ms ease-in',
        width: '100%',
      }}
    >
      {toggleButtonText}
    </button>
  );
};

export default AddNewItem;
