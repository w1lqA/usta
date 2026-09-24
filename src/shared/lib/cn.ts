import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            // display
            "display-xl",
            "display-lg",
            // headings
            "heading-xl",
            "heading-lg",
            "heading-md",
            "heading-sm",
            // body
            "body-lg",
            "body",
            "body-sm",
            // meta
            "label",
            "caption",
            // custom
            "hero",
            "micro",
          ],
        },
      ],
    },
  },
});

type ClassValue = string | number | null | boolean | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const walk = (input: ClassValue) => {
    if (!input) return;
    if (Array.isArray(input)) {
      input.forEach(walk);
      return;
    }
    classes.push(String(input));
  };

  inputs.forEach(walk);
  return twMerge(classes.join(" "));
}