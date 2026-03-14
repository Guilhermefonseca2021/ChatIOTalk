import fs from "fs";

for (let i = 1; i <= 5; i++) {
  const file = "async-txt" + i + ".txt";

  fs.writeFile(file, "Hello Node.js!", function (err) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(file + " criado com sucesso");
  });
}