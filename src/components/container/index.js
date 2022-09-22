import React, { forwardRef } from "react";

const Container = forwardRef(({ children, style, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={`container mx-auto px-3 xl:px-0 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
});

export default Container;
