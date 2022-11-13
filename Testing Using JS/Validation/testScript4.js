const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_Case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get(
    "https://member.daraz.com.bd/user/login?spm=a2a0e.home.header.d5.735212f7lwlyPI&redirect=https%3A%2F%2Fwww.daraz.com.bd%2F"
  );

  //username input for Email validation(asd@gmail.com) !!

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[1]/input"
      )
    )
    .sendKeys("asd@gmail.com");

  //username input for Password validation(123) !!

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[2]/input"
      )
    )
    .sendKeys("123", Key.RETURN);

  if (await driver.findElement(By.className("login-title")).isDisplayed()) {
    console.log("Test_Case #2.4 Email validation(asd@gmail.com) Success");
    console.log("Test_Case #3.2 Password validation(123) Success");
  } else {
    console.log("Test_Case #3.2 Password validation(123) Failed");
    console.log("Test_Case #2.4 Email validation(asd@gmail.com) Failed");
  }

  //driver.quit();
}
test_Case();
