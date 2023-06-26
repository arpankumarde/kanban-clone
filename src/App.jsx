import { useState } from 'react';
import { Sidebar, Header, Project } from './components';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className='flex w-full'>
      <aside className='w-[50px] sm:min-w-[250px] xl:min-w-[280px]'>
        <Sidebar />
      </aside>
      <section className='flex flex-col w-full border-l border-l-grey-light-1'>
        <Header />
        <Project />
      </section>
    </div>
  );
}

export default App;
