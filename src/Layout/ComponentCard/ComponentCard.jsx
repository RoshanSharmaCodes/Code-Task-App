import "./ComponentCard.scss"
import OutputSection from "./OutputSection/OutputSection"
import CodeSection from "./CodeSection/CodeSection"

export default function ComponentCard() {
  return (
    <div className='component-cont'>
      <CodeSection codeText=""/>
      <OutputSection/>
    </div>
  )
}
