/**
 * Navigation Component
 * Renders a navigation menu with optional icons and text for each item.
 */

import React from "react";

/**
 * Type definition for a single navigation item.
 */
type ItemsOfNavigation = {
  id: number; // Unique identifier for the item
  text: string; // Display text
  link?: string; // Optional URL for the item
  icon?: React.JSX.Element; // Optional icon to display
};

/**
 * Props type for Navigation component
 */
type NavigationProps = {
  items: ItemsOfNavigation[]; // Array of navigation items
  className: string; // Class names for the <ul> element
  showIcon: boolean; // Flag to display icons
  showText: boolean; // Flag to display text
};

/**
 * Navigation component
 * Maps over the items array and renders each item with optional text and icon.
 */
const Navigation: React.FC<NavigationProps> = ({
  items,
  className,
  showIcon = false,
  showText = true,
}): React.ReactNode => {
  return (
    <nav className="_navigation">
      <ul className={className}>
        {items.map((item) => (
          <li key={item.id}>
            {/* Render anchor tag if link is provided */}
            {item.link && <a href={item.link}></a>}
            {/* Render text if showText is true */}
            {showText && <span>{item.text}</span>}
            {/* Render icon if showIcon is true and icon exists */}
            {showIcon && item.icon && <span>{item.icon}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
/**
 * Exporting Navigation as default for use in other components.
 */
