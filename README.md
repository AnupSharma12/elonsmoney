# Spend Elon Musk's Money

A web app where you can spend Elon Musks fortune of $830 billion. You can buy anything from a $1 candy bar to a $44 billion Twitter deal. As you spend you will see your balance go down in time. It will also show you how much of his wealth you actually spent.

## Try It Live

**[Open the app](https://anupsharma12.github.io/elonsmoney)** — or clone the repo and open `index.html` in any browser. No setup required.

## Quick Start

```bash
git clone https://github.com/AnupSharma12/elonsmoney.git
cd elonsmoney
# Open index.html in your browser
```

That's it. Plain HTML, CSS, and JavaScript. No bundler, no dependencies.

## Features

- **$830 Billion to Spend**. Elon has this money you can use it all
- **40+ Items**. You can buy, than 40 things from candy for $1 to a cruise ship for $930 million
- **Live Balance**. Your balance updates as you make buys and sells
- **Smart Controls**. You can't buy things you can't afford; you can sell items to get some money back
- **Itemized Receipt**. You can see what you bought how much you spent and what part of Elons fortune you used
- **Sticky Balance Bar**. You can see your balance as you scroll through things
- **Responsive Grid**. This works on any size screen
  
## How to Run

1. Clone the repo (or download the ZIP)
2. Open `index.html` in Chrome, Firefox, Safari, or Edge
3. Start spending

No server needed. Nothing to install. Works offline.

## How It Works

I am using pure vanilla JavaScript for this. There are no frameworks involved. All of my item data is stored in a file called `script.js`. When the application loads it reads the item cards that're in the web page builds a list of them and adds buttons to buy and sell the items. Every time I make a purchase the balance and the number of items I have are updated away.

The receipt is made when the system looks for items that you have than zero of. The percentage is figured out by taking what you spent in total and dividing that by eight hundred thirty billion dollars. This means the percentage is really, about how much you spent compared to eight hundred thirty billion dollars.

The whole app is under 100KB.

## Item Catalog

| Item | Price |
|------|-------|
| Candy | $1 |
| Coca Cola | $2 |
| Burger | $6 |
| Pizza | $10 |
| Slipper | $24 |
| Skateboard | $50 |
| AirPods | $200 |
| 1 Year of Netflix | $350 |
| Gaming Console | $400 |
| Drone | $400 |
| Bike | $800 |
| iPhone 17 Pro Max | $1,200 |
| Kitten | $1,500 |
| Puppy | $1,500 |
| MacBook Pro | $1,500 |
| Nikon D850 | $2,200 |
| Horse | $2,500 |
| Gaming PC | $3,000 |
| Hot Tub | $6,000 |
| Luxury Wine | $7,000 |
| Diamond Ring | $10,000 |
| Neuralink Implant | $10,000 |
| Jet Ski | $12,000 |
| Rolex | $15,000 |
| VR Racing Simulator | $20,000 |
| Tesla Cybertruck | $80,000 |
| Tesla Model S | $85,000 |
| Subscription to Every Streaming Platform for 80 Years | $120,000 |
| Monster Truck | $150,000 |
| Tour All 7 Wonders of the World | $150,000 |
| Ferrari | $250,000 |
| Single Family Home | $300,000 |
| Rolls-Royce | $700,000 |
| Gold Bar | $700,000 |
| 1 Month in Royal Suite of Burj Al Arab | $720,000 |
| Super Bowl Ad | $5,250,000 |
| Yacht | $7,500,000 |
| M1 Abrams Tank | $8,000,000 |
| Formula 1 Car | $15,000,000 |
| Apache Helicopter | $31,000,000 |
| Mansion | $45,000,000 |
| Plant 100 Million Trees | $50,000,000 |
| SpaceX Rocket Launch | $67,000,000 |
| Private Jet | $75,000,000 |
| Make a Movie | $100,000,000 |
| Boeing 747 | $148,000,000 |
| Mona Lisa | $780,000,000 |
| Skyscraper | $850,000,000 |
| Cruise Ship | $930,000,000 |
| NBA Team | $2,120,000,000 |
| Twitter | $44,000,000,000 |

## Credits

- Inspired by [Spend Bill Gates' Money](https://neal.fun/spend/) by Neal Agarwal
- Built with plain HTML, CSS, and JavaScript
- Photos from Unsplash and product manufacturers
- Elon Musk photo from public sources
