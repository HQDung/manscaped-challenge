import React from "react";
import "./style.css";

interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return <span className="order__tag">{title}</span>;
};

export default React.memo(Tag);
