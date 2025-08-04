export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20"></div>

        {/* Floating code snippets */}
        <div className="absolute top-10 left-10 text-green-400 font-mono text-xs opacity-30 animate-pulse">
          {'const eduAI = new AI({ model: "gpt-4", task: "education" });'}
        </div>
        <div className="absolute top-32 right-20 text-blue-400 font-mono text-xs opacity-30 animate-pulse delay-1000">
          {"function personalizedLearning(student) { return AI.adapt(student.needs); }"}
        </div>
        <div className="absolute bottom-40 left-20 text-purple-400 font-mono text-xs opacity-30 animate-pulse delay-2000">
          {'import { MachineLearning } from "tensorflow"; // AI-powered education'}
        </div>
        <div className="absolute bottom-20 right-10 text-cyan-400 font-mono text-xs opacity-30 animate-pulse delay-500">
          {'class IntelligentTutor extends AI { constructor() { super("education"); } }'}
        </div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Binary rain effect */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>
    </div>
  )
}
