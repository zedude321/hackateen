export const InputLogin = ({ label, placeholder, ...other }: any) => {
  return (
    <div className="w-[80%] h-[80px] flex justify-around items-start flex-col font-roboto gap-2">
      <div className="h-[20px] w-full flex justify-between items-center">
        <p className="text-sm text-white-1/60 h-full">{label}</p>
      </div>
      <input
        className="w-full h-[56px] border rounded-xl bg-dark-1 text-white-1 placeholder:text-white-1/60 text-md p-5 outline-0"
        placeholder={placeholder}
        // {...other}
      ></input>
    </div>
  );
};
