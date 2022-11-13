const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_Case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get(
    "https://member.daraz.com.bd/user/login?spm=a2a0e.home.header.d5.735212f7lwlyPI&redirect=https%3A%2F%2Fwww.daraz.com.bd%2F"
  );

  //username input for Email validation(empty) !!

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[1]/input"
      )
    )
    .sendKeys("", Key.RETURN);

  if (
    await driver
      .findElement(
        By.xpath(
          "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[1]/span"
        )
      )
      .isDisplayed()
  ) {
    console.log("Test_Case #2.1 Email validation(empty) Success");
  } else {
    console.log("Test_Case #2.1 Email validation(empty) Failed");
  }

  //username input for Password validation(empty) !!

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[2]/input"
      )
    )
    .sendKeys("", Key.RETURN);

  if (
    await driver
      .findElement(
        By.xpath(
          "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[2]/span"
        )
      )
      .isDisplayed()
  ) {
    console.log("Test_Case #3.1 Password validation(empty) Success");
  } else {
    console.log("Test_Case #3.1 Email validation(empty) Failed");
  }

  //driver.quit();
}
test_Case();
