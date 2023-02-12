type CardProps = {
  id: string;
  text: string;
};

export const Card = ({ text }: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: 3,
        boxShadow: '#091e4240 0px 1px 0px 0px',
        cursor: 'pointer',
        marginBottom: '0.5rem',
        maxWidth: 300,
        padding: '0.5rem 1rem',
      }}
    >
      {text}
    </div>
  );
};
