import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
//
import {
  FcElectronics,
  MdOutlineComputer,
  MdOutlineAirplanemodeActive,
  PiClockCountdownFill,
  MdMenuBook,
  MdOutlineWbSunny,
  GiTeacher,
  PiStudentBold,
} from "../../middlewares/icons";
import ASSETS from "../../utils/Assets";
import { Link } from "react-router-dom";
//

const Home = () => {
  const [fix, setFix] = useState(false);
  //
  const scrollDemoRef = useRef(null);

  const fixedOnscroll = () => {
    if (scrollDemoRef.current) {
      const { scrollTop } = scrollDemoRef.current;
      if (scrollTop >= 1000) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Accueil Mariathe : Boulangerie Artisanale - Pain Frais et Pâtisseries
        </title>
        <meta
          name="description"
          content="Une boulangerie avec une approche artisanale locale"
        />
        <meta
          name="keywords"
          content="bread, pain, cake, gateau, boulangerie, patisserie, cène, hosties, croissant"
        />
      </Helmet>
      <div className="home" ref={scrollDemoRef} onScroll={fixedOnscroll}>
        <Header fix={fix} />
        <div className="banner">
          <div
            className="inner"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <img
              src={ASSETS.banner_background}
              alt="École Doctorale de l'Institut Superieur des Techniques
            Appliqués (ISTA)"
            />
          </div>
          <div className="outer" data-aos="fade-up">
            <h1 className="title t-1">La formation doctorale,</h1>
            <p className="title t-3">
              Chaque cours et travail scientifique est une conception adaptative
              de qualité relatif à la science et représenatnt une proposition ou solution adequate aux problèmes rèels de la
              société.
            </p>
            <h2
              className="title t-2"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              Bienvenue à<br />
              L'École Doctorale de l'ISTA!
            </h2>
          </div>
        </div>
        <div className="ruban">
          <div className="container">
            <img
              src={ASSETS?.primature}
              alt="La Primature de la République Démocratique du Congo"
            />
            <img
              src={ASSETS?.presidence}
              alt="La Présidence de la République Démocratique du Congo"
            />
            <img
              src={ASSETS?.ministere}
              alt="Le Ministère de l'Enseignement Superieur et Universitaire de la République Démocratique du Congo"
            />
          </div>
        </div>
        <div className="offers">
          <div className="container">
            <div className="head">
              <h1 className="title t-1">
                Des cours à fort impact pour passer au niveau supérieur
              </h1>
              <p className="title t-3">
                École Doctorale de l'ISTA est une école de formation doctorale
                avec plus de 10 ans d'expérience dans la formation des cadres de
                haut niveau.
              </p>
            </div>
            <div className="content">
              <div className="item">
                <FcElectronics className="icon" />
                <h2 className="title t-2">Electronique</h2>
                <p className="title t-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="item">
                <MdOutlineComputer className="icon" />
                <h2 className="title t-2">Informatique</h2>
                <p className="title t-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="item">
                <MdOutlineAirplanemodeActive className="icon" />
                <h2 className="title t-2">Aviation</h2>
                <p className="title t-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news">
          <div className="container">
            <h1 className="title t-1">Actualités</h1>
            <div className="content">
              <Link to={""} className="item">
                <img src={ASSETS?.electronic} alt="" />
                <h2 className="title t-2">Titre de l'actualité</h2>
                <p className="title t-3">Details de l'actualité</p>
                <div className="timing">
                  <PiClockCountdownFill className="icon" />
                  <span>29 minutes</span>
                </div>
              </Link>
              <Link to={""} className="item">
                <img src={ASSETS?.computer_science} alt="" />
                <h2 className="title t-2">Titre de l'actualité</h2>
                <p className="title t-3">Details de l'actualité</p>
                <div className="timing">
                  <PiClockCountdownFill className="icon" />
                  <span>29 minutes</span>
                </div>
              </Link>
              <Link to={""} className="item">
                <img src={ASSETS?.aviation} alt="" />
                <h2 className="title t-2">Titre de l'actualité</h2>
                <p className="title t-3">Details de l'actualité</p>
                <div className="timing">
                  <PiClockCountdownFill className="icon" />
                  <span>29 minutes</span>
                </div>
              </Link>
              <Link to={""} className="item">
                <img src={ASSETS?.computer_science} alt="" />
                <h2 className="title t-2">Titre de l'actualité</h2>
                <p className="title t-3">Details de l'actualité</p>
                <div className="timing">
                  <PiClockCountdownFill className="icon" />
                  <span>29 minutes</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="numbers">
          <div className="container">
            <div className="item">
              <MdMenuBook className="icon" />
              <h2 className="title t-2">+100</h2>
              <h3 className="title t-3">Cours</h3>
            </div>
            <div className="item">
              <GiTeacher className="icon" />
              <h2 className="title t-2">+50</h2>
              <h3 className="title t-3">Enseignants Cerifiés</h3>
            </div>
            <div className="item">
              <PiStudentBold className="icon" />
              <h2 className="title t-2">+1000</h2>
              <h3 className="title t-3">Apprenants</h3>
            </div>
            <div className="item">
              <MdOutlineWbSunny className="icon" />
              <h2 className="title t-2">100%</h2>
              <h3 className="title t-3">Taux de réussite</h3>
            </div>
          </div>
        </div>
        <div className="process">
          <div className="container">
            <div className="head">
              <h1 className="title t-1">
                Trois étapes simples pour mener à bien un projet
              </h1>
            </div>
            <div className="content">
              <div className="item">
                <span className="icon">1</span>
                <h2 className="title t-2">Idée de projet</h2>
                <p className="title t-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="item">
                <span className="icon">2</span>
                <h2 className="title t-2">Exécution et Implémentation</h2>
                <p className="title t-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="item">
                <span className="icon">3</span>
                <h2 className="title t-2">Expérimentation et Lancement</h2>
                <p className="title t-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="joining">
              <img src={ASSETS?.phd_student} alt="" />
              <div>
                <h1 className="title t-1">
                  Rejoignez plus de 1000 étudiants à travers le monde entier!
                </h1>
                <p className="title t-3">
                  Inscrivez-vous afin de bénéficier de notre formation de
                  partout où vous êtes dans le globe...
                </p>
                <button className="button">S'inscrire</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
