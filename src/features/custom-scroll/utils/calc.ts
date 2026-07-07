export const calcScrollProgress = (el: HTMLElement) => {
    if (el.scrollHeight <= el.clientHeight) return 0;
    return Math.min(
      1,
      Math.max(
        0,
        el.scrollTop / (el.scrollHeight - el.clientHeight)
      )
    );
  };
