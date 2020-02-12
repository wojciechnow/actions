// e2e/runWithSelenium.ts
const webdriver = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const assert = require("assert");
const path = require("path");
const {
    Builder,
    By,
    Key,
    until,
    WebDriver,
    Capabilities
} = require('selenium-webdriver');
const {
    expect
} = require('chai');

let driver = webdriver.WebDriver;

describe('my test', () => {
    before(async () => {
        require("chromedriver");
        capabilities = webdriver.Capabilities.chrome();
        driver = await new webdriver.Builder()
            .withCapabilities(capabilities)
            .build();
    });

    const x = process.env.pusher;
    if (x.includes('wojciech')) {
        it('Just testing flow for selenium in SB company', async () => {
            await driver.manage().window().maximize();
            await driver.get('https://softwarebrothers.co/');
            await driver.findElement(By.linkText("Services")).click();
            await driver.sleep(2000);
            await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//a[@aria-label= 'dismiss cookie message' and @role='button']")))).click();
            await driver.sleep(2000);
            await driver.findElement(By.className(("webdev"))).click();
            await driver.sleep(2000);
            const title = await (await driver.findElement(By.xpath("//*[text()='Web Design and Development']"))).getText();
            expect(title.toUpperCase()).to.have.string('WEB DESIGN AND DEVELOPMENT');
        });
    } else {
        it('Pusher testing', async () => {
            await driver.manage().window().maximize();
            await driver.get('https://softwarebrothers.co/');
            await driver.findElement(By.linkText("Services")).click();
            await driver.sleep(2000);
            await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//a[@aria-label= 'dismiss cookie message' and @role='button']")))).click();
            await driver.sleep(2000);
            await driver.findElement(By.className(("webdev"))).click();
            await driver.sleep(2000);
            const title = await (await driver.findElement(By.xpath("//*[text()='Web Design and Development']"))).getText();
            expect(title.toUpperCase()).to.have.string('WEB DESIGN AND DEVELOPMENT');
        });
    }

    after(async () => {
        await driver.quit()
    });
});