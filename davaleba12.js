//1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით
//const fs = require("fs").promises;
//async function main() {
  //try {
   // await fs.mkdir("folder1");
   // await fs.mkdir("folder2");
  //  console.log("Folders created");
   // await fs.writeFile("file1.txt", "content1");
   // await fs.writeFile("file2.txt", "content2");
    // await fs.writeFile("file3.txt", "content3");
   // console.log("Files created");
    //const stat1 = await fs.lstat("folder1");
  //  console.log("folder1 lstat:", stat1);
  //  const stat2 = await fs.lstat("folder2");
  //  console.log("folder2 lstat:", stat2);
   // const stat3 = await fs.lstat("file1.txt");
   // console.log("file1.txt lstat:", stat3);
   // const stat4 = await fs.lstat("file2.txt");
   // console.log("file2.txt lstat:", stat4);
   // const stat5 = await fs.lstat("file3.txt");
   // console.log("file3.txt lstat:", stat5);
   // await fs.rmdir("folder1");
   // await fs.rmdir("folder2");
   // console.log("Folders deleted successfully");
  //} catch (error) {
  //  console.error("Error:", error.message);
 // }
//}
//main()

//2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით შექმენი 
// (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js შემდეგ ამ index.js-ით ჩაწერე 
// მთავარფოლდერში message.txt, ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი 
// და ისევ იგივეში ჩაწერე.
//const fs = require("fs").promises;
//async function main() {
  //  try {
    //    await fs.mkdir("mainFolder");
      //  console.log("mainFolder შექმნილია");
     //   await fs.writeFile("mainFolder/index.js", "");
     //   console.log("index.js შექმნილია mainFolder-ში");
     //   await fs.writeFile("mainFolder/message.txt", "Hello, this is a sample message.");
      //  console.log("message.txt შექმნილია მთავარ ფოლდერში");
      //  const messageContent = await fs.readFile("mainFolder/message.txt", "utf-8");
      //  const reversedMessage = messageContent.split("").reverse().join("");
      //  await fs.writeFile("mainFolder/message.txt", reversedMessage);
      //  console.log("message.txt content reversed and updated");
  //  } catch (error) {
   //     console.error("Error:", error.message);
  //  }       
//}
//main()

//3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა
//  იყოს .txt. 3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,ისეთი ფაილები, 
// რომლის გაფართოვებაცაა .txt და ისინი ჩაწერო საერთო all.txt-ში
//const fs = require("fs").promises;
//async function main() {
   // try {
       // await fs.mkdir("myFolder");
       // console.log("myFolder შექმნილია");
       // await fs.writeFile("myFolder/file1.txt", "This is file 1.");
       //await fs.writeFile("myFolder/file2.txt", "This is file 2.");
       // await fs.writeFile("myFolder/file3.txt", "This is file 3.");
       // await fs.writeFile("myFolder/script1.js", "console.log('This is script 1');");
       // await fs.writeFile("myFolder/script2.js", "console.log('This is script 2');");
       // await fs.writeFile("myFolder/script3.js", "console.log('This is script 3');");
       // console.log("6 ფაილი შექმნილია myFolder-ში");
        //await fs.writeFile("myFolder/all.txt", "");
       // const files = await fs.readdir("myFolder");
       // for (const file of files) {
          //  if (file.endsWith(".txt")) {
              //  const content = await fs.readFile(`myFolder/${file}`, "utf-8");
              //  await fs.appendFile("myFolder/all.txt", content + "\n");
           // }
       // }
       // console.log("txt ფაილები ჩაწერილია all.txt-ში");
    //} catch (error) {
     //   console.error("Error:", error.message);
   // }       
//}
//main()


//4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/animals") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Animals endpoint");
  } else if (req.url === "/cars") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Cars endpoint");
  } else if (req.url === "/motorcycle") {           
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Motorcycle endpoint");
    } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }

});
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});


