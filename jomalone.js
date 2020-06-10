const puppeteer = require('puppeteer');

let scrape = (async () => {
    try{
    const browser = await puppeteer.launch({ headless: false }); 
    const page = await browser.newPage();
    //const page2 = await browser.newPage();
    await page.goto('https://www.jomalone.com/samples/samples.tmpl?PROMO=pick1&cm_mmc=Linkshare-_-Jv*v1/Wldzg-_-1-_-10');
    // await page.waitFor(1000);
    
    // let content1 = await page.evaluate(() => {
    //      let uPage1 = document.getElementById("size-120223").innerText; 
    //      alert(uPage1);
    //      return uPage1;
    // })
    // let content2 = await page.evaluate(() => {
    //      let uPage2 = document.getElementById('product-name-120223').innerText; 
    //      alert(uPage2);
    //      return uPage2;
    //     })

    const result1 = await page.evaluate(() => {
        let content1 = document.getElementById('size-120223').innerText;
        //alert(content1);
        let content2 = document.getElementById('product-name-120223').innerHTML; 
        let content23 = content2.split(" ");
        let content = -1;
        let result = content23[content23.length - 1];
        if(content1 == '100ml' && result == 'Oil'){
            content = 8;
        }  
        return content;
        // {
        //     content1,
        //     content2,
        //     result,
        //     content
        // };
    });

    browser.close();
    return  result1;
    } catch (err) {
        console.log(err);
    }
});

scrape().then(value => {
    console.log(value); 
});
