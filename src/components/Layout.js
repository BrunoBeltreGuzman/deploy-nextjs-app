import React from "react";
import Nav from "./Nav";
import Partiars from "./Partiars";
import End from "./End";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

/*
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
//NProgress.configure({ easing: "ease", speed: 500 });
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
*/

export default function Layout(props) {
       const router = useRouter();

       useEffect(() => {
              const handleRouteChange = (url) => {
                     console.log(url);
                     NProgress.start();
              };

              router.events.on("routeChangeStart", handleRouteChange);

              router.events.on("routeChangeComplete", () => NProgress.done());

              router.events.on("routeChangeError", () => nProgress.done());

              return () => {
                     router.events.off("routeChangeStart", handleRouteChange);
              };
       }, []);

       return (
              <div>
                     <Partiars></Partiars>
                     <Nav></Nav>
                     <div className="container">
                            <div className="container ">
                                   <div> {props.children}</div>
                            </div>
                     </div>
                     <End></End>
              </div>
       );
}
