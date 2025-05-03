"use client";

import { useEffect, useState } from "react";
import CalendarComponent from "../components/calendar";
import { useData } from "@/providers/dataProvider";

export default function CalendarPage() {
  const { data } = useData();
  const [ev, setEv] = useState(null);

  useEffect(() => {
    if (data) {
      setEv(
        data.subjects
          .flatMap((e) => {
            let arr = [];
            if (e.homework) {
              arr = [...e.homework];
            }
            if (e.assignment) {
              arr = [...e.assignment, ...arr];
            }
            return arr;
          })
          .map((e) => {
            return {
              ...e,
              color: data.subjects.find((subject) => subject._id === e.subject)
                .color,
            };
          })
      );
      console.log(
        data.subjects
          .flatMap((e) => {
            let arr = [];
            if (e.homework) {
              arr = [...e.homework];
            }
            if (e.assignment) {
              arr = [...e.assignment, ...arr];
            }
            return arr;
          })
          .map((e) => {
            return {
              ...e,
              color: data.subjects.find((subject) => subject._id === e.subject)
                .color,
            };
          })
      );
    }
  }, [data]);

  const events = [
    {
      date: new Date(2025, 4, 5),
      title: "Математикийн шалгалт",
      color: "#C11700",
    },
    {
      date: new Date(2025, 4, 10),
      title: "Монгол хэлний хичээл",
      color: "#FF5A0E",
    },
    {
      date: new Date(2025, 4, 15),
      title: "Англи хэлний хичээл",
      color: "#FFCC00",
    },
    {
      date: new Date(2025, 4, 20),
      title: "Биеийн тамирын өдөр",
      color: "#00AA11",
    },
  ];

  return <CalendarComponent events={events} className="row-span-2" />;
}
