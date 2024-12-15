const data = {
  header: [
    {
      id: 1,
      text: "Поиск фильмов",
      link: "./",
      class: "active",
    },
    {
      id: 2,
      text: "Мои фильмы",
      link: "./",
      class: "",
      countFavorites: 2,
    },
    {
      id: 3,
      text: "Войти",
      link: "./",
      class: "link-icon",
    },
  ],

  mainPage: {
    title: "Поиск",
    text: "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.",
    button: "Искать",
    placeholder: "Введите название",
    cardsFilms: [
      {
        id: 1,
        title: "Black Widow",
        image: "/image/black-widow.jpg",
        rating: 324,
      },
      {
        id: 2,
        title: "Shang Chi",
        image: "/image/shang-chi.jpg",
        rating: 124,
      },
      {
        id: 3,
        title: "Loki",
        image: "/image/loki.jpg",
        rating: 235,
      },
      {
        id: 4,
        title: "How I Met Your Mother",
        image: "/image/how-i.jpg",
        rating: 123,
      },
      {
        id: 5,
        title: "Money Heist",
        image: "/image/money-heist.jpg",
        rating: 8125,
      },
      {
        id: 6,
        title: "Friends",
        image: "/image/friends.jpg",
        rating: 123,
      },
      {
        id: 7,
        title: "The Big Bang Theory",
        image: "/image/big-bang.jpg",
        rating: 12,
      },
      {
        id: 8,
        title: "Two And a Half Men",
        image: "/image/two-man.jpg",
        rating: 456,
      },
    ],
  },

  entrancePage: {
    title: "Вход",
    button: "Войти в профиль ",
    placeholder: "Ваше имя",
  },

  filmPage: {
    text: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  },

  favoritesPage: {
    title: "Избранное",
  },
};

export default data;
