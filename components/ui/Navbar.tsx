import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

import { MenuOutlined } from "@mui/icons-material";
import NextLink from 'next/link';

export const Navbar = () => {

    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                >
                    <MenuOutlined />
                </IconButton>
                <NextLink href='/' passHref legacyBehavior>
                    <Link>
                        <Typography variant='h6' color='white'>CookieMaster</Typography>
                    </Link>
                </NextLink>
                <div style={{ flex: 1}}/>
                <NextLink href='/theme-changer' passHref legacyBehavior>
                    <Link>
                        <Typography variant='h6' color='white'>Cambiar Tema</Typography>
                    </Link>
                </NextLink>

            </Toolbar>
        </AppBar>
    )
}
