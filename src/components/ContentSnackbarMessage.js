import { makeStyles } from "@material-ui/core/styles"

const ContentSnackbarMessage = ({ data }) => {
  const classes = useStyles()
  const { firstName, lastName, email } = data

  return (
    <div className={classes.wrapper}>
      <div>{`${firstName} ${lastName}`}</div>
      <div>{email}</div>
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
