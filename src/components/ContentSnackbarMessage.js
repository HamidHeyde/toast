import { makeStyles } from "@material-ui/core/styles"

const ContentSnackbarMessage = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div>{`${data?.firstName || "firstName"} ${data?.lastName || "lastName"}`}</div>
      <div>{data?.email || "someEmail@mail.com"}</div>
    </div>
  )
}

export default ContentSnackbarMessage

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
}))
