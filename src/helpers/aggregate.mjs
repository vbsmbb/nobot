import shelljs from "shelljs";
import { join } from "path";
import { existsSync } from "fs";
import { getAppPath, getJSONData } from "./appUtils.mjs";
import { log } from "../helpers/log.mjs";
import { LOG_LEVELS } from "../constants/log-levels.mjs";
import { COMMON } from "../constants/common.mjs";
import { TEMPLATES } from "../constants/templates.mjs";
import { create } from "../creators/rock-paper-scissors/index.mjs";
import { transform } from "../creators/rock-paper-scissors/transform.mjs";

const { cd, exec } = shelljs;
const config = getJSONData(import.meta.url, "../../config.json");
const { templates } = config;
const { baseBranch, name, coreDirectory, releaseDirectory, repo } =
  config["deploy"];
const { authKey, endpoint } = config["api"];
const { ERROR, INFO, SUCCESS, WARNING } = LOG_LEVELS;
const { JSON_WHITESPACE, GAME_JSON, NO_CHOICE_MADE } = COMMON;
const { ROCK_PAPER_SCISSORS } = TEMPLATES;

export {
  cd,
  exec,
  getJSONData,
  getAppPath,
  join,
  baseBranch,
  name,
  coreDirectory,
  releaseDirectory,
  authKey,
  endpoint,
  repo,
  templates,
  log,
  ERROR,
  INFO,
  SUCCESS,
  WARNING,
  existsSync,
  JSON_WHITESPACE,
  GAME_JSON,
  NO_CHOICE_MADE,
  ROCK_PAPER_SCISSORS,
  create,
  transform,
};
