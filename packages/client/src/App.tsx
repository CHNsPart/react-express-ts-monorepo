import './App.css'

function App() {

  return (
    <div className="flex flex-col gap-2">
      <>
        <h1 className='text-blue-500 font-bold leading-loose tracking-widest'>START</h1>
        <h2 className='text-cyan-500/80 font-semibold p-2 animate-bounce transition-all ease-linear bg-gradient-to-t from-cyan-600 to-blue-300 text-cyan-950'>
          [ NPM WORKSPACES ]
        </h2>
      </>
      <>
        <h3 className='text-gray-500'>we have</h3>
        <p className='text-green-400 bg-gray-900 p-2 px-5 rounded-full'>Vite + React + Tailwind</p>
        <p className='text-purple-400 bg-gray-950 p-2 px-5 rounded-full'>TS-NODE + Express</p>
      </>
    </div>
  )
}

export default App
