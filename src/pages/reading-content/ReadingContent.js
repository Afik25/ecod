import React, { useState, useRef } from "react";
import "./reading-content.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ASSETS from "../../utils/Assets";
import { Link } from "react-router-dom";

const ReadingContent = () => {
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
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.open("/reading/content/preview", "_blank"); // Open in new tab
  };

  return (
    <div
      className="reading-content"
      ref={scrollDemoRef}
      onScroll={fixedOnscroll}
    >
      <Header fix={fix} />
      <div className="wrapper">
        <div className="filter">
          <div className="inner">
            <img src={ASSETS?.book_inner} alt="" />
          </div>
          <div className="outer">
            <h1 className="title t-1">
              Trouvez le contenu desiré, très enrichissant pour votre lecture...
            </h1>
            <form>
              <input type="text" placeholder="Rechercher un contenu..." />
              <button type="submit">Rechercher</button>
            </form>
          </div>
        </div>
        <div className="category">
          <div className="group-content">
            <h1 className="title t-2">Type de contenu</h1>
            <div className="options">
              <button className="button active">Gratuits</button>
              <button className="button">Payants</button>
            </div>
          </div>
          <div className="group-content">
            <h1 className="title t-2">Catégorie du Contenus (Domaine)</h1>
            <div className="options">
              <button className="button active">Tous</button>
              <button className="button">Electronique</button>
              <button className="button">Informatique</button>
              <button className="button">Aviation</button>
            </div>
          </div>
        </div>
        <div className="content">
          <h1>Tous (Gratuits)</h1>
          <div className="element-content">
            <Link
              to={{
                pathname: "/reading/content/preview",
                search: "?id=123&name=abc",
              }}
              target="_blank"
              className="ec-item"
            >
              <div className="ec-item-illustr">
                <span>Cover</span>
              </div>
              <div className="ec-item-descr">
                <h1 className="title t-1">Victim</h1>
                <h2 className="title t-2">Amisi Fikirini</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadingContent;
