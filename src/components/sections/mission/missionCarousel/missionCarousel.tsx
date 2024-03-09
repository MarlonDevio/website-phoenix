import Carousel from "@/components/ui/carousel/carousel";
import { cn } from "@/lib/utils/cn";
import Arrows from "../arrows/arrows";
import MissionItemList from "../missionItemList/missionItemList";
import { IContainer } from "@/lib/interfaces/interfaces";
import styles from "../mission.module.css";
import { useEffect, useState } from "react";
import React from "react";
import { missionItems as initialMissionItems } from "@/constants/missionItems";

const MissionCarousel: React.FC<IContainer> = ({
  children,
  className,
  ...props
}) => {
  const [missionItems, setMissionItems] = useState(initialMissionItems);
  const [nextClicked, setNextClicked] = useState(false);
  const [prevClicked, setPrevClicked] = useState(false);

  useEffect(() => {
    if (nextClicked) {
      const timer = setTimeout(() => {
        setNextClicked(false);
      }, 1000); // Verander dit naar de gewenste tijd

      return () => clearTimeout(timer); // Dit zal de timer wissen wanneer de component wordt gedemonteerd
    }
  }, [nextClicked]);

  useEffect(() => {
    if (prevClicked) {
      const timer = setTimeout(() => {
        setPrevClicked(false);
      }, 1000); // Verander dit naar de gewenste tijd

      return () => clearTimeout(timer); // Dit zal de timer wissen wanneer de component wordt gedemonteerd
    }
  }, [prevClicked]);
  const nextSlide = () => {
    setMissionItems((prevItems) => {
      const newItems = [...prevItems]; // create a copy of the array
      const firstItem = newItems.shift(); // remove the first item
      if (firstItem) {
        newItems.push(firstItem); // add the first item to the end
      }
      return newItems;
    });
    prevClicked && setPrevClicked(false);
    setNextClicked(true);
  };
  const prevSlide = () => {
    setMissionItems((prevItems) => {
      const newItems = [...prevItems]; // Create a copy of the array
      const lastItem = newItems.pop(); // Remove the last item
      if (lastItem) {
        newItems.unshift(lastItem); // Add the last item to the beginning
      }
      return newItems;
    });
    nextClicked && setNextClicked;
    setPrevClicked(true);
  };

  return (
    <Carousel
      {...props}
      className={cn(
        styles.carousel,
        nextClicked && styles.next,
        prevClicked && styles.prev,
      )}
    >
      <MissionItemList
        className={cn(styles.list)}
        missionItems={missionItems}
      />
      <Arrows onNext={nextSlide} onPrev={prevSlide} />
    </Carousel>
  );
};
export default MissionCarousel;
