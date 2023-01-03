import { RecoilRoot } from 'recoil';
import KanbanBoard from './pages/KanbanBoard';

const App = () => {
  return (
    <RecoilRoot>
      <KanbanBoard />
    </RecoilRoot>
  );
};

export default App;
