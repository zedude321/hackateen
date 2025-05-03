import { InputLogin } from "./Input";
import { ColorButton } from "./color-button";
import { Members } from "./member-card";
import appereance from "../json-data/appearance.json";
import members from "../json-data/member.json";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export function CreateTeam({ setVisible }) {
  const [selected, setSelected] = useState(-1);
  const [name, setName] = useState("");
  const ref = useRef(null);
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm p-4 z-0">
      <div
        ref={ref}
        className="w-[50%] h-[90%] z-100 bg-dark-1 border rounded-3xl flex justify-center items-center flex-col"
      >
        <h1 className="text-2xl text-white-1 font-bold">Баг үүсгэх</h1>
        <div className="w-[100%] h-auto flex justify-around gap-8 items-center flex-col">
          <InputLogin
            value={name}
            // onChange={(e) => setName(e.target.value)}
            label="Багын нэр"
            isHide="true"
          />
          <div className="w-[80%] h-[56px] flex justify-between items-start flex-col font-roboto">
            <div className="h-[16px] w-full flex justify-between items-center">
              <p className="text-sm text-white-1/60 h-full">Өнгөө сонгох</p>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center text-white-1 text-md">
              <div className="w-full flex justify-between items-center">
                {appereance.map((el, i) => {
                  return (
                    <ColorButton
                      selected={selected}
                      setSelected={setSelected}
                      id={i}
                      key={i}
                      bg={el.color}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <InputLogin
            type="text"
            label="Багын гишүүд"
            placeholder="Имэйлээр багын гишүүдээ нэмэх"
            isHide="false"
          />
          <div className="w-full h-64 flex justify-between gap-[24px] items-center flex-col overflow-y-scroll">
            {members.map((el) => {
              return (
                <Members
                  key={el.id}
                  img={el.img}
                  name={el.name}
                  mail={el.mail}
                />
              );
            })}
          </div>
        </div>

        <button
          onClick={() => {
            setVisible(false);
          }}
          className="w-[80%] h-[60px] flex justify-center items-center"
        >
          <div className="w-full h-[40px] active:bg-white-1/60 bg-white-1 text-dark text-md flex justify-center items-center rounded-3xl transition-all">
            Багаа үүсгэх
          </div>
        </button>
      </div>
    </div>
  );
}
