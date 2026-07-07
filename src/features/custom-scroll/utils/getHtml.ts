export function getSectionRoot(index: number) {
  return document.querySelector(
    `[data-fullpage-section="${index}"]`
  ) as HTMLElement | null;
}

export function getScrollable(index: number) {
  const root = getSectionRoot(index);
  if (!root) return null;

  return root.querySelector<HTMLElement>("[data-scrollable]") ?? root;
}
