import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import LessonCard from "../components/lesson-card";
export default function Home() {
  // const [visible, setVisible] = useState(false);

  return (
    <div className="fixed right-0 bottom-0 p-4 w-[80vw] h-[90vh] flex justify-center items-start">
      <div className=" grid grid-cols-3 grid-rows-3 gap-4">
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <div className="w-[25vw] h-[220px] p-4 bg-[url('https://l1ydo07ih8.ufs.sh/f/tRac1gz0giWLPI87S7dpOQFLtHoJquKYRl7i8Ay0cEBZrnMm')] border border-white border-[1px] rounded-xl flex flex-col bg-cover justify-around items-center bg-center bg-no-repeat">
          <div className="w-full h-1/4 flex justify-center items-center">
            <p className="text-2xl font-semibold">Математик</p>
          </div>
          <div className="w-full h-1/2 flex justify-center items-start">
            <FiPlus className="h-24 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
//For Honor of Ebo🕊️🥀
