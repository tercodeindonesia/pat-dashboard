import SessionProvider from "./_components/providers/session";
import ThemeProvider from "./_components/providers/theme";
import "./global.css";

function MainLayout() {
  return (
    <SessionProvider>
      <ThemeProvider />
    </SessionProvider>
  );
}
export default MainLayout;
