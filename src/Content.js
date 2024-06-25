import { useState, useRef, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import ContentSnackbar from "./components/ContentSnackbar"
import { onMessage } from "./service/mockServer"

export default function Content({ open, setOpen }) {
  // Snackbar
  const lastSubmission = useRef({})

  const handleSnackbarClose = () => setOpen(false)
  const handleSnackbarLike = () => setOpen(false)

  // Receiving Submission message
  useEffect(() => {
    onMessage(handleSubmissionMessage)

    return () => {
      setOpen(false)
    }
  }, [])

  const handleSubmissionMessage = (submissionMessage) => {
    if (!submissionMessage?.id) return

    console.log(submissionMessage)
    lastSubmission.current = { ...submissionMessage }
    setOpen(true)
  }

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {/* table for submissions display */}
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
