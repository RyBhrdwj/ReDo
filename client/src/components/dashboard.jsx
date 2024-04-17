import Quadrant from './quadrant';
import Section from './section';

export default function Dashboard() {
  return (
    <div className='flex h-full'>
      <div className=' w-1/5 bg-stone-900'> NAVBAR
      </div>
      <Quadrant/>
    </div>
  )
}
