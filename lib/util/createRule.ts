import { ESLintUtils } from "@typescript-eslint/experimental-utils";

// eslint-disable-next-line new-cap
export const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/tyankatsu0105/eslint-plugin/blob/master/docs/rules/${name}.md`
);
