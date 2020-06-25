import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link href="/">
        <h2 className="navigation__heading">GitFinder</h2>
      </Link>
    </nav>
  );
};

export default Navigation;
