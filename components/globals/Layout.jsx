import Header from './Header';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='max-w-screen-2xl	 mx-auto sm:px-6 lg:px-8 bg-slate-50 m-2 p-2'>
        {children}
      </main>
     
    </>
  );
};

export default Layout;
