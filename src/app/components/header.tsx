import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { sideBarWidth } from "../utils/constant";
import { Logout } from "@mui/icons-material";

export default function Header() {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${sideBarWidth}px)`,
                ml: `${sideBarWidth}px`,
            }}
            className="theme-bg"
        >
            <Toolbar className="flex justify-between">
                <Typography
                    variant="h6"
                    className="flex flex-row justify-center items-center"
                >
                    <Avatar
                        className="theme-color"
                        alt="Remy Sharp"
                        src="">{"N"}
                    </Avatar> &nbsp;
                    Nikhil Panchal
                </Typography>

                <Box title="logout">
                    <Logout className='pointer' fontSize="small" sx={{ mr: 1 }} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}