const formStyle = {
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
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "5px",
  },
};
export default formStyle;
