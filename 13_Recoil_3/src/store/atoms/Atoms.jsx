import { atom, selector } from 'recoil';
import axios from 'axios';
export const notificationsAtom = atom({
    key: "notificationsatom",
    default: selector({
        key: "notificselector",
        get: async () => {
            //   await new Promise(r => setTimeout(r, 5000)); // this will show what comes before rendering the data on screen(there is a white blank screen).( this code will screen sleep for 5s).
            const res = await axios.get("https://mocki.io/v1/de5337d2-f79e-4fcb-9cc7-81c86ec9e605");
            return res.data;
        }
    })
})

export const notificationSelector = selector({
    key: "notificationselector",
    get: ({ get }) => {
        const notificationCount = get(notificationsAtom);
        console.log(notificationCount);
        const total = notificationCount.jobs + notificationCount.messaging + notificationCount.network + notificationCount.notifications;
        return total;
    }
})