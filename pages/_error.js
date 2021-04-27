import React from "react";
import Layout from "../src/components/Layout";
import Link from "next/link";

export default function error({ statusCode }) {
       return (
              <Layout>
                     <div className="row p-5">
                            <div className="col-md-10 m-auto text-center">
                                   <h1>Error</h1>
                                   <p className="text-center">
                                          {statusCode
                                                 ? `Could not load your user data: Status code ${statusCode}`
                                                 : "Coud not get that page, sorry."}
                                   </p>
                                   <br />
                                   <Link href="/">
                                          <a>Home</a>
                                   </Link>
                            </div>
                     </div>
              </Layout>
       );
}
