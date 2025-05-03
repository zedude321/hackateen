import { ColorButton } from "./color-button";
import { useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";

export default function CreateTeam({ setVisible }) {
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState("");
  const [searchText, setSearchText] = useState("");
  const ref = useRef(null);
  
  // Array of colors for selection
  const colors = [
    "#000000", // Black
    "#6A3AEB", // Purple
    "#8B5CF6", // Lighter Purple
    "#3B82F6", // Blue
    "#38BDF8", // Light Blue
    "#2DD4BF", // Teal
    "#10B981", // Green
    "#FFFFFF", // White
  ];
  
  // Member data for demonstration
  const members = [
    {
      id: 1,
      name: "Enkhbold Ebo",
      email: "xlebdyt75@gmail.com",
      avatar: "/enkhbold.jpg",
      role: "Та өөрөө"
    },
    {
      id: 2,
      name: "Sanchir arunbold",
      email: "Sanchiraruna@gmail.com",
      avatar: "/sanchir.jpg"
    },
    {
      id: 3,
      name: "Zedude Nmbtr",
      email: "Zedude321@gmail.com",
      avatar: "/zedude.jpg"
    }
  ];

  const handleSubmit = () => {
    // Handle team creation logic here
    setVisible(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-zinc-900 w-[512px] rounded-lg p-8 text-white">
        <h2 className="text-xl font-semibold text-center mb-6">Баг үүсгэх</h2>
        
        {/* Team Name */}
        <div className="mb-6">
          <label className="block text-sm text-zinc-400 mb-2">Багын нэр</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-zinc-800 border-none rounded p-2 text-white outline-none"
            placeholder="11A"
          />
        </div>
        
        {/* Color Selection */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm text-zinc-400">Өнгөө сонгох</label>
            <div className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-400"># F5f5f5</div>
          </div>
          <div className="flex space-x-2">
            {colors.map((color, index) => (
              <ColorButton
                key={index}
                bg={color}
                selected={selected}
                setSelected={setSelected}
                id={index}
              />
            ))}
          </div>
        </div>
        
        {/* Team Members */}
        <div className="mb-6">
          <label className="block text-sm text-zinc-400 mb-2">Багын гишүүд</label>
          <div className="relative mb-4">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-zinc-800 border-none rounded-lg pl-10 pr-4 py-3 text-white outline-none"
              placeholder="Имэйлээр багын гишүүдээ нэмэх"
            />
          </div>
          
          {/* Member List */}
          <div className="space-y-3">
            {members.map((member) => (
              <div key={member.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden">
                    {member.avatar ? (
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-zinc-400">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {member.role ? (
                    <span className="text-xs text-zinc-400">{member.role}</span>
                  ) : (
                    <button className="text-sm text-zinc-400 flex items-center">
                      Гишүүн <IoChevronDownOutline className="ml-1" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-white hover:bg-zinc-200 text-black font-medium py-3 rounded-lg transition duration-200"
        >
          Багаа үүсгэх
        </button>
      </div>
    </div>
  );
}
