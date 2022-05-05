import React from "react";

const Paper: React.FC<any> = () => {
  console.log("HI");
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-light_gray mix-blend-normal box-border bg-boxShadow">
      <p className="text-center p-10 text-white" >Curious about your food?</p>
    </div>
  );
};

export default Paper;
