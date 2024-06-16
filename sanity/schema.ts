import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";
import skill from "./schemaTypes/skill";
import experience from "./schemaTypes/experience";
import social from "./schemaTypes/social";
import project from "./schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, experience, social, project],
};
