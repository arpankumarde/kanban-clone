import { Sidebar, Header, Project } from './components'

function App() {
  return (
    <div className='flex w-full'>
      <section className='w-[50px] sm:min-w-[250px] xl:min-w-[280px]'>
        <Sidebar />
      </section>
      <section className='flex flex-col w-full border-l border-l-grey-light-1'>
        <Header />
        <Project />
      </section>
    </div>
  );
}

export default App;
