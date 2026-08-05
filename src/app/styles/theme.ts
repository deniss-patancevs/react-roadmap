export const theme = {
  colors: {
    primary: "#4356B8",
    background: "#FFFFFF",
    text: "#222222",
    accent: "#F5E48B",
  },

  fonts: {
    family: '"Roboto", sans-serif',
  },

  layout: {
    container: {
      maxWidth: "1440px",
      padding: "32px",
    },
  },

  // Typography
  typography: {
    heading: {
      fontSize: "50px",
      fontWeight: 700,
      lineHeight: "100%",
    },

    subheading: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "100%",
    },

    title: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "100%",
    },

    body: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "130%",
    },

    button: {
      fontSize: "20px",
      fontWeight: 500,
    },
  },
};

export type Theme = typeof theme;
