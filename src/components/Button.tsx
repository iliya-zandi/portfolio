/**
 * Button Component
 * A reusable button component that supports different variants, optional links, and custom classes.
 */

import React from "react";

/**
 * Props type for Button component
 */
type ButtonProps = {
  children: React.ReactNode; // Content to be displayed inside the button
  variant: "default" | "active"; // Variant of the button, default or active
  link?: string | undefined; // Optional link; if provided, an <a> tag is rendered inside
  className?: string | null; // Optional custom class name
};

/**
 * Button component
 * Renders a button with optional link, variant styling, and additional class names.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  link = null,
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`${variant === "active" ? "active" : ""} _button ${className}`}
    >
      {/* Render an anchor tag if a link is provided */}
      {link && <a href={link}></a>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
/**
 * Exporting Button as default for use in other components.
 */
