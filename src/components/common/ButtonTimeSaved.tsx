import React from "react";

function ButtonTimeSaved({ text }: { text: number }) {
  return <div className="inline-block rounded text-white text-xs items-center justify-center px-3 py-2 bg-primary">Time Saved: {text} hours</div>;
}

export default ButtonTimeSaved;
