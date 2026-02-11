import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="text-center py-24 bg-blue-600 text-white rounded-3xl">
        <h1 className="text-5xl font-bold mb-6">🚀 InnovateTN</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Rural Tamil Nadu Clinic Booking - TNWISE 2026
        </p>
        <Link to="/clinics" className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl inline-block">
          Find Clinics →
        </Link>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div><div className="text-3xl font-bold text-blue-600">4 Cr</div><div>Rural TN</div></div>
        <div><div className="text-3xl font-bold text-green-600">₹2000</div><div>Saved/Year</div></div>
        <div><div className="text-3xl font-bold text-purple-600">5000+</div><div>Clinics</div></div>
        <div><div className="text-3xl font-bold text-orange-600">2 Hrs</div><div>No Travel</div></div>
      </div>
    </div>
  );
}
