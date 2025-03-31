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
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Avatar style={{
                        backgroundColor: "white",
                        color: "#326b44"
                    }} alt="Remy Sharp" src="">{"A"}</Avatar> &nbsp;
                    ABC
                </Typography>

                <Box title="logout">
                    <Logout className='pointer' fontSize="small" sx={{ mr: 1 }} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}