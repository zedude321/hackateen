import { IoIosRemoveCircle } from "react-icons/io";

export const Members = ({ img, name, mail }) => {
  return (
    <>
      <div className="w-[80%] h-[50px] flex justify-center items-start flex-col font-roboto ">
        <div className="h-[50px] w-full flex justify-between items-center">
          <div className="h-full w-fit flex gap-x-[20px]">
            <img className="h-[50px] w-[50px] rounded-full border" src={img} />
            <div className="flex flex-col h-full space-between">
              <div className="text-white-1 font-16 h-[24px]">
                <span className="">{name}</span>
              </div>
              <span className="text-white/60 text-xs">{mail}@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <IoIosRemoveCircle className="fill-white-1 w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};
