import { Box, Divider, Paper } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  topPage?: React.ReactNode;
}

const Page = ({ children, topPage }: Props) => {
  return (
    <Paper elevation={0}>
      {topPage ? (
        <Box
          sx={{
            p: "16px",
          }}
        >
          {topPage}
        </Box>
      ) : null}
      <Divider />
      <Box sx={{ p: "16px" }}>{children}</Box>
    </Paper>
  );
};

export default Page;
