import { Button, IconButton} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const ContentSnackbarAction = ({ handleSnackbarClose, handleSnackbarLike }) => {
  return (
    <>
      <Button color="secondary" size="small" onClick={handleSnackbarLike}>
        LIKE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )
}

export default ContentSnackbarAction
