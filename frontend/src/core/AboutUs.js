import React from "react";
import { Link } from "react-router-dom";
import Base from "./Base";

const About = () => {
  return (
    <Base>
    <div>
      <main className="flex-container">
        <section className="img-section">
        <div className="formidable-img">
          <img 
          className="FormidableFiveAbout"
          src={require("../images/FormidableFivePhoto-About.jpg")}
          alt="FormidableFivePhoto-About"
          />
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <h1 className="about-heading">About Our organization</h1>
            <br/>
            <h2 className="wise-guy-title">
              "This Thing of Ours"
            <br/>
              Wise Guy Collections:
            </h2>
            <p>
              At Wise Guy Collections, we honor a legacy rooted in the grit
              and swagger of the underworld. Founded by the formidable five:
              <i>Jon, Cris, Benny, Isaac, and Rene,</i> who returned from the
              battlefield only to conquer the underground cage with unrelenting
              style in the <i>1950s</i>, our establishment is more than a store; it's a
              testament to power, loyalty, and the pursuit of glory.
              </p>
              <p> 
                Our mission
              is simple: to arm modern warriors with the tools of champions. We
              provide an exclusive collection of MMA, boxing, wrestling, and
              martial arts gear, meticulously chosen to uphold the legacy of
              those who knew the real meaning of honor. 'Wise Guy Collections'
              is where legends are crafted, and the roar of the crowd becomes
              your empire.
              </p>
              <p> 
                Our allegiance lies with fighters, fans, and
              enthusiasts, delivering not just equipment, but a portal to a time
              when honor was everything. Our vision is to uphold the code of the
              underground, pay tribute to the mafia's enduring spirit, and be
              the paramount haven for those who understand that strength is the
              ultimate currency. 'Wise Guy Collections' celebrates the bravery
              to enter the arena and the tireless devotion to refine one's
              skills. Your presence in this endeavor is more than an honor; it's
              a partnership in a tradition that wields its own kind of power,
              where champions are forged, and legacies are cemented.</p>
              <p className="closing-p"> Thank you
              for joining us in the realm of 'Wise Guy Collections,' where the
              fight is our way of life, and success is our creed.
              </p>
          </div>
        </section>
      </main>
    </div>
    </Base>
  );
};

export default About;
