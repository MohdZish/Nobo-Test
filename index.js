const fs = require('fs');
const puppeteer = require('@mohdzish/nobo-test/node_modules/puppeteer'); // le library puppeteer (comme Selenium)

module.exports = {
    loginFacebook
}


loginFacebook(process.argv[2], process.argv[3]);

function loginFacebook (email, password) {
    (async () => {
        // les informations facebook qu'on passe 
        var monData = {
            "username": email, 
            "password": password 
        }

        // initializer le library puppeteer
        const browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        
        // aller à page login de facebook
        await page.goto('https://www.facebook.com/login/', { waitUntil: 'networkidle0' });

        // ENLEVER LE COOKIES menu demandés au debut de Facebook
        await page.click(
            '[data-testid="cookie-policy-dialog-accept-button"]'
        );

        // Entrer les identifiants et mots de passes 
        await page.type('#email', monData.username, { delay: 100 });
        await page.type('#pass', monData.password, { delay: 100 });
        
        // Click le bouton login button pour enfin entrer dans facebook
        await page.click('#loginbutton');

        // On verifie pour wue le navigation est terminé
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.waitForTimeout(15000);

        // just un verfication 
        /*try {
            await page.waitForFunction('[data-click="profile_icon"]');
        }
        catch (error) {
            console.log('Il y avait un échec :(');
            //process.exit(0);
        }
    */
        debugger;

    })();
}

