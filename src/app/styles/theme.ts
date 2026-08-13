export const theme = {
  colors: {
    primary: "#3F51B5",
    background: "#FFFFFF",
    text: "#222222",
    secondaryText: "#00000099",
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
    breakpoints: {
      desktop: "1199px",
      tablet: "768px",
      phone: "440px",
    },
  },

  shadows: {
    card: `
      0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 2px 1px 0px rgba(0, 0, 0, 0.12),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14)
    `,
  },

  borderRadius: {
    small: "6px",
    medium: "8px",
  },

  // Typography
  typography: {
    heading: {
      fontSize: "50px",
      fontWeight: 700,
      lineHeight: "100%",
      letterSpacing: "0.25px",
    },

    subheading: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "100%",
      letterSpacing: "0.25px",
    },

    title: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "100%",
      letterSpacing: "0.25px",
    },

    body: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "130%",
      letterSpacing: "0.25px",
    },

    bodySmall: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "130%",
      letterSpacing: "0.25px",
    },

    button: {
      fontSize: "23px",
      fontWeight: 500,
      lineHeight: "26px",
      letterSpacing: "2px",
    },
    buttonMedium: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: "1.5px",
    },
    buttonSmall: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "12px",
      letterSpacing: "1px",
    },
  },
};

export type Theme = typeof theme;
