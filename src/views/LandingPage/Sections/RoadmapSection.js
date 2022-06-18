import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import GridItem2 from "components/Grid/GridItem2.js";

import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle";

// import HeaderLinks from "components/Header/HeaderLinks.js";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: "NFT Design, Generation & Deployment",
    img: "https://ik.imagekit.io/mbhxghyf1m2/PIIICs31_vTvK3jwMPt.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947198",
    items: [
      {
        title: "End to end 3D art  production ",
        description:
          "Automate Your Transactions. Conditional orders and automated loss protection for Ethereum.",
      },
      {
        title: "Metaverse Ready",
        description:
          "Partnerships and business development, integrating core product.",
      },
    ],
  },
  {
    phase: "Music Production",
    img: "https://ik.imagekit.io/mbhxghyf1m2/PIIICs26_RoC8eAkSD.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947580",
    items: [
      {
        title:
          "Enabling Creators and Brands to Build Seamlessly in the Web3 Era",
        description:
          "Build your brand, sell your work, and grow your community using the power of the blockchain. All on the Minotaur platform.",
      },
      {
        title: "Project Manager",
        description:
          "Business sourcing and end-to-end execution on NFT campaigns.",
      },
    ],
  },
  {
    phase: "Video Editing",
    img: "https://ik.imagekit.io/mbhxghyf1m2/PIIICs30_UwQ4unE2I.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947424",
    items: [
      {
        title:
          "Enabling Creators and Brands to Build Seamlessly in the Web3 Era",
        description:
          "Build your brand, sell your work, and grow your community using the power of the blockchain. All on the Minotaur platform.",
      },
      {
        title: "Project Manager",
        description:
          "Business sourcing and end-to-end execution on NFT campaigns.",
      },
    ],
  },
  {
    phase: "Graphic Design",
    img: "https://ik.imagekit.io/mbhxghyf1m2/PIIICs23_rFgRbzPL9.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655532947756",
    items: [
      {
        title:
          "Enabling Creators and Brands to Build Seamlessly in the Web3 Era",
        description:
          "Build your brand, sell your work, and grow your community using the power of the blockchain. All on the Minotaur platform.",
      },
      {
        title: "Project Manager",
        description:
          "Business sourcing and end-to-end execution on NFT campaigns.",
      },
    ],
  },
];

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem2 xs={0} sm={0} md={0}></GridItem2>
        <GridItem cs={12} sm={12} md={8}>
          <Fade duration={1000} bottom cascade>
            <div>
              <h1 className={classes.title}>Expertise</h1>
              <h4 className={classes.description}>
                {
                  "Blockchain, media, finance, and technology and focused founder, product developer, project manager, and growth driver."
                }
                {/* <HeaderLinks /> */}

                <h1 />
              </h4>
            </div>
          </Fade>

          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <Fade duration={1000} bottom cascade key={r.phase}>
                <div className={classes.roadmapSectionContainer}>
                  <img
                    src={r.img}
                    alt="Disconaut Helmet"
                    className={classes.roadmapDot}
                  />
                  <div className={classes.roadmapSection}>
                    <h1 className={classes.roadmapPhase}>{r.phase}</h1>
                    {r.items.map((item) => (
                      <div key={item.title}>
                        <h3 className={classes.roadmapItemTitle}>
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className={classes.roadmapDivider} />
                </div>
              </Fade>
            ))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
