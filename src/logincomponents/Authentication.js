const token = JSON.parse(localStorage.getItem('Authentication'));

export function isAuthenticated(){
     return localStorage.getItem('Authentication') !== null;
}

export function id(){
    return token == null ? "":token.id;
}

export function name(){
    return token == null ? "":token.name;
}
