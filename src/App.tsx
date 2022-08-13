import { Differ, Viewer } from 'json-diff-kit';

import 'json-diff-kit/dist/viewer.css';

// the two JS objects
const before = {
  a: 1,
  b: 2,
  d: [1, 5, 4],
  e: ['1', 2, { f: 3, g: null, h: [5], i: [] }, 9],
  m: [],
  q: 'JSON diff can\'t be possible',
  r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  s: 1024,
};
const after = {
  b: 2,
  c: 3,
  d: [1, 3, 4, 6],
  e: ['1', 2, 3, { f: 4, g: false, i: [7, 8] }, 10],
  j: { k: 11, l: 12 },
  m: [
    { n: 1, o: 2 },
    { p: 3 },
  ],
  q: 'JSON diff is possible!',
  r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed quasi architecto beatae incididunt ut labore et dolore magna aliqua.',
  s: '1024',
};

// all configs are optional
const differ = new Differ({
  detectCircular: true,    // default `true`
  maxDepth: Infinity,      // default `Infinity`
  showModifications: true, // default `true`
  arrayDiffMethod: 'lcs',  // default `"normal"`, but `"lcs"` may be more useful
});

// you may want to use `useMemo` (for React) or `computed` (for Vue)
// to avoid redundant computations
const diff = differ.diff(before, after);

function App() {
  return (
    <Viewer
      diff={diff}          // required
      indent={4}                 // default `2`
      lineNumbers={true}         // default `false`
      highlightInlineDiff={true} // default `false`
      inlineDiffOptions={{
        mode: 'word',            // default `"char"`, but `"word"` may be more useful
        wordSeparator: ' ',      // default `""`, but `" "` is more useful for sentences
      }}
    />
  );
}

export default App;
