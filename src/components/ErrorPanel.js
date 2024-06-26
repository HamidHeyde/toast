import { red } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"

export const SubmissionSavingError = () => (
  <>
    <span>There was an error saving your submission as liked.</span>
    <span>Please try again or close the popup.</span>
    <span>If you close the popup the data will be lost</span>
  </>
)

export const SubmissionFetchingError = () => (
  <>
    <span>There was an error Fetching your liked submission.</span>
    <span>Please try again by reloading the page</span>
  </>
)

const ErrorPanel = ({ error }) => {
  const classes = useStyles()

  return (
    <div className={classes.errorWrapper}>
      {error === "SubmissionSavingError" && <SubmissionSavingError />}
      {error === "SubmissionFetchingError" && <SubmissionFetchingError />}
    </div>
  )
}

export default ErrorPanel

const useStyles = makeStyles(() => ({
  errorWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 50,
    borderRadius: 5,
    backgroundColor: red[200],
    color: red["A700"],
  },
}))
