const formStyle = {
  card: {
    width: "700px",
    height: "700px",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "10px",

    color: "text.primary",
    fontSize: 34,
    fontWeight: "medium",
  },
  inputFields: {
    display: "flex",
    flexDirection: "column",

    ".MuiFormControl-root": {
      margin: "5px",
      marginBottom: "20px",
    },
  },

  inputField: {
    display: "flex",
    justifyContent: "space-between",
  },

  buttons: {
    display: "flex",
    alignSelf: "flex-end",
    margin: "5px",
  },
};
export default formStyle;
