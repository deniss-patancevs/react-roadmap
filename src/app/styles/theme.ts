export const theme = {
  colors: {
    primary: "#4356B8",
    background: "#FFFFFF",
    text: "#222222",
  },

  fonts: {
    family: '"Roboto", sans-serif',
  },

  fontWeights: {
    regular_400: 400,
    medium_500: 500,
    semiBold_600: 600,
    bold_700: 700,
  },

  fontSizes: {
    xs_14: "14px",
    sm_16: "16px",
    md_20: "20px",
    md_24: "20px",
    lg_36: "36px",
    xl_50: "50px",
  },

  spacing: {
    xs_4: "4px",
    sm_8: "8px",
    md_16: "16px",
    lg_24: "24px",
    xl_32: "32px",
    xxl_36: "36px",
    xxxl_48: "48px",
  },

  radius: {
    sm_4: "4px",
    md_8: "8px",
    lg_12: "12px",
    xl_16: "16px",
    round: "9999px",
  },

  layout: {
    container: {
      maxWidth: "1440px",
      padding: "32px",
    },
  },

  // Components
  components: {
    header: {
      height: "90px",
    },

    footer: {
      height: "90px",
    },
  },
};

export type Theme = typeof theme;
