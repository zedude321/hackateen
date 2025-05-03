"use client";

import { FiMoreVertical, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function NotificationPage() {
  const [showAccountPopover, setShowAccountPopover] = useState(false);
  const [showPollPopover, setShowPollPopover] = useState(false);
  const [pollOptions, setPollOptions] = useState<string[]>(['']);
  
  // Handle option input change
  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
    
    // Add a new empty input when typing in the last field
    if (value.length > 0 && index === pollOptions.length - 1) {
      setPollOptions([...newOptions, '']);
    }
    
    // Remove empty options when backspacing
    if (value.length === 0 && index !== pollOptions.length - 1) {
      // Only remove if it's not the last input field
      const filteredOptions = newOptions.filter((_, i) => i !== index);
      setPollOptions(filteredOptions);
    }
  };
  
  return (
    <div className="ml-[240px] min-h-screen bg-black text-white p-6 relative">
      {/* Account Section */}
      <section className="mb-10">
        <h2 className="text-lg font-medium mb-4">Данс</h2>

        {/* Account Card 1 */}
        <div className="bg-zinc-900 rounded-md mb-4">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-normal">
                Аялалын фонтны мөнгө, хүний 200к
              </h3>
              <button>
                <FiMoreVertical className="text-white" />
              </button>
            </div>

            <div className="mt-2">
              <div className="flex gap-1">
                <span className="text-gray-400 text-sm">Хаан Банк:</span>
                <span className="text-purple-500 text-sm">569499394</span>
              </div>
              <div className="flex gap-1">
                <span className="text-gray-400 text-sm">Голомт Банк:</span>
                <span className="text-blue-500 text-sm">1175197592</span>
              </div>
            </div>
          </div>
        </div>

        {/* Account Card 2 */}
        <div className="bg-zinc-900 rounded-md mb-4">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-normal">Музей үзэх, хүний 20к</h3>
              <button>
                <FiMoreVertical className="text-white" />
              </button>
            </div>

            <div className="mt-2">
              <div className="flex gap-1">
                <span className="text-gray-400 text-sm">Хаан Банк:</span>
                <span className="text-purple-500 text-sm">569499394</span>
              </div>
              <div className="flex gap-1">
                <span className="text-gray-400 text-sm">Голомт Банк:</span>
                <span className="text-blue-500 text-sm">1175197592</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add New Button */}
        <button
          className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 rounded-md flex justify-center items-center"
          onClick={() => setShowAccountPopover(true)}
        >
          <FiPlus className="text-white h-6 w-6" />
        </button>
      </section>

      {/* Poll Section */}
      <section>
        <h2 className="text-lg font-medium mb-4">Poll</h2>

        <div className="flex w-full gap-4">
          {/* Poll Card 1 */}
          <div className="bg-zinc-900 rounded-md p-4 w-2/5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-normal">Хуудас бөглөсөн</h3>
              <button>
                <FiMoreVertical className="text-white" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="poll1-yes"
                    name="poll1"
                    className="h-4 w-4 accent-indigo-600"
                  />
                  <label htmlFor="poll1-yes" className="text-sm">
                    Тийм
                  </label>
                </div>
                <span className="text-xs text-gray-400">10 vote</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="poll1-no"
                    name="poll1"
                    className="h-4 w-4 accent-indigo-600"
                  />
                  <label htmlFor="poll1-no" className="text-sm">
                    Үгүй
                  </label>
                </div>
                <span className="text-xs text-gray-400">8 vote</span>
              </div>
            </div>

            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm">
              Vote
            </button>
          </div>

          {/* Poll Card 2 */}
          <div className="bg-zinc-900 rounded-md p-4 w-2/5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-normal">Аялалд явах</h3>
              <button>
                <FiMoreVertical className="text-white" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="poll2-yes"
                    name="poll2"
                    className="h-4 w-4 accent-indigo-600"
                  />
                  <label htmlFor="poll2-yes" className="text-sm">
                    Тийм
                  </label>
                </div>
                <span className="text-xs text-gray-400">10 vote</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="poll2-no"
                    name="poll2"
                    className="h-4 w-4 accent-indigo-600"
                  />
                  <label htmlFor="poll2-no" className="text-sm">
                    Үгүй
                  </label>
                </div>
                <span className="text-xs text-gray-400">2 vote</span>
              </div>
            </div>

            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm">
              Vote
            </button>
          </div>

          {/* Add New Poll Button */}
          <div 
            className="bg-indigo-600 hover:bg-indigo-700 rounded-md aspect-square flex justify-center items-center cursor-pointer w-1/5"
            onClick={() => setShowPollPopover(true)}
          >
            <FiPlus className="text-white h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Add Account Popover */}
      {showAccountPopover && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          onClick={() => setShowAccountPopover(false)}
        >
          <div
            className="bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-medium mb-6 text-center">Данс нэмэх</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Мэдээлэл
                </label>
                <input
                  type="text"
                  placeholder="Мэдэхгүй"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Дансны дугаар
                </label>
                <div className="flex gap-2 mb-2">
                  <div className="relative w-1/3">
                    <select className="appearance-none w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-8">
                      <option>Хаан банк</option>
                      <option>Голомт банк</option>
                      <option>Хас банк</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <FiChevronDown className="text-gray-400" />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="534513435"
                    className="w-2/3 px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="relative w-1/3">
                    <select className="appearance-none w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-8">
                      <option>Голомт банк</option>
                      <option>Хаан банк</option>
                      <option>Хас банк</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <FiChevronDown className="text-gray-400" />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="12488384"
                    className="w-2/3 px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Poll Popover */}
      {showPollPopover && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          onClick={() => setShowPollPopover(false)}
        >
          <div
            className="bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-medium mb-6 text-center">Poll нэмэх</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Асуулт
                </label>
                <input
                  type="text"
                  placeholder="Angiaraa hamt kino vzeh naizuudaa"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Сонголт
                </label>
                
                {/* Dynamic Options Input Fields */}
                <div className="space-y-2">
                  {pollOptions.map((option, index) => (
                    <div key={index} className="w-full">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={index === 0 ? "Тийм" : "Сонголт нэмэх"}
                        className="w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
