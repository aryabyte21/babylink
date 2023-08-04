import { ColorScheme, ColorSchemeProvider, MantineProvider, Text } from "@mantine/core";
import { isAbsolute } from "path";
import { useState } from "react";
import { HeaderAction } from "./HeaderAction";
import { HeroTitle } from "./HeroTitle";
import { CustomFonts } from "./CustomFonts";
import { Toaster } from "react-hot-toast";

export default function App() {
   const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
   const toggleColorScheme = (value?: ColorScheme) =>
     setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
 

 
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: "Greycliff CF, sans-serif",
          headings: { fontFamily: "Greycliff CF, sans-serif" },

          fontSizes: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 20,
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <CustomFonts />
        <HeaderAction links={[]} />
        <Toaster />
        <HeroTitle />
        <br />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
