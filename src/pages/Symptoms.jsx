export default function Symptoms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-8">
          🩺 Symptom Checker AI
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Rural Tamil Nadu villages - TNWISE 2026
        </p>
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Doctor Ready!</h2>
          <p className="text-lg text-gray-600 mb-8">Type "fever", "cough", "diabetes" → Get clinic instantly</p>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="p-6 bg-emerald-100 hover:bg-emerald-200 rounded-2xl font-bold transition-all">Fever</button>
            <button className="p-6 bg-blue-100 hover:bg-blue-200 rounded-2xl font-bold transition-all">Cough</button>
            <button className="p-6 bg-orange-100 hover:bg-orange-200 rounded-2xl font-bold transition-all">Diabetes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
