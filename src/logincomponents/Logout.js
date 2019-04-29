
export default function Logout (props){

          props.history.push("/login");
          localStorage.removeItem('Authentication');

    return (null);
}
