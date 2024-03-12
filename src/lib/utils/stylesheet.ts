import { cn } from "./cn";

// BUTTON STYLE
export const buttonStyles = (
  className: string,
  $primary?: "primary" | undefined,
): string =>
  cn(
    ` px-1rem mt-[-.5rem] rounded-[1rem] px-[2rem] py-[.5rem] transition-all duration-500 ease-in-out font-semibold hover:text-white hover:dark:text-black flex flex-col hover:cursor-pointer`,
    {
      "bg-black text-white hover:text-black hover:shadow-inset-hover-grey-medium hover:bg-white hover:shadow-sm dark:text-black dark:bg-white dark:hover:shadow-inset-hover-grey-dark dark:hover:text-white dark:hover:bg-black":
        $primary === "primary",
      "dark:shadow-inset-gold dark:hover:shadow-inset-hover-gold dark:text-white text-black shadow-inset-gold-dark hover:shadow-inset-hover-gold-dark":
        !$primary,
    },
    className,
  );

export const styles = {
  paddingX: "sm:px-[6.4rem] px-[2.4rem]",
  paddingY: "sm:py-[6.4rem] py-[ 2.4rem ]",
  padding: "sm:px-[6.4rem] px-[2.4rem] sm:py-[6.4rem] py-[4rem]",

  heroHeadText:
    "font-semibold text-black dark:text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-[.8rem]",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "dark:text-white text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[3.2rem] text-gold-dark dark:text-gold text-[1.8rem] uppercase tracking-wider",
};
