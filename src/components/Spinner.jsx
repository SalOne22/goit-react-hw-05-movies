import { TailSpin } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <TailSpin
      color="rgb(94 234 212)"
      wrapperClass="bg-gray-900/25 fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center"
    />
  );
};
