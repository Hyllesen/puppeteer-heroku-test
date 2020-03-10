const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const tab = await browser.newPage();
  const text = await (await tab.goto("https://myip.dk")).text();
  console.log(text);
  console.log("done");
}

main();
