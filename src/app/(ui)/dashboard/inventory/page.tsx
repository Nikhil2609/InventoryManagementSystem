import { CustomButton } from "@/app/components/common/CustomButton";
import { Box, Button, Typography } from "@mui/material";

export default async function Home() {
  const promise = new Promise((res, rej) => setTimeout(() => { res("resolved") }, 3000))
  const result = await promise.then();
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: { id: number; name: string }[] = await response.json();
  return (
    <>
      <Box>
        <Box className="flex justify-between">
          <Typography className="page-title" variant="h5">Inventory</Typography>
          <CustomButton label="Create" />
        </Box>
      </Box>
    </>
  );
}
