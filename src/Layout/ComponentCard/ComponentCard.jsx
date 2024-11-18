import "./ComponentCard.scss"
import { Route, Routes } from 'react-router-dom'
import Stopwatch from '../../Component/Stopwatch/Stopwatch'
import Multiselect from '../../Component/Multiselect/Multiselect'

export default function ComponentCard() {
  return (
    <div className='component-cont'>
      <Routes>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path="/multiselect" element={<Multiselect/>} />
      </Routes>
    </div>
  )
}
