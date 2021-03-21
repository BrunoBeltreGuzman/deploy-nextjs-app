import React from "react";

function UserId(props) {
       console.log("UserId");
       if (props.data) {
              return (
                     <div className="row p-5">
                            <div className="col-md-10 m-auto text-center">
                                   <h1>ID:</h1>
                                   <h1 className="display-1">{props.id}</h1>
                                   <hr />
                                   <pre>
                                          <p>{JSON.stringify(props.data)}</p>
                                   </pre>
                            </div>
                     </div>
              );
       }
}

/*
       Funciona!!!
       Solo se renderiza cuando los props cambia...
*/
export default React.memo(UserId);
