import React, { useRef, useState, useEffect } from "react";
import Navigation from "./Navigation";
import classes from "./Header.module.scss";

interface HeaderProps {
  HeroElement: React.ComponentType;
  navHeading: string;
  navItems: string[];
  navLinks: string[];
  otherClasses: string;
  animationStart: number;
}
const Header: React.FC<HeaderProps> = ({
  HeroElement,
  navHeading,
  navItems,
  navLinks,
  otherClasses,
  animationStart,
}) => {
  const headerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const headerElement = headerRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsHeaderVisible(!entry.isIntersecting);
    });

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, [isHeaderVisible]);

  return (
    <header
      ref={headerRef}
      className={`${otherClasses} ${classes.header}`}
      id="section-header"
    >
      <Navigation
        isFixed={isHeaderVisible}
        navItems={navItems}
        navLinks={navLinks}
        navHeading={navHeading}
        animationStart={animationStart}
      />
      <HeroElement />
    </header>
  );
};

export default Header;
