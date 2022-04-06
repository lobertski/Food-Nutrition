import React from "react";

const Paper: React.FC<any> = () => {
  console.log("HI");
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 border: 1px solid #870F0F border-color: rgb(0, 0, 0, 0.5)">
      <p className="rounded border ">
        Curious about your food?
      </p>
    </div>
  );
};

export default Paper;
