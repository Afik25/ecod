import React, { useState, useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./course-reading.css";
import { Link } from "react-router-dom";
import ASSETS from "../../utils/Assets";

const CourseReading = () => {
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
    <div className="course-reading" ref={scrollDemoRef} onScroll={fixedOnscroll}>
      <Header fix={fix} />
      <div className="wrapper">
        <div className="left">
          <Link to="" className="link">
            Lesson 1
          </Link>
          <Link to="" className="link">
            Lesson 2
          </Link>
          <Link to="" className="link">
            Lesson 3
          </Link>
          <Link to="" className="link">
            Lesson 4
          </Link>
          <Link to="" className="link">
            Lesson 5
          </Link>
        </div>
        <div className="right">
          <iframe
            src={ASSETS?.reading_course}
            title="Post title"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="img"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseReading;
