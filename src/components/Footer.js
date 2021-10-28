import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer style={{ background: "rgb(8,11,15)" }}>
      <div className="container">
        <div className="row justify-content-center py-2">
         
          <div className="col-sm-12 text-center " >
            {SidebarData.map((item, index) => {
              return (
                <span key={index} >
                    <Link to={item.path} style={{textDecoration:'none'}}>
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.6)",
                        }}
                      className="mx-2">
                        {item.title}
                      </span>
                    </Link>
                  </span>
              );
            })}

            <br />
            <br />
            <a
              href="https://www.linkedin.com/in/emiliano-cassoni/"
             
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} className="icon"/>
            </a>
            <a
              href="https://github.com/emicasso"
            
            >
              <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }}  className="icon"/>
            </a>
            <a
              href="https://www.instagram.com/emicassoni/"
             
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }} className="icon"
              />
            </a>
            <br />
            <br />
            <p>2021 Copyright © CE [Dev] Cassoni Emiliano </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
