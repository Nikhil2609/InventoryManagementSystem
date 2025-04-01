import { CustomButton } from "@/app/components/common/CustomButton";
import CustomTable from "@/app/components/common/CustomTable";
import { Box, styled, Typography } from "@mui/material";

export default function Home() {
  const columns = ["Id", "Name"];
  const rows: any = [
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 1, name: "Nikhil" },
    { id: 2, name: "Akshay" }
  ]
  return (
    <Box>
      <Box className="flex justify-between">
        <Typography className="page-title" variant="h5">Products</Typography>
        <CustomButton label="Create" />
      </Box>

      <Box className="mt-8">
        <CustomTable
          columns={columns}
          rows={rows}
        />
      </Box>
    </Box>
  );
}

// export const PageWrapper = styled(Box)({

// })