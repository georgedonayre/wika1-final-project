/**
 * demo puzzles only
 */

import { Puzzle } from "@/types/game";

export const puzzles: Puzzle[] = [
  {
    id: "puzzle-demo-3",
    date: "2026-05-03",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Salitang nangangahulugang 'tubig'",
        words: [
          { id: "w1", text: "tubig", language: "tagalog" },
          { id: "w2", text: "danum", language: "kapampangan" },
          { id: "w3", text: "danum", language: "pangasinense" },
          { id: "w4", text: "linteg", language: "kapampangan" }, // distractor feel inside group theme (less obvious)
        ],
      },
      {
        id: "g2",
        color: "green",
        connection: "Mga bahagi ng bahay",
        words: [
          { id: "w5", text: "bubong", language: "tagalog" },
          { id: "w6", text: "dingding", language: "tagalog" },
          { id: "w7", text: "bintana", language: "tagalog" },
          { id: "w8", text: "pintuan", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Mga salitang may kaugnayan sa galaw",
        words: [
          { id: "w9", text: "takbo", language: "tagalog" },
          { id: "w10", text: "lakad", language: "tagalog" },
          { id: "w11", text: "talon", language: "tagalog" },
          { id: "w12", text: "akyat", language: "tagalog" },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Mga pagkain",
        words: [
          { id: "w13", text: "kanin", language: "tagalog" },
          { id: "w14", text: "tinapay", language: "tagalog" },
          { id: "w15", text: "lugaw", language: "tagalog" },
          { id: "w16", text: "sisig", language: "kapampangan" },
        ],
      },
    ],
  },

  {
    id: "puzzle-demo-4",
    date: "2026-05-04",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Salitang nangangahulugang 'mata'",
        words: [
          { id: "w1", text: "mata", language: "tagalog" },
          { id: "w2", text: "mata", language: "kapampangan" },
          { id: "w3", text: "mata", language: "pangasinense" },
          { id: "w4", text: "tan-aw", language: "pangasinense" },
        ],
      },
      {
        id: "g2",
        color: "green",
        connection: "Mga emosyon",
        words: [
          { id: "w5", text: "tuwa", language: "tagalog" },
          { id: "w6", text: "lungkot", language: "tagalog" },
          { id: "w7", text: "galit", language: "tagalog" },
          { id: "w8", text: "takot", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Mga anyong tubig",
        words: [
          { id: "w9", text: "ilog", language: "tagalog" },
          { id: "w10", text: "dagat", language: "tagalog" },
          { id: "w11", text: "lawa", language: "tagalog" },
          { id: "w12", text: "batis", language: "tagalog" },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Mga salitang may unlaping 'pag-'",
        words: [
          { id: "w13", text: "pag-ibig", language: "tagalog" },
          { id: "w14", text: "pag-asa", language: "tagalog" },
          { id: "w15", text: "paglakad", language: "tagalog" },
          { id: "w16", text: "pagkain", language: "tagalog" },
        ],
      },
    ],
  },

  {
    id: "puzzle-demo-5",
    date: "2026-05-05",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Salitang nangangahulugang 'puso'",
        words: [
          { id: "w1", text: "puso", language: "tagalog" },
          { id: "w2", text: "pusu", language: "kapampangan" },
          { id: "w3", text: "puso", language: "pangasinense" },
          { id: "w4", text: "dibdib", language: "tagalog" },
        ],
      },
      {
        id: "g2",
        color: "green",
        connection: "Mga hayop",
        words: [
          { id: "w5", text: "aso", language: "tagalog" },
          { id: "w6", text: "pusa", language: "tagalog" },
          { id: "w7", text: "manok", language: "tagalog" },
          { id: "w8", text: "baboy", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Mga kulay",
        words: [
          { id: "w9", text: "pula", language: "tagalog" },
          { id: "w10", text: "asul", language: "tagalog" },
          { id: "w11", text: "dilaw", language: "tagalog" },
          { id: "w12", text: "itim", language: "tagalog" },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Mga pandiwang may 'mag-'",
        words: [
          { id: "w13", text: "maglakadddddddd", language: "tagalog" },
          { id: "w14", text: "magluto", language: "tagalog" },
          { id: "w15", text: "magbasa", language: "tagalog" },
          { id: "w16", text: "magtulog", language: "tagalog" },
        ],
      },
    ],
  },

  {
    id: "puzzle-demo-6",
    date: "2026-05-06",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Salitang nangangahulugang 'ulan'",
        words: [
          { id: "w1", text: "ulan", language: "tagalog" },
          { id: "w2", text: "uran", language: "kapampangan" },
          { id: "w3", text: "uran", language: "pangasinense" },
          { id: "w4", text: "ambon", language: "tagalog" },
        ],
      },
      {
        id: "g2",
        color: "green",
        connection: "Mga bahagi ng katawan",
        words: [
          { id: "w5", text: "kamay", language: "tagalog" },
          { id: "w6", text: "paa", language: "tagalog" },
          { id: "w7", text: "ulo", language: "tagalog" },
          { id: "w8", text: "mata", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Mga bagay sa paaralan",
        words: [
          { id: "w9", text: "pisara", language: "tagalog" },
          { id: "w10", text: "lapis", language: "tagalog" },
          { id: "w11", text: "aklat", language: "tagalog" },
          { id: "w12", text: "mesa", language: "tagalog" },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Mga salitang may hulaping '-an'",
        words: [
          { id: "w13", text: "kainan", language: "tagalog" },
          { id: "w14", text: "tulugan", language: "tagalog" },
          { id: "w15", text: "laruan", language: "tagalog" },
          { id: "w16", text: "lakaran", language: "tagalog" },
        ],
      },
    ],
  },
];
