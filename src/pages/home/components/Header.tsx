import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link as LinkR } from 'react-router-dom'
import escom from '../../../assets/ESCOM.png'
import ipn from '../../../assets/IPN.png'

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string
    url: string
  }>
  title: string
}

export default function Header({ sections, title }: HeaderProps) {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Link href='/'>
          <img src={ipn} style={{ height: '50px' }} />
        </Link>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        <Link href='/'>
          <img src={escom} style={{ height: '50px' }} />
        </Link>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <LinkR to={section.url} key={section.title}>
            {section.title}
          </LinkR>
        ))}
      </Toolbar>
    </>
  )
}
