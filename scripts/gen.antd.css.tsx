import { extractStyle } from "@ant-design/static-style-extract";
import withTheme from "../theme";

import fs from "fs";

const outputPath = "./public/css/antd.min.css";
const css = extractStyle(withTheme);
fs.writeFileSync(outputPath, css);
