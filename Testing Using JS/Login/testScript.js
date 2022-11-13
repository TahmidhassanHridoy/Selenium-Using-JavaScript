const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_Case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get(
    "https://member.daraz.com.bd/user/login?spm=a2a0e.home.header.d5.735212f7lwlyPI&redirect=https%3A%2F%2Fwww.daraz.com.bd%2F"
  );
  //username input normal login!!
  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[1]/input"
      )
    )
    .sendKeys("01312489965");
  ///password input normal login!!
  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[2]/input"
      )
    )
    .sendKeys("tahmid1997", Key.RETURN);

  console.log(await driver.getTitle());

  if (
    (await driver.getTitle()) ===
    "Daraz.com.bd: Online Shopping Bangladesh - Mobiles, Tablets, Home Appliances, TV, Audio &amp; More"
  ) {
    console.log("Test_Case #1 Normal Login Success");
  } else {
    console.log("Test_Case #1 Normal Login Failed");
  }

  //driver.quit();
}
test_Case();
