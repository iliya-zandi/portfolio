/**
 * Button Component
 * A reusable button component that supports different variants and optional links.
 */

import React from "react";

/**
 * Props type for Button component
 */
type ButtonProps = {
  children: React.ReactNode; // Content to be displayed inside the button
  variant: "default" | "active"; // Variant of the button, default or active
  link?: string | undefined; // Optional link; if provided, an <a> tag is rendered inside
};

/**
 * Button component
 * Renders a button with optional link and variant styling.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  link = null,
}) => {
  return (
    <button
      type="button"
      className={(variant !== "active" ? "" : "active") + " _button"}
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
