// theme.ts
import { createTheme } from '@mui/material/styles';

const colors = {
  light: "#9CD67DDD",
  darklightaccent: "#0C3900",
  lightBG: "#2C3527",
  lightBGModal: "#272E23",
  selectedColor: "#43493E",
  darkBGColor: "#1A1C18",
  darkBG: "#1F1F1F",
  cardBGColor: "#3E4A36",
  cardBGFooter: "#28292A",
  cardOutlineColor: "#E3E3DC",
  textColor: "#E3E3DC",
  iconColor: "#C4C8BB",
  errors: {
    light: "#FFB3B5",
    darklightaccent: "#5F121B",
    lightBGModal: "#2e2323"
  },
  warnings: {
    light: "#CBCC58",
    darklightaccent: "#28281C",
    lightBGModal: "#323220",
    darkBGColor: "#1C1C16",
  },

}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.light,
    },
  },
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      // SELF ADDED Exponential out
      expOut: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // add a red shadow with fade 1
          boxShadow: '0px 0px 0px 0px', // Add a subtle shadow
          backgroundColor: "transparent", // Set your desired background color
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent"
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          color: colors.textColor,
          fontWeight: 600, // Adjust the font weight as needed
          backgroundColor: "transparent", // Set your desired background color
          backdropFilter: "blur(10px)",
          outline: "1px solid #ffffff33",
          outlineOffset: 0,
          transition: "cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s",
          '&:hover': {
            backgroundColor: "transparent", // Set your desired primary color
            fontWeight: 600, // Adjust the font weight as needed
            borderRadius: 30,
            outline: "1px solid #ffffff44",

            outlineOffset: 3,
          },
        },
        containedPrimary: {
          backgroundColor: "transparent", // Set your desired primary color
          color: colors.textColor, // Set your desired text color
          fontWeight: 600, // Adjust the font weight as needed
          borderRadius: 30,
        },
      },
    },
    MuiSwipeableDrawer: {
      defaultProps: {
        PaperProps: {
          style: {
            // round the corners at the top right
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: colors.darkBGColor, // Set your desired background color
            color: colors.textColor, // Set your desired text color
          },
        },
        SlideProps: {
          onEntering: (node, isAppearing) => {
            node.style.transition = theme.transitions.create(['transform', 'margin', 'height', 'width', 'top', 'left'], {
              easing: theme.transitions.easing.expOut,
              duration: "0.5s",
            });
          },
          onExiting: (node) => {
            node.style.transition = theme.transitions.create(['transform', 'margin', 'height', 'width', 'top', 'left'], {
              easing: theme.transitions.easing.easeIn,
              duration: "0.3s",
            });
          }
        }

      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: colors.lightBG, // Set your desired background color
          padding: 20,
          transition: "cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
          outlineColor: colors.darkBGColor,
          outlineStyle: "solid",
          // add hover effect
          '&:hover': {
            outlineColor: colors.cardOutlineColor,
            outlineStyle: "solid",
            outlineWidth: 2,
            borderRadius: 40,
            transition: "cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: colors.darkBGColor, // Set your desired background color
          color: colors.textColor, // Set your desired text color
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {

          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          color: colors.textColor, // Set your desired text color
          backdropFilter: "blur(1px)",
          filter: "drop-shadow(0px 10px 10px #ffffff99)",

        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          color: colors.iconColor, // Set your desired text color
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: colors.textColor, // Set your desired text color
          fontFamily: 'Mundial',
          fontWeight: 500, // Adjust the font weight as needed
        },

        h2: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 500,
        },

        h3: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 400,
        },

        h4: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 300,
        },

        h5: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 300,

        },

        h6: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 200,
        },
        subtitle1: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 200,
        },
        body2: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 200,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s",
          fontWeight: 200,
          borderRadius: 30,
          borderColor: "transparent",
          "&.Mui-focused": {
            // overwrite the mui default blue border
            filter: "drop-shadow(0px 10px 10px #ffffff99)",
            transform: "translateY(2px)",
            borderColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "#ffffff77 1px solid",

            },

          },
          "&:active": {
            transform: "translateY(5px)",
          },




        },

      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff77",
          },
          "&:Mui-focused": {
            borderColor: "white !important",
            transition: "cubic-bezier(0.22, 1, 0.36, 1) 0.8s",
          },
          borderRadius: 30,
          background: "transparent",
          backdropFilter: "blur(10px)",
          transition: "0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          color: "white",
          '& .MuiTypography-root': {
            color: colors.textColor + "66",
            fontfamily: 'Mundial',
            fontWeight: 200,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 300,
          "&.Mui-focused": {
            color: colors.textColor,
          },
        },

      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&:focusVisible': {
            // overwrite the mui default blue border
            transition: "cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
            backgroundColor: colors.errors.light,
            boxShadow: "0px 0px 0px 10px " + colors.errors.light,
          },
          "&:hover": {
            // overwrite the mui default blue border
            border: "none",
          },
          outlineColor: "transparent",
          borderColor: "transparent",
          // Amy
        },

      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: colors.textColor,
          fontFamily: 'Mundial',
          fontWeight: 200,
          borderRadius: 30,
          borderColor: colors.light,
          backgroundColor: colors.lightBG, // Set your desired background color
          "&.Mui-focused": {
            transition: "cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
            outline: colors.light,
          },
        },
        icon: {
          color: colors.iconColor,
        },
        select: {
          borderColor: colors.light, // Change this to your desired border color
          borderWidth: '2px',
          '&.Mui-focused': {
            borderColor: colors.light, // Change this to your desired border color when focused
          },
        },

      },
      defaultProps: {
        MenuProps: {
          PaperProps: {
            style: {
              borderRadius: 20,
              backgroundColor: colors.lightBGModal,
              color: 'white',
              borderColor: colors.light,
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: colors.light,
          borderRadius: 12,
          borderColor: colors.light,
          "&.Mui-focused": {
            transition: "cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
          },
          
        },
        thumb: {
          visibility: "hidden",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: 30,
        },
      },
    },

    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          outlineColor: "#ffffff33",
          outlineStyle: "solid",
          outlineWidth: 1,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          borderRadius: 30,
        },
        paper: {
          backgroundColor: "transparent",
          borderRadius: 30,
          outlineColor: "#ffffff33",
          outlineStyle: "solid",
          outlineWidth: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "transparent",
          color: colors.textColor,
          borderRadius: 12,
          backdropFilter: "blur(10px)",
          transition: "cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
          outlineColor: "#ffffff33",
          outlineStyle: "solid",
          outlineWidth: 1,
          "&:hover": {
            outlineOffset: 3,
          },
        },
        popper: {
          fontSize: 123,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontFamily: "Mundial",
          color: "white",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: "0.3s",
          border: "1px solid " + colors.darkBGColor,
          "&:hover": {
            backgroundColor: colors.lightBG,
            border: "1px solid " + colors.light,
          },
        },
      },
    },
  },
});

export { theme, colors };