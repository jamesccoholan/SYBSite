import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/storyStyle.js";

const useStyles = makeStyles(styles);

export default function Story() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade duration={2000} bottom cascade>
        <GridContainer justify="center">
          <br />
          <h1 className={classes.title}></h1>
          <br />
          <GridItem xs={12} sm={10} md={10} className={classes.sectionArea}>
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "SYB Creative acts as an umbrella entity to house all aspects of the project and resides at the intersection of art, business, and technology. Over time we aim to maximize the value of the offering and its consumer impact across creative and cultural verticals at scale. The intent is to build one of the great lasting brands, trusted for a high degree of quality and authenticity, celebrating great artistry while staying relevant in culture beyond any one project. The mission is to design an infusion of business and creative work into the DNA of the company to bridge and the chasm between the industrial and the creative spaces. We are at the core a creative brand. Creativity, the fuel which propels the engine of innovation, is the cornerstone of any great lasting enterprise, equipping it to adapt to an evolving marketplace and consumer demand."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/pexels-lenin-estrada-2569997_OUtfXc1uS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647981808148"
                }
                alt="Disconaut Scene"
              />
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/pexels-pixabay-247676_tWZWSc6vl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647981922587"
                }
                alt="Gathering Scene"
              />
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <h4
                className={classNames(
                  classes.description,
                  classes.descriptionRight
                )}
              >
                {
                  "SYB is an expression of values and thematic concepts across music, visuals, performance, live experience, fashion and auxiliary products that relate back to music and the listener, which we value at the center of all activities. The aim is to create an incredible, fully realized music experience that unlocks emotion for an audience at a visceral level. I put everything I have into making every song amazing, every video engaging and exploring emotionally and intellectually impactful concepts that move people and strengthen identification and connection to the project. The approach is to develop trust with consistent value delivery and cohesive brand expression while pushing creative boundaries at the intersection of art and technology."
                }
              </h4>
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "The mission is to design an infusion of business and creative work into the DNA of the company to bridge and the chasm between the industrial and the creative spaces. We are at the core a creative brand. Creativity, the fuel which propels the engine of innovation, is the cornerstone of any great lasting enterprise, equipping it to adapt to an evolving marketplace and consumer demand. Our culture of creativity focuses around one question: “How do we create and deliver value more effectively to our audience?” I am of the belief that art and capitalism don’t need to be mutually exclusive, they can complement and empower each other. Apple, the world’s most valuable company has design, artist inspiration, and differentiated thinking baked into their products and foundational values. The art of the Renaissance was catalyzed and flourished by way of the banking system implemented by the Medici."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/trade-finance-2021-1200-1612375664_cHrfjwF0o.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1652654213370"
                }
                alt="Party Scene"
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
