import { join, name, coreDirectory } from "./aggregate.mjs";
import { repositoryPath } from "./get-repositories-path.mjs";

const deployCorePath = join(repositoryPath, name, coreDirectory);

export { deployCorePath };
