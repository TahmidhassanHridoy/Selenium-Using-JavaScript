const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_Case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get(
    "https://member.daraz.com.bd/user/login?spm=a2a0e.home.header.d5.163a12f7f2npbY&redirect=https%3A%2F%2Fwww.daraz.com.bd%2F%3Fspm%3Da2a0e.pdp.header.dhome.5b3ejGM7jGM7gf"
  );

  /////////////////////////login
  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[1]/input"
      )
    )
    .sendKeys("01312489965");

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[2]/div/div[2]/div/div[2]/form/div/div[1]/div[2]/input"
      )
    )
    .sendKeys("tahmid1997", Key.RETURN);

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[1]/div/div/div[1]/div/div/div[2]/div/div[2]/form/div/div[1]/input[1]"
      )
    )
    .sendKeys(
      "Apple MacBook Air M1 Chip 13 inch 8GB RAM 256GB SSD Silver",
      Key.RETURN
    );

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[3]/div/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div[2]/a"
      )
    )
    .click();

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[4]/div/div[3]/div[2]/div/div[1]/div[12]/div/div/div/div/div[1]/a[1]"
      )
    )
    .click();

  await driver
    .findElement(
      By.className(
        "add-to-cart-buy-now-btn  pdp-button pdp-button_type_text pdp-button_theme_orange pdp-button_size_xl"
      )
    )
    .click();

  await driver.findElement(By.className("")).click();

  await driver.findElement(By.xpath("")).click();

  await driver.findElement(By.xpath("")).sendKeys("2", Key.RETURN);

  await driver.findElement(By.xpath("")).click();

  await driver.findElement(By.xpath("")).click();

  await driver.findElement(By.xpath("")).sendKeys("1");

  await driver.findElement(By.xpath("")).click();

  /* if (
    (await driver.getTitle()) ===
    "Daraz.com.bd: Online Shopping Bangladesh - Mobiles, Tablets, Home Appliances, TV, Audio &amp; More"
  ) {
    console.log("Test_Case #1 Normal Login Success");
  } else {
    console.log("Test_Case #1 Normal Login Failed");
  }
*/
  //driver.quit();
}
test_Case();
