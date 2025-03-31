"use client"
import { usePathname, useRouter } from "next/navigation";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Dashboard, Assignment, AccountCircle, ListAlt, CategorySharp } from '@mui/icons-material';
import Image from "next/image";
import { sideBarWidth } from "../utils/constant";
import stock from "../../../public/stock.png";

export default function Sidebaar() {
    const pathName = usePathname();
    const router = useRouter();

    const menuItems = [
        { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
        { text: 'Customer', icon: <AccountCircle />, path: '/dashboard/customers' },
        { text: 'Product', icon: <CategorySharp />, path: '/dashboard/products' },
        { text: 'Inventory', icon: <ListAlt />, path: '/dashboard/inventory' },
    ];
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sideBarWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: sideBarWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar className='flex justify-center p8'>
                <Image height={56} src={stock} alt={"No image found"} />
            </Toolbar>
            <Box sx={{ overflow: 'auto', padding: "8px" }}>
                <List className="flex flex-col gap-1">
                    {menuItems.map((item) => {
                        const isActivePath = item.path === pathName
                        return (
                            <ListItem
                                key={item.text}
                                onClick={() => router.push(item.path)}
                                className={`cursor-pointer ${isActivePath ? "active" : ""}`}
                                style={{
                                    borderRadius: "8px"
                                }}
                            >
                                <ListItemIcon><span style={{ color: `${isActivePath ? "white" : ""}` }}>{item.icon}</span></ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Drawer >
    );
}