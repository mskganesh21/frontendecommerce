import ThemeToggle from "./components/ThemeSwitcher";
import Button from "./components/UI/Button";

export default function App() {
  return (
    <>
      <ThemeToggle />
      <div>
        <h3>Writes Upside-Down</h3>
        <p>
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <div>
        <h3>Writes Upside-Down</h3>
        <p>
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
        <input type="text" />
        <Button text="Submit" />
        <button className="bg-btnbkg text-btnclr hover:bg-btnclr hover:text-btnbkg">
          Hello
        </button>
      </div>
    </>
  );
}
