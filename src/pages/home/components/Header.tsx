import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import ipn from '../../../assets/IPN.png'
import escom from '../../../assets/ESCOM.png'
import { Link as LinkR } from 'react-router-dom'
import { FormControlLabel, Switch } from '@mui/material'

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string
    url: string
  }>
  title: string
  checked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Header({
  sections,
  title,
  checked,
  handleChange
}: HeaderProps) {
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
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label={`Modo ${checked ? 'oscuro' : 'claro'}`}
        />
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
