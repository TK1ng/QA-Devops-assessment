
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('Bot card elements displayed when draw button is clicked', async () => {
    const drawBtn = await driver.findElement(By.id('draw'));
    await drawBtn.click();
    const botCard = await driver.findElement(By.xpath('//div[@class="bot-card outline"]'));
    const displayed = await botCard.isDisplayed();
    expect(displayed).toBe(true);
    await driver.sleep(3000)
})

test('Selected bot displays in player duo section', async () => {
    const drawBtn = await driver.findElement(By.id('draw'));
    await drawBtn.click();
    const botName = await driver.findElement(By.xpath('//div[@class="bot-card outline"]//h3')).getText();
    await driver.findElement(By.className('bot-btn')).click();
    const selectedBot = await driver.findElement(By.xpath('//div[@id="player-duo"]//h3')).getText();
    expect(botName).toBe(selectedBot);
})