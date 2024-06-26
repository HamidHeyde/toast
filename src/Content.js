import { useState, useRef, useEffect } from "react"
import { Box, Typography, CircularProgress } from "@mui/material"
import ContentSnackbar from "./components/ContentSnackbar"
import SubmissionTable from "./components/SubmissionTable"
import ErrorPanel from "./components/ErrorPanel"
import { onMessage, saveLikedFormSubmission } from "./service/mockServer"
import { makeStyles } from "@material-ui/core/styles"

const Content = ({ open, setOpen }) => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const lastSubmission = useRef({})

  const handleSnackbarClose = () => {
    setOpen(false)
    setError(null)
  }

  // Handles snackbar like button
  const handleSnackbarLike = async () => {
    setLoading(true)
    try {
      await saveLikedFormSubmission(lastSubmission.current)
      setOpen(false)
      setLoading(false)
      setError(null)
    } catch (e) {
      setLoading(false)
      setError("SubmissionSavingError")
    }
  }

  // Receiving Submission message
  useEffect(() => {
    // Submit the function
    onMessage(handleSubmissionMessage)

    return () => {
      setOpen(false)
    }
  }, [])

  const handleSubmissionMessage = (submissionMessage) => {
    if (!submissionMessage?.id) return

    lastSubmission.current = { ...submissionMessage }
    setOpen(true)
  }

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {/* table for submissions display */}
      <div className={classes.submissionWrapper}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {!error && <SubmissionTable />}
            {error && <ErrorPanel error={error} />}
          </>
        )}
      </div>
      {/* snackbar */}
      <ContentSnackbar
        open={open}
        lastSubmission={lastSubmission.current}
        handleSnackbarClose={handleSnackbarClose}
        handleSnackbarLike={handleSnackbarLike}
      />
    </Box>
  )
}

export default Content

const useStyles = makeStyles(() => ({
  submissionWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    marginTop: "50px",
  },
}))
