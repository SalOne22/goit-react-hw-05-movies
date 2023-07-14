import { TailSpin } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <TailSpin
      color="rgb(94 234 212)"
      wrapperClass="bg-gray-900/25 fixed w-full h-full flex items-center justify-center"
    />
  );
};
