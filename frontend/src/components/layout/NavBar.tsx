import React, { ReactElement } from 'react';
import { AppBar, Toolbar, Box, Slide, useScrollTrigger } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';


function HideOnScroll(props: { children: ReactElement }) {
    const { children } = props;
    // Trigger for detecting scroll
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavBar: React.FC = () => {

    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        backgroundColor: 'primary',
        color: theme.palette.primary.contrastText,
        boxShadow: 'none',
        borderBottom: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }));


    return (
        <>
            <HideOnScroll>
                <AppBarStyled>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }} />
                        {/* Mobile Menu Icon */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                            
                        </Box>
                        {/* Desktop Items */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>

                        </Box>
                        <Box sx={{ flexGrow: 1 }} />

                        {/* Right items - Visible on all screen sizes */}
                        <Box sx={{ display: { xs: 'flex', md: 'flex' }, gap: 2 }}>
                            
                        </Box>                        
                    </Toolbar>
                </AppBarStyled>
            </HideOnScroll>
        </>
    );
};

export default NavBar;