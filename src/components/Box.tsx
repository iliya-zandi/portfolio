/**
 * Box Component
 * A reusable container with a header, title, optional button, and content area.
 */

import React from "react";

/**
 * Type definition for the button prop
 * Ensures the button is a valid React element.
 */
type Button = React.ReactElement<Button>;

/**
 * Props type for Box component
 */
type BoxProps = {
  children: React.ReactNode; // Content to be displayed inside the box
  title: string; // Title of the box
  button: Button; // A React element button to display in the header
  className?: string; // Optional custom class name for the box
};

/**
 * Box component
 * Renders a styled section with a header (title + button) and a content area.
 */
const Box: React.FC<BoxProps> = ({
  children,
  title,
  button,
  className,
}): React.ReactNode => {
  return (
    <section className={`_box ${className}`}>
      {/* Box header with title and button */}
      <div className="_box_header">
        <h3 className="text-4xl text-zinc-900/95 font-semibold">{title}.</h3>
        {button && button}
      </div>

      {/* Box content */}
      <div>{children}</div>
    </section>
  );
};

export default Box;
/**
 * Exporting Box as default for use in other components.
 */
