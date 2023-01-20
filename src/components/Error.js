import { Link,useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return(
        <div>
            <h1>OOPS!!! {err.status}</h1>
            <Link to="/" ><h1>Home</h1></Link>
        </div>
    )
}

export default Error;