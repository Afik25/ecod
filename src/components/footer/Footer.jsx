import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ASSETS from "../../utils/Assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="up">
          <div className="item">
            <Link to={"/"} className="link">
              <img src={ASSETS?.logo} alt="logo-main" className="logo" />
            </Link>
            <p className="title t-3">+24381 171 73 77</p>
            <p className="title t-3">infos@ista-ecod.com</p>
            <p className="title t-3">
              ISTA - ECOLE DOCTORALE
              <br />
              A314, Av. des Aedromes, C. Barumbu
              <br />
              BP 785 Kinshasa - RDC
            </p>
          </div>
          <div className="item">
            <h3 className="title t-2">Liens utiles</h3>
            <Link to={""} className="title t-3">
              Foire aux Questions
            </Link>
            <Link to={""} className="title t-3">
              Présidence
            </Link>
            <Link to={""} className="title t-3">
              Primature RDC
            </Link>
            <Link to={""} className="title t-3">
              Ministère de l'Enseignement Supérieur
            </Link>
            <Link to={""} className="title t-3">
              Institut Supérieur des Techniques Appliquées (ISTA)
            </Link>
          </div>
          <div className="item">
            <h3 className="title t-2">Contact</h3>
            <Link to={""} className="title t-3">
              A propos de nous
            </Link>
            <Link to={""} className="title t-3">
              Politiques de confidentialité
            </Link>
            <Link to={""} className="title t-3">
              Conditions d'utilisation des services
            </Link>
          </div>
          <div className="item">
            <h3 className="title t-2">Suivez-nous!</h3>
            <p className="title t-3">Facebook</p>
            <p className="title t-3">Twitter</p>
          </div>
        </div>
        <div className="down">
          <span>
            &copy; {new Date().getFullYear()} Institut Superieur des Techniques
            Appliqués (ISTA) - École Doctorale, Tous droits reservés.
          </span>
          <Link to="https://afoundation.tech/" className="link" target="_blank">
            Développé par Afik Foundation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
