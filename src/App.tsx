import { Outlet } from 'react-router-dom';
import { Footer, Header, Main } from './components/layout/index.ts';

function App() {

  return (
    <>
      <Header >
      </Header>
      <Main >
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;