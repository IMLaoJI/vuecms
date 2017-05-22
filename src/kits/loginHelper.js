const KEY = 'LOGIN';

export function getUserId(KEY){
    
    return localStorage.getItem(KEY)
}

export function setUserId(userid){
    sessionStorage.setItem(KEY,userid)
}