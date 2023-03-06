import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Form from '../src/components/Form';
import '@fontsource/montserrat/900.css';



function appBarLabel(label) {
  return (
    <Toolbar className='appBar'>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontFamily:'Montserrat, sans-serif', fontWeight:100 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          {appBarLabel('Content Management System')}
        </AppBar>
        </ThemeProvider>
      </Stack>
      <div className='body'>
        <Form />
      </div>
    </div>

  )
}

export default App
