export const classes = (...classes: unknown[]) =>
  classes.filter(Boolean).join(" ");
