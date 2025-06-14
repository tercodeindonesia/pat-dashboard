import { Box, Divider, Paper, Typography } from "@mui/material";

interface Props {
  title?: string;
  children?: React.ReactNode;
  topPage?: React.ReactNode;
}

const Page = ({ children, topPage, title }: Props) => {
  return (
    <Paper elevation={0}>
      {topPage ? (
        <>
          <Box
            sx={{
              p: "16px",
            }}
          >
            {topPage}
          </Box>
          <Divider />
        </>
      ) : null}
      <Box sx={{ p: "16px" }}>
        {title && (
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(57, 61, 78, 1)",
              }}
            >
              {title}
            </Typography>
          </Box>
        )}

        <Box sx={{ marginTop: "16px" }}>{children}</Box>
      </Box>
    </Paper>
  );
};

export default Page;
