import { Paper } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <Paper sx={{ p: "16px" }} elevation={0}>
      {children}
    </Paper>
  );
};

export default Page;
