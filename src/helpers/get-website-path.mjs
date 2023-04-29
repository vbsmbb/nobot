import { join, name } from "./aggregate.mjs";
import { repositoryPath } from "./get-repositories-path.mjs";

const websitePath = join(repositoryPath, name);

export { websitePath };
