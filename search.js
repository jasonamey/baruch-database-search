/**
 * Newman Library — Search Engine
 *
 * Two-layer search:
 *   Layer 1: synonym map → canonical subjects → matching databases (precise)
 *   Layer 2: regex fallback against database name + description (catch-all)
 */

import synonymMap from './subjects-synonyms.js';
import databases from './databases.js';

// ── Pre-compile synonym map at load time (not on every keystroke) ─────────────

const compiledMap = Object.fromEntries(
  Object.entries(synonymMap).map(([subject, terms]) => [
    subject,
    terms.map(term => {
      // If the term contains regex special characters, use it as-is
      // Otherwise wrap in word boundaries for safe matching
      const isPattern = /[\\*+?()\[\]{}|^$]/.test(term);
      const pattern = isPattern ? term : `\\b${term}\\b`;
      return new RegExp(pattern, 'i');
    })
  ])
);

// ── Escape arbitrary user input for use in a regex ───────────────────────────

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── Layer 1: resolve query → matched canonical subjects ──────────────────────

function resolveSubjects(query) {
  const q = query.trim();
  if (!q) return [];

  return Object.keys(compiledMap).filter(subject =>
    compiledMap[subject].some(regex => regex.test(q))
  );
}

// ── Layer 2: fallback regex search through name + description ────────────────

function fallbackSearch(query) {
  let pattern;
  try {
    pattern = new RegExp(`\\b${escapeRegex(query)}\\b`, 'i');
  } catch {
    return [];
  }

  return databases.filter(db =>
    pattern.test(db.name) || pattern.test(db.description)
  );
}

// ── Main search function ──────────────────────────────────────────────────────

export function search(query) {
  const q = query.trim();
  if (!q) return { results: [], matchedSubjects: [], isFallback: false };

  const matchedSubjects = resolveSubjects(q);

  if (matchedSubjects.length > 0) {
    const results = databases.filter(db =>
      db.subjects.some(s => matchedSubjects.includes(s))
    );
    return { results, matchedSubjects, isFallback: false };
  }

  // No subject match — fall back to description text search
  const results = fallbackSearch(q);
  return { results, matchedSubjects: [], isFallback: true };
}
