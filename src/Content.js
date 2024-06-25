import { useState, useRef } from "react"
import { Box, Typography } from "@mui/material"
import ContentSnackbar from "./components/ContentSnackbar"

export default function Content() {
  const [open, setOpen] = useState(true)
  const lastSubmission = useRef({
    id: '123-1243-1234',
    data: {
      firstName: "some firstName",
      lastName: "some lastName",
      email: "someone@gmail.com",
      liked: false
    }
  })

   const handleSnackbarClose = () => setOpen(false)
   const handleSnackbarLike = () => setOpen(false)


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
