const fs = require("fs");
const builder = require("xmlbuilder");

const routes = ["Your routes here ex: `/home` "];

const urlset = builder.create("urlset", { version: "1.0", encoding: "UTF-8" });

routes.forEach((route) => {
  urlset.ele("url").ele("loc", `https://www.yourdomain.com${route}`);
});

const xml = urlset.end({ pretty: true });

fs.writeFileSync("sitemap.xml", xml);

console.log("Sitemap generated successfully!");
