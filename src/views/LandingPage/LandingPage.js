import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
import VideoSection from "./Sections/VideoSection.js";
import VideoSection2 from "./Sections/VideoSection2.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/RoadmapSection.js";
import Gallery from "./Sections/Gallery.js";
import Story from "./Sections/Story.js";
import TeamSection2 from "./Sections/TeamSection2.js";
// import FAQ from "./Sections/FAQ.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // brand="James Coholan"
        rightLinks={<HeaderLinks />}
        absolute
        {...rest}
      />
      <Parallax
        filter
        image={
          "https://ik.imagekit.io/mbhxghyf1m2/1920-1080053_u3T0LGZnp.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1653004649012"
        }
        alt="SYB"
      >
        <Fade duration={2000} bottom cascade>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>SYB Creative</h1>
                <h2 className={classes.subtitle}>
                  Full Service Creative Agency - Los Angeles
                </h2>
                <h4>Video, Music, & NFT Production</h4>
                {/* <a className={classes.subtitle} href="SYB@SYBCreative.com">
                  Contact
                </a> */}
                <br />
                <Button
                  color="twitter"
                  size="lg"
                  href="https://www.instagram.com/savyungblanc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  {/* <i className="fas fa-play" /> */}
                  Instagram
                </Button>
                <Button
                  color="twitter"
                  size="lg"
                  href="https://youtu.be/4wQ-okGvk24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  YouTube
                </Button>
                {/* <Button
                  color="twitter"
                  size="lg"
                  href="https://youtu.be/4wQ-okGvk24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  Article
                </Button> */}
                <Button
                  color="twitter"
                  size="lg"
                  href="mailto:SYB@SYBCreative.com?subject=Inquiry&body=Hi James, I am writing to inquire about creative services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  Inquiries
                </Button>
                <h1></h1>
                {/* <h4>CodeWars Rank</h4>
                <img src="https://www.codewars.com/users/jamesccoholan/badges/large" /> */}
              </GridItem>
            </GridContainer>
          </div>
        </Fade>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      <div>
        <VideoSection />
        <WorkSection />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Gallery />
          </div>
        </div>
        <Story />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection2 />
          </div>
        </div>
        <VideoSection2 />
      </div>
      <Footer />
    </div>
  );
}
