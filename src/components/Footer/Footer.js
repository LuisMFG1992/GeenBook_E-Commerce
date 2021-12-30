import React from "react";
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-facebook-f">
                        </i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-twitter">
                        </i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-google">
                        </i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-instagram">
                        </i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-linkedin-in">
                        </i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-github">
                        </i>
                    </a>
                </section>
                <a className="text-white" href="https://mdbootstrap.com/">©2021 Copyright</a>
            </div>
        </footer>
    )
}

export default Footer