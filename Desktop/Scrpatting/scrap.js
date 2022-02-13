const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

// Write Headers
writeStream.write(`Title,Link,Date \n`);

request(
  "https://mybangla24.com/colleges-dhaka-bangladesh",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const ht = $(".heading3");
      const output = $(".headline3").text();
      // const $ = cheerio.load(html);
      // $(".post-preview").each((i, el) => {
      //   const title = $(el).find(".post-title").text().replace(/\s\s+/g, "");
      //   const link = $(el).find("a").attr("href");
      //   const date = $(el).find(".post-date").text().replace(/,/, "");
      //   // Write Row To CSV
      writeStream.write(`${output} \n`);
      // });
      console.log(output);
    }
  }
);
