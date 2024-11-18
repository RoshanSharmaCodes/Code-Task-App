import { Route, Routes } from "react-router-dom";
import Multiselect from "../../../Component/Multiselect/Multiselect"
import Stopwatch from "../../../Component/Stopwatch/Stopwatch"
import "./OutputSection.scss"
export default function OutputSection() {
  return (
    <div className="output-div">
      <Routes>
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/multiselect" element={<Multiselect />} />
      </Routes>
    </div>
  );
}
