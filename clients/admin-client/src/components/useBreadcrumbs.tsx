import { useMatches } from "react-router-dom";

type TCrumb = {
  url: string;
  title: string;
};

const isCrumb = (obj: unknown): obj is TCrumb => {
  if (typeof obj === "object" && obj !== null) {
    return "url" in obj && "title" in obj;
  }
  return false;
};

export const useBreadcrumbs = () => {
  const matches = useMatches();

  let crumbs: TCrumb[] = [];

  if (matches) {
    matches.map((match) => {
      if (isCrumb(match.handle)) {
        crumbs = [...crumbs, match.handle]
      }
    });
  }

  return crumbs;
};