import { join, getJSONData } from "./aggregate.mjs";
import { repositoryPath } from "./get-repositories-path.mjs";

const config = getJSONData(import.meta.url, "../../config.json");
const { name, releaseDirectory } = config["deploy"];
const releasePath = join(repositoryPath, name, releaseDirectory);

export { releasePath };
