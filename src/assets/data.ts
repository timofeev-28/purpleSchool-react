const data = {
  cardsFilms: [
    {
      id: "1",
      title: "Black Widow",
      image: "/image/black-widow.jpg",
      rating: 324,
      favorites: true,
    },
    {
      id: "2",
      title: "Shang Chi",
      image: "/image/shang-chi.jpg",
      rating: 124,
      favorites: true,
    },
    {
      id: "3",
      title: "Loki",
      image: "/image/loki.jpg",
      rating: 235,
      favorites: false,
    },
    {
      id: "4",
      title: "How I Met Your Mother",
      image: "/image/how-i.jpg",
      rating: 123,
      favorites: false,
    },
    {
      id: '5',
      title: "Money Heist",
      image: "/image/money-heist.jpg",
      rating: 8125,
      favorites: false,
    },
    {
      id: '6',
      title: "Friends",
      image: "/image/friends.jpg",
      rating: 123,
      favorites: false,
    },
    {
      id: "7",
      title: "The Big Bang Theory",
      image: "/image/big-bang.jpg",
      rating: 12,
      favorites: true,
    },
    {
      id: "8",
      title: "Two And a Half Men",
      image: "/image/two-man.jpg",
      rating: 456,
      favorites: false,
    },
  ],
  favorites: [
    {
      id: '1',
      title: "Black Widow",
      image: "/image/black-widow.jpg",
      rating: 324,
      favorites: true,
    },
    {
      id: "5",
      title: "Money Heist",
      image: "/image/money-heist.jpg",
      rating: 8125,
      favorites: true,
    },
  ],

  film: {
      title: "Avengers: Endgame",
      image: "/image/avengers.jpg",
      alt: "Avengers: Endgame movie poster",
      description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.',
      rating: 8.3,
      favorites: true,
      type: 'Movie',
      date: "2019-04-24",
      length: 181,
      genre: "Adventure,  Science Fiction, Action",
      reviews: [
        {
          title: 'Not as good as infinity war..',
          date: "2019-04-24",
          description: 'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...'
        }
      ]
    }
};

export default data;
