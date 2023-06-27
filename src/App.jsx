import { useState } from 'react';
import { Sidebar, Header, Project } from './components';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className='w-full scrollbar-hide'>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <section className='flex w-full border-l border-l-grey-light-1'>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Project />
      </section>
    </div>
  );
}

export default App;
