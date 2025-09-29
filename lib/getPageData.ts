import { puzzleKeys } from "@/app/components/puzzlekeys";

import {puzzles} from "app/[locale]/game/puzzles";

// Number of puzzles you want to support
const NUM_PUZZLES = puzzleKeys.length;

// Generate game puzzle routes: game/puzzle1 to game/puzzle(number of last one)
const puzzleRoutes = Array.from({ length: NUM_PUZZLES }, (_, i) => `game/puzzle${i + 1}`);

const NUM_LISTED_PUZZLES = puzzles.length;
const newStylePuzzleRoutes = Array.from({ length: NUM_LISTED_PUZZLES }, (_, i) => `game/puzzle${i + 1}`);

// Add all valid localized paths (excluding locale prefix here)
const validPaths = new Set<string>([
  '', // root (/[locale])
  '404',
  'game',
  ...puzzleRoutes,
]);

/**
 * Simulates a CMS/page lookup.
 * Returns fake page data if the locale and path are valid, or null otherwise.
 */
export async function getPageData(locale: string, slugPath: string) {

  // Normalize path
  const normalizedPath = slugPath.replace(/\/$/, '');

  // Check if path exists
  if (!validPaths.has(normalizedPath)) return null;

  if (newStylePuzzleRoutes.includes(normalizedPath)) {
    console.log(puzzles);
    console.log(newStylePuzzleRoutes.indexOf(normalizedPath));
    return puzzles[newStylePuzzleRoutes.indexOf(normalizedPath)];
  }

  // Return dummy content
  return {
    title: `Page at /${locale}/${normalizedPath}`,
    content: `This is the localized content for /${locale}/${normalizedPath}`,
  };
}