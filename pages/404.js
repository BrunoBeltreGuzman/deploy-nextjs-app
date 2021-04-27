import React from "react";
import Layout from "../src/components/Layout";
import Link from "next/link";

export default function custom404() {
       return (
              <Layout>
                     <div className="row p-5">
                            <div className="col-md-10 m-auto text-center">
                                   <h1>404</h1>
                                   <p>
                                          Lorem, ipsum dolor sit amet
                                          consectetur adipisicing elit. Dolore
                                          quidem ipsa, delectus eveniet quisquam
                                          distinctio, modi placeat perspiciatis
                                          iure, voluptatibus consectetur
                                          molestias reprehenderit? Natus odit
                                          earum accusamus. Voluptatem, molestiae
                                          velit?
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
