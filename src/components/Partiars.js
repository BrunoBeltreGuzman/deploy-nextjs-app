import React from "react";
import Head from "next/head";

export default function Partiars() {
       return (
              <Head>
                     {/*Bootstrap 5*/}

                     <link
                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                            rel="stylesheet"
                            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                            crossorigin="anonymous"
                     ></link>

                     {/*Google Font*/}
                     <link rel="preconnect" href="https://fonts.gstatic.com" />
                     <link
                            href="https://fonts.googleapis.com/css2? family = Hind + Siliguri & display = swap"
                            rel="hoja de estilo"
                     ></link>

                     <title>Nextjs</title>

                     <meta
                            name="Bobo"
                            description="Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Adipisci, consequatur ex
                                   expedita quidem eaque sed. Sit eum officia
                                   repudiandae? Animi eaque laboriosam excepturi
                                   nobis, mollitia obcaecati magni similique
                                   facere modi."
                     />

                     <link rel="icon" href="/favicon.png" />
              </Head>
       );
}
