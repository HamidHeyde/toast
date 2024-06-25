import { Snackbar, SnackbarContent } from "@mui/material"
import ContentSnackbarAction from "./ContentSnackbarAction.js"
import ContentSnackbarMessage from "./ContentSnackbarMessage.js"

const ContentSnackbar = ({
  open,
  handleSnackbarClose,
  handleSnackbarLike,
  lastSubmission,
}) => {
  return (
    <Snackbar
      open={open}
      onClose={handleSnackbarClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <SnackbarContent
        message={<ContentSnackbarMessage data={lastSubmission?.data} />}
        action={
          <ContentSnackbarAction
            handleSnackbarClose={handleSnackbarClose}
            handleSnackbarLike={handleSnackbarLike}
          />
        }
      />
    </Snackbar>
  )
}

export default ContentSnackbar
