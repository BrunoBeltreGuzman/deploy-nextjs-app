import React, { useState, useEffect } from "react";
import Layout from "../src/components/Layout";

import fetch from "isomorphic-fetch";
/*
       Usando isomorphic-fetch
       isomorphic-fetch Build Status
       Fetch for node and Browserify.
*/

export default function getFetch2(props) {
       console.log(props.data);
       if (props.data) {
              return (
                     <Layout>
                            <div className="row p-5">
                                   <div className="col-md-10 m-auto text-center">
                                          <h1>Data!</h1>
                                          {props.data.map(function (
                                                 json,
                                                 index
                                          ) {
                                                 return (
                                                        <pre key={index}>
                                                               <p>
                                                                      {JSON.stringify(
                                                                             json
                                                                      )}
                                                               </p>
                                                        </pre>
                                                 );
                                          })}
                                   </div>
                            </div>
                     </Layout>
              );
       }
}

getFetch2.getInitialProps = async function (context) {
       try {
              const response = await fetch(
                     "https://jsonplaceholder.typicode.com/posts"
              );
              const data = await response.json();
              console.log(data);
              return { data: data };
       } catch (error) {
              console.log(error);
              return {};
       }
};
