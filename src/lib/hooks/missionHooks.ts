import { useState, useEffect } from "react";
import { IMissionItem } from "../interfaces/interfaces";

type ClickedType = "next" | "prev" | "seeMore" | null;
interface UseMissionCarousel {
  missionItems: IMissionItem[];
  nextSlide: () => void;
  prevSlide: () => void;
  showSeeMore: () => void;
  clicked: ClickedType;
}

export const useMissionCarousel = (
  initialMissionItems: IMissionItem[],
): UseMissionCarousel => {
  const [missionItems, setMissionItems] =
    useState<IMissionItem[]>(initialMissionItems);
  const [clicked, setClicked] = useState<ClickedType>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (clicked) {
      timer = setTimeout(() => {
        setClicked(null);
      }, 1000); // Verander dit naar de gewenste tijd
    }
    return () => {
      clearTimeout(timer); // Dit zal de timer wissen wanneer de component wordt gedemonteerd
    };
  }, [clicked]);

  const nextSlide = () => {
    setMissionItems((prevItems) => {
      const newItems = [...prevItems]; // create a copy of the array
      const firstItem = newItems.shift(); // remove the first item
      if (firstItem) {
        newItems.push(firstItem); // add the first item to the end
      }
      return newItems;
    });
    setClicked("next");
    console.log("clicked");
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
    setClicked("prev");
  };

  const showSeeMore = () => {
    setClicked("seeMore");
    console.log("I got clicked");
  };
  return { missionItems, nextSlide, prevSlide, showSeeMore, clicked };
};
