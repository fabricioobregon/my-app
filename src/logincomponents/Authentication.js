let token;

export function isAuthenticated(){
     return localStorage.getItem('Authentication') !== null;
}

export function userId(){
    token = JSON.parse(localStorage.getItem('Authentication'));
    JSON.parse(localStorage.getItem('Authentication'));
    return token == null ? "":token.id;
}

export function userName(){
    token = JSON.parse(localStorage.getItem('Authentication'));
    return token == null ? "":token.name;
}
