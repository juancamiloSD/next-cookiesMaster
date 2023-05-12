import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import { GetServerSideProps } from 'next'

import { Card, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { Layout } from "@/components/layouts"
import Cookies from "js-cookie";
import axios from "axios";

interface Props {
  theme: string
}

const ThemeChangerPage:FC<Props> = ({ theme }) => {

  const [currentTheme, setCurrentTheme] = useState(theme)

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value

    console.log({ selectedTheme })
    setCurrentTheme(selectedTheme)

    localStorage.setItem('theme', selectedTheme)
    Cookies.set('theme', selectedTheme)
  }

  const onClick = async() => {
    const { data } = await axios.get('/api/hello')
    console.log({ data });
  }

  useEffect(() => {
      
    console.log( 'LocalStorage:', localStorage.getItem('theme') );
    console.log( 'Cookies:', Cookies.get('theme') );

    // axios.post('/api/hello', { localStorage.getItem('them')});
  }, [])

  return (
    <Layout>
        <Card>
          <CardContent>
            <FormControl>
              <FormLabel>
                Tema
              </FormLabel>
              <RadioGroup
                value={ currentTheme }
                onChange={ onThemeChange }
              >
                <FormControlLabel value='light' control={<Radio/>} label='light'/>
                <FormControlLabel value='dark' control={<Radio/>} label='dark'/>
                <FormControlLabel value='custom' control={<Radio/>} label='custom'/>
              </RadioGroup>
            </FormControl>

            <Button onClick={ onClick }>
              Request
            </Button>

          </CardContent>
        </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({req}) => {

  const { theme = 'light', name= 'NaN'} = req.cookies
  const validThemes = ['light', 'dark', 'custom']

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'dark',
      name
    }
  }
}

export default ThemeChangerPage