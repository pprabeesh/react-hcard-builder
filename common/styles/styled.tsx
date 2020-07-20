const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
};

export const media = {
  mobile: `(min-width: ${breakpoints.xs})`,
  tablet: `(min-width: ${breakpoints.sm})`,
  laptop: `(min-width: ${breakpoints.md})`,
  desktop: `(min-width: ${breakpoints.lg})`,
};
