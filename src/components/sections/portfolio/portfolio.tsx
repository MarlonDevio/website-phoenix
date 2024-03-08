import React from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import styles from "./portfolio.module.css";
import { attesticoPortfolioImage } from "../../../../public/assets";
import Button from "@/components/ui/button/button";

function Portfolio() {
  return (
    <div>
      <div className="center">
        <div className="top">solar system</div>
        <div className="carousel">
          <div className="left">
            <div className="left-item">
              <div className="title">Dating</div>
              <div className="description">dating app best for ...</div>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <Image src={attesticoPortfolioImage} alt="attestico" />
              <Button>Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
