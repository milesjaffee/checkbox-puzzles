
// Number of puzzles you want to support
const NUM_PUZZLES = 7;

// Generate game puzzle routes: game/puzzle1 to game/puzzle7
const puzzleRoutes = Array.from({ length: NUM_PUZZLES }, (_, i) => `game/puzzle${i + 1}`);

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

  // Return dummy content
  return {
    title: `Page at /${locale}/${normalizedPath}`,
    content: `This is the localized content for /${locale}/${normalizedPath}`,
  };
}