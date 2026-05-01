/**
 * demo puzzles only
 */

import { Puzzle } from "@/types/game";

export const puzzles: Puzzle[] = [
  {
    id: "puzzle-demo-1",
    date: "2026-05-01",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Salitang nangangahulugang 'bahay'",
        words: [
          { id: "w1", text: "bahay", language: "tagalog" },
          { id: "w2", text: "balay", language: "pangasinense" },
          { id: "w3", text: "bale", language: "kapampangan" },
          { id: "w4", text: "tahanan", language: "tagalog" },
        ],
      },
      {
        id: "g2",
        color: "green",
        connection: "Salitang tungkol sa 'araw'",
        words: [
          { id: "w5", text: "araw", language: "tagalog" },
          { id: "w6", text: "aldaw", language: "kapampangan" },
          { id: "w7", text: "agew", language: "pangasinense" },
          { id: "w8", text: "umaga", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Mga pagkain",
        words: [
          { id: "w9", text: "kanin", language: "tagalog" },
          { id: "w10", text: "tinapay", language: "tagalog" },
          { id: "w11", text: "lugaw", language: "tagalog" },
          { id: "w12", text: "sisig", language: "kapampangan" },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Mga salitang may kaugnayan sa kalikasan",
        words: [
          { id: "w13", text: "puno", language: "tagalog" },
          { id: "w14", text: "ibon", language: "tagalog" },
          { id: "w15", text: "ilog", language: "tagalog" },
          { id: "w16", text: "dagat", language: "tagalog" },
        ],
      },
    ],
  },

  {
    id: "puzzle-demo-2",
    date: "2026-05-02",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Salitang nangangahulugang 'nanay'",
        words: [
          { id: "w1", text: "ina", language: "tagalog" },
          { id: "w2", text: "nanay", language: "tagalog" },
          { id: "w3", text: "inang", language: "pangasinense" },
          { id: "w4", text: "nay", language: "kapampangan" },
        ],
      },
      {
        id: "g2",
        color: "green",
        connection: "Mga salitang kaugnay ng 'pag-ibig'",
        words: [
          { id: "w5", text: "puso", language: "tagalog" },
          { id: "w6", text: "sinta", language: "tagalog" },
          { id: "w7", text: "gugma", language: "kapampangan" },
          { id: "w8", text: "pagmamahal", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Mga gamit sa katawan",
        words: [
          { id: "w9", text: "kamay", language: "tagalog" },
          { id: "w10", text: "paa", language: "tagalog" },
          { id: "w11", text: "ulo", language: "tagalog" },
          { id: "w12", text: "mata", language: "tagalog" },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Mga salitang may kaugnayan sa bahay",
        words: [
          { id: "w13", text: "bubong", language: "tagalog" },
          { id: "w14", text: "dingding", language: "tagalog" },
          { id: "w15", text: "pintuan", language: "tagalog" },
          { id: "w16", text: "bintana", language: "tagalog" },
        ],
      },
    ],
  },
];
