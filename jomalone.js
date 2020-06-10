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
        let content1 = document.getElementById('size-106993').innerText;
        //alert(content1);
        let content2 = document.getElementById('product-name-106993').innerHTML; 
        //alert(content2);
        let content23 = content2.split(" ");
        let content = -1;
        let r1 = content23[content23.length - 1];
        if (content1 == '100ml' && r1 == '100ml'){
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

    if(result1 == 8) {
        browser.close();
        return 1;
    }
    
    const result2 = await page.evaluate(() => {
        let content1 = document.getElementById('size-106994').innerText;
        //alert(content1);
        let content2 = document.getElementById('product-name-106994').innerHTML;
        let content23 = content2.split(" ");
        let content = -1;
        let r2 = content23[content23.length - 1];
        if (content1 == '100ml' && r2 == '100ml') {
            content = 8;
        }
        return content;
    });

    if (result2 == 8) {
        browser.close();
        return 1;
    }

    const result3 = await page.evaluate(() => {
        let content1 = document.getElementById('size-94513').innerText;
        //alert(content1);
        let content2 = document.getElementById('product-name-94513').innerHTML;
        let content23 = content2.split(" ");
        let content = -1;
        let r3 = content23[content23.length - 1];
        if (content1 == '100ml' && r3 == '100ml') {
            content = 8;
        }
        return content;
    });

    if (result3 == 8) {
        browser.close();
        return 1;
    }

    const result4 = await page.evaluate(() => {
        let content1 = document.getElementById('size-120223').innerText;
        //alert(content1);
        let content2 = document.getElementById('product-name-120223').innerHTML;
        let content23 = content2.split(" ");
        let content = -1;
        let r4 = content23[content23.length - 1];
        if (content1 == '100ml' && r4 == '100ml') {
            content = 8;
        }
        return content;
    });
    if (result4 == 8) {
        browser.close();
        return 1;
    }

    const result5 = await page.evaluate(() => {
        let content1 = document.getElementById('size-119624').innerText;
        //alert(content1);
        let content2 = document.getElementById('product-name-119624').innerHTML;
        let content23 = content2.split(" ");
        let content = -1;
        let r5 = content23[content23.length - 1];
        if (content1 == '100ml' && r5 == '100ml') {
            content = 8;
        }
        return content;
    });

    if (result5 == 8) {
        browser.close();
        return 1;
    }

    const result6 = await page.evaluate(() => {
        let content1 = document.getElementById('size-120208').innerText;
        //alert(content1);
        let content2 = document.getElementById('product-name-120208').innerHTML;
        let content23 = content2.split(" ");
        let content = -1;
        let r6 = content23[content23.length - 1];
        if (content1 == '100ml' && r6 == '100ml') {
            content = 8;
        }
        return content;
    });

    if (result6 == 8) {
        browser.close();
        return 1;
    }

    browser.close();
    return -1;
    } catch (err) {
        console.log(err);
    }
});

scrape().then(value => {
    console.log(value); 
});
