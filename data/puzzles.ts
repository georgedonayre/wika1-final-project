/**
 * demo puzzles only
 */

import { Puzzle } from "@/types/game";

export const puzzles: Puzzle[] = [
  {
    id: "puzzle-demo-1",
    date: "2026-05-02",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Mga bagay na laging may plastik na pambalot sa bahay",
        words: [
          { id: "w1", text: "remote control", language: "tagalog" },
          { id: "w2", text: "sala set", language: "tagalog" },
          { id: "w3", text: "Santo Niño", language: "tagalog" },
          { id: "w4", text: "best china", language: "tagalog" },
        ],
      },
      {
        id: "g2",
        color: "green",
        connection:
          "Mga sinasabi ng tito/tita sa family gathering na hindi mo gustong marinig",
        words: [
          { id: "w5", text: "Nagtatrabaho ka na?", language: "tagalog" },
          { id: "w6", text: "Pumayat ka ah.", language: "tagalog" },
          { id: "w7", text: "May boyfriend ka na?", language: "tagalog" },
          { id: "w8", text: "Tumaba ka ah.", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Excuses ng mga Pinoy sa pagiging late",
        words: [
          { id: "w9", text: "trapik", language: "tagalog" },
          { id: "w10", text: "brownout", language: "tagalog" },
          { id: "w11", text: "umuulan", language: "tagalog" },
          {
            id: "w12",
            text: "nakalimutan mag-alarm",
            language: "tagalog",
          },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Gamit sa loob ng banyo sa baguio",
        words: [
          { id: "w13", text: "blue na drum", language: "tagalog" },
          { id: "w14", text: "heater", language: "tagalog" },
          { id: "w15", text: "pang bomba", language: "tagalog" },
          { id: "w16", text: "bidet", language: "tagalog" },
        ],
      },
    ],
  },
];
