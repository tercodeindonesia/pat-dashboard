import LocalizationProvider from "./_components/providers/localization";
import SessionProvider from "./_components/providers/session";
import ThemeProvider from "./_components/providers/theme";
import "./global.css";

function MainLayout() {
  return (
    <SessionProvider>
      <LocalizationProvider>
        <ThemeProvider />
      </LocalizationProvider>
    </SessionProvider>
  );
}
export default MainLayout;
