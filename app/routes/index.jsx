import MainComponent from "~/components/main";
import styles from "../styles/styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <MainComponent />
    </div>
  );
}
