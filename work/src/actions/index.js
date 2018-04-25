export const SET_LOGIN = 'SET_LOGIN';
export const REMOVE_LOGIN = 'REMOVE_LOGIN';
export const SET_ERROR = 'SET_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export function login(login) {
    return {
        type: SET_LOGIN,
        login
    }
};

export function loginout() {
    return {
        type: REMOVE_LOGIN
    }
}

export function error(error) {
    return {
        type: SET_ERROR,
        error
    }
};

export function removeerror() {
    return {
        type: REMOVE_ERROR
    }
}
