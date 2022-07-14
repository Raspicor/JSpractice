const quotes = [
    {
        quote : "When you are late, You are fucking late.", 
        author : "Park Myung Su",
    },
    {
        quote : "Please tell me, If you know I was fucked.",
        author : "Park Myung Su",
    },
    {
        quote : "Hard way is not a way.",
        author : "Park Myung Su",
    },
    {
        quote : "You shouldn't work today, If you can work tomorrow.",
        author : "Park Myung Su",
    },
    {
        quote : "People will ignore you, if you say pretty.",
        author : "Park Myung Su",
    },
    {
        quote : "You are an idiot, if you endure 3 times.",
        author : "Park Myung Su",
    },
    {
        quote : "Small is small",
        author : "Park Myung Su",
    },
    {
        quote : "You will meet enemy in your company.",
        author : "Park Myung Su",
    },
    {
        quote : "If you don't study now, you will do fucking durty work.",
        author : "Park Myung Su",
    },
    {
        quote : "Don't have to know it all.",
        author : "Park Myung Su",
    },
    {
        quote : "Show your gratitude with money.",
        author : "Park Myung Su",
    }
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");


const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;