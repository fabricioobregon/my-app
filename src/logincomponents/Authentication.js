const token = JSON.parse(localStorage.getItem('Authentication'));

export function isAuthenticated(){
     return localStorage.getItem('Authentication') !== null;
}

export function userId(){
    return token == null ? "":token.id;
}

export function userName(){
    return token == null ? "":token.name;
}
