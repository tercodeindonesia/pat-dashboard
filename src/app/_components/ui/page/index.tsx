import { NavigateNextOutlined } from "@mui/icons-material";
import { Box, Breadcrumbs, Divider, Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

interface Props {
  title?: string;
  children?: React.ReactNode;
  topPage?: React.ReactNode;
  breadcrumbs?: {
    label: string;
    path: string | null;
  }[];
}

const Page = ({ children, topPage, title, breadcrumbs }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "36px" }}>
      {breadcrumbs?.length ? (
        <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
          {breadcrumbs.map((item) =>
            item.path ? (
              <Link component={RouterLink} underline="hover" color="inherit" to={item.path}>
                {item.label}
              </Link>
            ) : (
              <Typography sx={{ color: "text.primary" }}>{item.label}</Typography>
            ),
          )}
        </Breadcrumbs>
      ) : null}
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
    </Box>
  );
};

export default Page;
