import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-whiteSmoke h-full w-full">
      <div
        className="absolute w-20 h-20 bg-yellow opacity-30 blur-2xl rounded-full"
        style={{ top: '10%' }}
      />
      <div
        className="absolute bg-purple opacity-30 blur-2xl rounded-full"
        style={{ top: '5%', right: '10%', width: '10rem', height: '10rem' }}
      />

      <div
        className="absolute bg-green opacity-20 blur-2xl rounded-full"
        style={{ top: '40%', right: '35%', width: '10rem', height: '10rem' }}
      />
      {children}
    </main>
  );
};

export default Layout;
