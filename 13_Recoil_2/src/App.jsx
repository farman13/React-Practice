import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalAtomsCountSelector } from './store/atoms/Atoms';

function App() {

  return (
    <>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  )
}

const Main = () => {

  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [networkCount, setnetworkCount] = useRecoilState(networkAtom); // gives both 
  const totalAtomsCount = useRecoilValue(totalAtomsCountSelector);

  function increaseNetworkCount() {
    setnetworkCount(networkCount + 1);
  }

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkCount})</button>
      <button>jobs ({jobsCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notifications ({notificationCount >= 100 ? "99+" : networkCount})</button>

      <button>total Notifications ({totalAtomsCount})</button>
      <button onClick={increaseNetworkCount}>Increase network count</button>


    </div>
  )
}

export default App
