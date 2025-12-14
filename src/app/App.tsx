import PortfolioPage from "./components/portfolio/portfolio-page";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider delayDuration={0}>
        <div className="min-h-screen bg-background text-foreground font-sans antialiased">
          <PortfolioPage />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}
