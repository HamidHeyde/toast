import { useState } from "react"
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

function App() {
  // snackbar
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header open={open} />
      <Container>
        <Content open={open} setOpen={setOpen} />
      </Container>
    </>
  );
}

export default App;
