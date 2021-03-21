import React, { useState, useEffect } from "react";
import Layout from "../src/components/Layout";

export default function getFetch() {
       const [data, setData] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState([]);

       useEffect(async () => {
              try {
                     setLoading(true);
                     const response = await fetch(
                            "https://jsonplaceholder.typicode.com/posts"
                     );
                     const data = await response.json();
                     console.log(data);
                     setData(data);
                     setLoading(false);
              } catch (error) {
                     console.log(error);
                     setLoading(false);
                     setError(error);
              }
       }, []);

       if (loading) {
              return (
                     <Layout>
                            <div className="row p-5">
                                   <div className="col-md-10 m-auto text-center">
                                          <h1>Loading...</h1>
                                   </div>
                            </div>
                     </Layout>
              );
       }

       if (data) {
              return (
                     <Layout>
                            <div className="row p-5">
                                   <div className="col-md-10 m-auto text-center">
                                          <h1>Data!</h1>
                                          {data.map(function (json, index) {
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

       if (error) {
              return (
                     <Layout>
                            <div className="row p-5">
                                   <div className="col-md-10 m-auto text-center">
                                          <h1>Error</h1>
                                          <pre>{JSON.stringify(error)}</pre>
                                   </div>
                            </div>
                     </Layout>
              );
       }
}
