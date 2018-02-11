const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://fantasyfootball.telegraph.co.uk/premier-league/home');
  await page.waitFor(2000);
  await page.click('#home-login > a');
  await page.waitFor(2000);
  await page.click('#email');
  await page.keyboard.type('scottfrancisfrancis@hotmail.com');
  await page.click('#password');
  await page.keyboard.type('');
  await page.click('#submit');

  await page.waitFor(3000);

  browser.close();

  return;
};

scrape().then(() => {
    console.log('complete'); // Success!
});
