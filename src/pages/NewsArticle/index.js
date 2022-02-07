import React from "react";
import { motion } from "framer-motion";
import BasicCard from "../../components/UI/common/BasicCard";
// import images from "../../assets/images/slider";
import GridWrapper from "../../components/UI/common/GridWrapper";

const NewsArticle = () => {
  // console.log(images);
  const sliderStyle = {
    carousel: { cursor: "grab" },
    innerCarousel: {
      display: "flex",
      backgroundColor: "lightBlue",
      height: "20rem",
    },
    item: { minHeight: "40rem", width: "30rem", padding: "40px" },
    itemImg: { width: "250px", height: "250px", borderRadius: "2rem" },
  };

  const getHeader = () => (
    <motion.h1 animate={{ x: 50 }}>Slider motion</motion.h1>
  );

  const getContent = () => (
    <motion.div style={sliderStyle.carousel}>
      <motion.div
        style={sliderStyle.innerCarousel}
        drag="x"
        dragConstraints={{ right: 0 }}
      >
        {/* {images.map((image, index) => {
          return (
            <motion.div key={index} style={sliderStyle.item}>
              <img style={sliderStyle.itemImg} src={image} alt="" />
            </motion.div>
          );
        })} */}
      </motion.div>
    </motion.div>
  );

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
    </GridWrapper>
  );
};

export default NewsArticle;
