import { ConfigToolLinks } from "~/components/ConfigTool/ConfigTool";
import MainComponent, { MainComponentStyles } from "~/components/main";
import { SelectToolLinks } from "~/components/SelectTool/SelectTool";
import { TextToolLinks } from "~/components/TextTool/TextTool";
import { ZoomContainerLinks } from "~/components/ZoomContainer/ZoomContainer";
import styles from "../styles/styles.css";

export const links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: "stylesheet", href: styles },
];
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <MainComponent />
    </div>
  );
}
