import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { notificationsAtom, notificationSelector } from './store/atoms/Atoms';
import axios from 'axios';

function App() {

  return (
    <>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  )
}

function Main() {
  const [notification, setNotification] = useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(notificationSelector);

  // the problem in this appraoch is it gives a flash , as previously the values are 0 then it sets to something coming from backend.
  //  Recoil provides a better approach for this thing. 
  /*
  useEffect(() => {
    axios.get("https://mocki.io/v1/eba87e95-9979-45f0-8baa-49826ae84f73")
      .then(res => {
        setNotification(res.data)
      })
  }, [])
  */


  return (
    <>
      <div>
        <button>Home</button>
        <button>My Network ({notification.network})</button>
        <button>jobs ({notification.jobs})</button>
        <button>Messaging ({notification.messaging})</button>
        <button>Notifications ({notification.notifications >= 100 ? "99+" : notification.notifications})</button>

        <button>Me</button>

        <button>Me ({totalNotificationCount})</button>

      </div>
    </>
  )
}
export default App
