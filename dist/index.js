#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync, existsSync } from "fs";
import chalk from "chalk";
const program = new Command();
program
    .name("my-cli-tool")
    .description("A simple CLI tool in TypeScript")
    .version("1.0.0");
program
    .command("greet <name>")
    .description("Greet a user")
    .action((name) => {
    console.log(chalk.green(`Hello, ${name}!`));
});
program
    .command("read <filePath>")
    .description("Read a file and display its content")
    .action((filePath) => {
    if (!existsSync(filePath)) {
        console.log(chalk.red("Error: File does not exist!"));
        return;
    }
    try {
        const content = readFileSync(filePath, "utf8");
        console.log(chalk.blue("\nFile Content:\n"));
        console.log(content);
    }
    catch (error) {
        console.log(chalk.red("Error reading the file!"));
    }
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map