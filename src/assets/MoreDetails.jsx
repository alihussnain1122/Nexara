import React from "react";
import FounderMessage from "./FounderMessage";
import CompanyTimeline from "./CompanyTimeline ";
import BehindTheScenes from "./BehindTheScenes";


export default function MoreDetails() {
  return (
    <div className="w-full bg-white">
        <FounderMessage/>
      <CompanyTimeline/>
      <BehindTheScenes/>
    </div>
  );
}
