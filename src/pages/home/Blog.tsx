import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import CGAL from '../CGAL/CGAL'
import CPP from '../CPP/CPP'
import FreeCAD from '../FreeCAD/FreeCAD'
import OneLab from '../OneLab/OneLab'
import QtCreator from '../QtCreator/QtCreator'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { texts } from './components/main-text'
import Sidebar from './components/Sidebar'

const sections = [
  { title: 'Inicio', url: '/' },
  { title: 'C++', url: 'c++' },
  { title: 'QtCreator', url: 'qtcreator' },
  { title: 'CGAL', url: 'cgal' },
  { title: 'FREECAD', url: 'freecad' },
  { title: 'ONE LAB', url: 'onelab' }
]

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'Ecuaciones diferenciales parciales', url: '#' },
    { title: 'Método de Galerien', url: '#' },
    { title: 'Ecuación de calor', url: '#' },
    { title: 'Ecuaciones de electromagnetismo', url: '#' },
    { title: 'Ecuaciones de elasticidad', url: '#' },
    { title: 'Triangulaciones de Delaunay', url: '#' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon }
  ]
}

const Home = () => {
  return <Main title='Bienvenido' posts={texts} />
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>Go to the home page</p>
    </div>
  )
}

export default function Blog() {
  const defaultTheme = createTheme({})

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='Página Servicio Social' sections={sections} />
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/c++' element={<CPP title='C++' />} />
              <Route
                path='/qtcreator'
                element={<QtCreator title='QtCreator' />}
              />
              <Route path='/cgal' element={<CGAL title='CGAL' />} />
              <Route path='/freecad' element={<FreeCAD title='FreeCAD' />} />
              <Route path='/onelab' element={<OneLab title='ONE Lab' />} />
              <Route path='*' element={<NoMatch />} />
            </Routes>

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title='Desarrollado por'
        description={`El alumno Vega Gloria Carlos Raymundo y el profesor Crispin Herrera Yañez ${new Date().getFullYear()}`}
      />
    </ThemeProvider>
  )
}
