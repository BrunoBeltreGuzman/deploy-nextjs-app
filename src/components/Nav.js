import React from "react";
import Link from "next/link";

export default function Nav() {
       return (
              <div>
                     <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                   <Link href="/">
                                          <a className="navbar-brand">
                                                 <img
                                                        src="/favicon.png"
                                                        alt="Image"
                                                        width="25 px"
                                                        height="25 px"
                                                 />{" "}
                                                 Nextjs
                                          </a>
                                   </Link>
                                   <button
                                          className="navbar-toggler"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#navbarSupportedContent"
                                          aria-controls="navbarSupportedContent"
                                          aria-expanded="false"
                                          aria-label="Toggle navigation"
                                   >
                                          <span className="navbar-toggler-icon"></span>
                                   </button>
                                   <div
                                          className="collapse navbar-collapse"
                                          id="navbarSupportedContent"
                                   >
                                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                 <li className="nav-item">
                                                        <Link href="/">
                                                               <a className="nav-link">
                                                                      Index
                                                               </a>
                                                        </Link>
                                                 </li>
                                                 <li className="nav-item">
                                                        <Link href="/home">
                                                               <a className="nav-link">
                                                                      Home
                                                               </a>
                                                        </Link>
                                                 </li>
                                                 <li className="nav-item">
                                                        <Link href="/getFetch">
                                                               <a className="nav-link">
                                                                      Fetch
                                                               </a>
                                                        </Link>
                                                 </li>
                                                 <li className="nav-item">
                                                        <Link href="/getFetch2">
                                                               <a className="nav-link">
                                                                      Fetch2
                                                               </a>
                                                        </Link>
                                                 </li>
                                                 <li className="nav-item">
                                                        <Link href="/getFetch3/1">
                                                               <a className="nav-link">
                                                                      Fetch3
                                                               </a>
                                                        </Link>
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </nav>
              </div>
       );
}
