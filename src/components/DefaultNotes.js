//To only keep 8 digits, too long...
const DefaultNotes = [
  {
    // id: uuidv4().slice(0, 8),
    id: 1,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 2,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 3,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 4,
    title: "Lorem",
    date: "12/5/22",
    note: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 5,
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
    date: "12/5/22",
    note: "lorem ",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 6,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 7,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 8,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 9,
    title: "Lorem",
    date: "12/5/22",
    note: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 10,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 11,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 12,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 13,
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
    date: "12/5/22",
    note: "lorem ",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 14,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 15,
    title: "Lorem",
    date: "12/5/22",
    note: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 16,
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
    date: "12/5/22",
    note: "lorem ",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 17,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 18,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 19,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 20,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 21,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 22,
    title: "Lorem",
    date: "12/5/22",
    note: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 23,
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
    date: "12/5/22",
    note: "lorem ",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 24,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 25,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 26,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 27,
    title: "Lorem",
    date: "12/5/22",
    note: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 28,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 29,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 30,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 31,
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
    date: "12/5/22",
    note: "lorem ",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 32,
    title: "Diary",
    date: "12/5/22",
    note: "a long one aaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 33,
    title: "Lorem",
    date: "12/5/22",
    note: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 34,
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error rerum dolore? Architecto porro assumenda voluptatem hic. Minima a asperiores vitae officiis odio, facilis quasi fuga nulla, tempore ducimus aperiam.",
    date: "12/5/22",
    note: "lorem ",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 35,
    title: "A note",
    date: "12/5/22",
    note: "Just testing my notes.",
  },
  {
    // id: uuidv4().slice(0, 8),
    id: 36,
    title: "Recently",
    date: "12/5/22",
    note: "haha lol",
  },
];

export default DefaultNotes;
