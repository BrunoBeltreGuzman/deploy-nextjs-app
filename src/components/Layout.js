import React from "react";
import Nav from "./Nav";
import Partiars from "./Partiars";
import End from "./End";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//NProgress.configure({ easing: "ease", speed: 500 });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function Layout(props) {
       return (
              <div>
                     <Partiars></Partiars>
                     <div className="container">
                            <div className="container">
                                   <Nav></Nav>
                                   <div> {props.children}</div>
                            </div>
                     </div>
                     <End></End>
              </div>
       );
}
