import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './pages/board';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
