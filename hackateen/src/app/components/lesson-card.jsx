import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";

export default function LessonCard() {
  return (
    <div className="w-[25vw] h-[220px] p-4 bg-[url('https://l1ydo07ih8.ufs.sh/f/tRac1gz0giWLZxSX3Dk8W4C1ne937SckrLTw8R2BfqUQgVmD')] border border-white border-[1px] rounded-xl flex flex-col bg-cover justify-around items-center bg-center bg-no-repeat">
      <div className="w-full h-1/2">
        <div className="w-full flex justify-between items-center h-1/2">
          {" "}
          <p className="text-2xl font-semibold">Даалгавар нэмэх</p>
        </div>
        <div className="w-full flex justify-start items-center h-1/2 gap-4">
          <GoDotFill />
          <p className="text-sm font-md">68-р хуудас, Бодлого 120-135</p>
        </div>
        <div></div>
      </div>
      <div className="w-full h-3/4 flex justify-center items-start"></div>
    </div>
  );
}
