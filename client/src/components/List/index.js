import React from "react";
import "./style.css";

// List, ListItem component. For building unordered lists
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
