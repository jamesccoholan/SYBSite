import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        {/* <h2 className={classes.title}>Photos</h2> */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/PIIICs34_qGx-eV07G.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655508756299"
                  }
                  alt="Image"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/PIIICs31_vTvK3jwMPt.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947198"
                  }
                  alt="Image"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/PIIICs30_UwQ4unE2I.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947424"
                  }
                  alt="Image"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/PIIICs22_1UUf7gL17H.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947763"
                  }
                  alt="Image"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/14_c2NJaspPcQM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643834233162"
                  }
                  alt="Image"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/PIIICs33_O-cpw_kve.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947611"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
