import { join } from "./aggregate.mjs";
import { repositoryPath } from "./get-repositories-path.mjs";

const templatesPath = join(repositoryPath, "templates");

export { templatesPath };
