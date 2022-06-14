import keys from "utils/constants/keys";


const AuthStorage = {
    get: () => localStorage.getItem(keys.AUTH),
    set: (token: string) => localStorage.setItem(keys.AUTH, token),
    remove: () => localStorage.removeItem(keys.AUTH)
}

export {
    AuthStorage
}