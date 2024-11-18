import { CopyBlock, dracula } from "react-code-blocks";
import "./CodeSection.scss";
export default function CodeSection() {
  return (
    <div>
      <CopyBlock
        text="import pandas as pd
df = pd.read_csv('some_random.csv');
df.head(5)"
        language="javascript"
        theme={dracula}
      />
    </div>
  );
}
