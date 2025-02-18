export async function run() {
  const res = await fetch(
    "https://unpkg.com/typescript@5.7.3/lib/typescript.js",
  );
  const script = await res.text();
  const { ts } = eval(script + "; ({ts})");
  console.time();
  ts.transpile(`const x: number = 0`);
  console.timeEnd();
}
