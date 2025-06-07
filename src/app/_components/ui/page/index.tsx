import { Paper } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  noStyle?: boolean;
}

const Page = ({ children, noStyle }: Props) => {
  return (
    <Paper sx={{ p: !noStyle ? "16px" : undefined }} elevation={0}>
      {children}
    </Paper>
  );
};

export default Page;
