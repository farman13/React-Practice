import { atom, selector } from "recoil";

export const messageAtom = atom({
    key: "messageAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 23
})

export const networkAtom = atom({
    key: "networkAtom",
    default: 215
})

export const totalAtomsCountSelector = selector({
    key: "totalAtomCountSelector",
    get: ({ get }) => {
        const messageCount = get(messageAtom);
        const notificationCount = get(notificationAtom);
        const jobsCount = get(jobsAtom);
        const myNetworkCount = get(networkAtom);

        return (messageCount + notificationCount + jobsCount + myNetworkCount);
    }
})