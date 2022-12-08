import React, { useState } from 'react';
import useFocus from './../utils/useFocus';

type NewFormItemProps = {
  onAdd(text: string): void;
};

const NewFormItem = ({ onAdd }: NewFormItemProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAdd(text);
    }
  };

  return (
    <div
      style={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        width: '100%',
      }}
    >
      <input
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleAddText}
        ref={inputRef}
        value={text}
        style={{
          border: 'none',
          borderRadius: '3px',
          boxShadow: '#091e4240 0px 1px 0px 0px',
          marginBottom: '0.5rem',
          padding: '0.5rem 1rem',
          width: '100%',
        }}
      />
      <button
        style={{
          backgroundColor: '#5aac44',
          border: 'none',
          borderRadius: '3px',
          boxShadow: 'none',
          color: '#fff',
          padding: '6px 12px',
          textAlign: 'center',
        }}
        onClick={() => onAdd(text)}
      >
        Create
      </button>
    </div>
  );
};

export default NewFormItem;
