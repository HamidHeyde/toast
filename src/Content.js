import {
  onMessage,
  saveLikedFormSubmission,
  fetchLikedFormSubmissions,
} from "./service/mockServer"
import { useState, useRef, useEffect } from "react"
import { Box, Typography, CircularProgress } from "@mui/material"
import ContentSnackbar from "./components/ContentSnackbar"
import SubmissionTable from "./components/SubmissionTable"
import ErrorPanel from "./components/ErrorPanel"
import { makeStyles } from "@material-ui/core/styles"

const Content = ({ open, setOpen }) => {
  // styles
  const classes = useStyles()
  /**
   * States
   *  - for loading, error
   *  - for single submission received and liked submissions
   */
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const lastSubmission = useRef({})
  const [likedSubmissions, setLikedSubmissions] = useState([])

  /**
   * useEffect for
   *  - submitting the function to onMessage
   *  - fetching liked submissions onLoad
   */
  useEffect(() => {
    // Submit the function
    onMessage(handleSubmissionMessage)
    // Fetch liked submissions
    handleFetchLikedSubmissions()

    return () => {
      setOpen(false)
    }
  }, [])

  // Handled the snackbar closing
  const handleSnackbarClose = () => {
    setOpen(false)
    setError(null)
  }

  // submission function for onMessage
  const handleSubmissionMessage = (submissionMessage) => {
    if (!submissionMessage?.id) return

    lastSubmission.current = { ...submissionMessage }
    setOpen(true)
  }

  // Handles snackbar like button
  const handleSnackbarLike = async () => {
    setLoading(true)
    try {
      await saveLikedFormSubmission(lastSubmission.current)
      setLikedSubmissions([...likedSubmissions, { ...lastSubmission.current }])
      setOpen(false)
      setLoading(false)
      setError(null)
    } catch (e) {
      setLoading(false)
      setError("SubmissionSavingError")
    }
  }

  // handles fetching liked submissions
  const handleFetchLikedSubmissions = async () => {
    setLoading(true)
    try {
      const { formSubmissions } = await fetchLikedFormSubmissions()
      setLikedSubmissions([...formSubmissions])
      setLoading(false)
      setError(null)
    } catch (e) {
      setLoading(false)
      setError("SubmissionFetchingError")
    }
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
            {!error && <SubmissionTable likedSubmissions={likedSubmissions} />}
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
