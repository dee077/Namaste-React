import { useRouteError } from "react-router-dom";

const Error = () => {
  
  const err = useRouteError()

  return (
    <div>
      <h1>{err.status} : {err.statusText}</h1>
      <h3>Oops Something Went Wrong</h3>
      <h5>{err.data}</h5>
      {console.log(err)}
    </div>
  )
}

export default Error;
