#! /usr/bin/env node

import { Command } from "commander";
import { getJSONData } from "./helpers/appUtils.mjs";
import { setup } from "./commands/setup.mjs";
import { game } from "./commands/game.mjs";
import { template } from "./commands/template.mjs";

const nobot = new Command();
const config = getJSONData(import.meta.url, "../package.json");
const { version } = config;

nobot
  .name("nobot")
  .description("Node Build Tool to automate builds of existing game templates")
  .version(version);

nobot
  .command("setup")
  .description("clone repository dependencies")
  .action(setup);

nobot
  .command("game <ticketId>")
  .description("create and deploy a new game reskin")
  .action(game);

nobot
  .command("template")
  .description("release core files of template")
  .option("-i, --id, [id]", "what template to release")
  .action(template);

nobot.command("*").action(() => nobot.help());

nobot.parse(process.argv);

if (!process.argv.slice(2).length) {
  nobot.help();
}
