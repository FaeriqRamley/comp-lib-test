import './App.css'
import Button from './Button'
import { MyButton } from './stories/MyButton'

function App() {

  return (
    <main className='flex w-screen h-screen justify-center items-center'>
      <div className='flex gap-2'>
        <Button variant="secondary" className=''>Hello World</Button>
        <MyButton onClick={() => { }}>Hello World 2</MyButton>
      </div>
    </main>
  )
}

export default App
