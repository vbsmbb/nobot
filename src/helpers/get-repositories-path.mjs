import { join, getAppPath } from "./aggregate.mjs";

const appPath = getAppPath(import.meta.url);
const repositoryPath = join(appPath, "..", "..", "repositories");

export { repositoryPath };
