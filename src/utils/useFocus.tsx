import { useEffect, useRef } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current?.focus() !== null) {
      ref.current?.focus();
    }
  }, []);

  return ref;
};

export default useFocus;
