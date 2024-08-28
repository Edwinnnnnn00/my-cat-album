// import React from 'react';
import "./CatClass.css";

const CatClass = ({ url }: { url: string }) => {
  return <img className="catClass" src={url} alt="random" />;
};

export default CatClass;
