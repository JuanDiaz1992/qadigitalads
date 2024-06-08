import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Switch
        defaultSelected={theme === "dark"}
        size="lg"
        color="success"
        startContent={<CiLight />}
        endContent={<MdDarkMode />}
        onChange={handleThemeChange}
      />
    </>
  );
}
