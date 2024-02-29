const theQuote = document.querySelector(".quote");
const thePerson = document.querySelector(".person");
const btn = document.querySelector("#newquote");

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Failure is simply the opportunity to begin again, this time more intelligently.",
    person: "Henry Ford",
  },
  {
    quote:
      "The difference between ordinary and extraordinary is that little extra.",
    person: "Jimmy Johnson",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    person: "Aristotle Onassis",
  },
  {
    quote: "The mind is everything. What you think you become.",
    person: "Buddha",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    person: "Helen Keller",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    person: "Mark Twain",
  },
  {
    quote: "Life is 10% what happensson  to me and 90% how I react to it.",
    person: "Charles R. Swindoll",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  theQuote.innerText = quotes[random].quote;
  thePerson.innerText = quotes[random].person;
});
