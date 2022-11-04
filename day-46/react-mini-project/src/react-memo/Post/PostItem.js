import React from "react";
import { memo } from "react";

const PostItem = () => {
  console.log("render");
  return <div>PostItem</div>;
};

export default memo(PostItem);
