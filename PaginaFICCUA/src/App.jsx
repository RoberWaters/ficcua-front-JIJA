import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-lg p-8 text-center space-y-6">
        <h1 className="text-3xl font-bold text-indigo-400">
          ¡Hola con Tailwind!
        </h1>
        
        <p className="text-slate-300">
          Tu proyecto está listo para empezar a desarrollar.
        </p>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 shadow-md active:scale-95"
        >
          Contador: {count}
        </button>
      </div>
    </div>
  )
}

export default App