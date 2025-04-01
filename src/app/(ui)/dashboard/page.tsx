import { CustomButton } from "@/app/components/common/CustomButton";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Box className="flex justify-between">
        <Typography className="page-title" variant="h5">Dashboard</Typography>
        <CustomButton label="Create" />
      </Box>
    </Box>
  );
}
