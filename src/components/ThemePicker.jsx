import { useCVContext } from "../context/CVContext";

const themes = [
  { id: "default", label: "Dark Pink", color: "#ff4785" },
  { id: "light", label: "Light Green", color: "#2dc46a" },
  { id: "dracula", label: "Dracula", color: "#bd93f9" },
];

function ThemePicker() {
  const { appTheme, setAppTheme } = useCVContext();

  return (
    <div className="theme-picker">
      {themes.map((theme) => (
        <button
          key={theme.id}
          className={`theme-swatch ${appTheme === theme.id ? "active" : ""}`}
          style={{ backgroundColor: theme.color }}
          onClick={() => setAppTheme(theme.id)}
          title={theme.label}
        />
      ))}
    </div>
  );
}

export default ThemePicker;
