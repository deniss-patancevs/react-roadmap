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
    body: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "130%",
    },

    // Header

    logo: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "100%",
    },

    nav: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "100%",
    },

    // Footer
    footer: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "100%",
    },

    // Hero Section
    hero: {
      title: {
        fontSize: "50px",
        fontWeight: 700,
        lineHeight: "100%",
      },
      text: {
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "130%",
      },
    },

    // Feature Section
    featureCard: {
      title: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "100%",
      },
      text: {
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "100%",
      },
    },

    // Buttons
    button: {
      fontSize: "20px",
      fontWeight: 500,
    },
  },
};

export type Theme = typeof theme;
