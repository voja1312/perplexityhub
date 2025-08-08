import { Crown, Shield, Star, Calendar, Clock, AlertTriangle } from 'lucide-react'

export default function PlumberLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section - Urgent & Simplified */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-900/30 border border-red-400/50 p-4 rounded-xl mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
              <p className="text-red-300 font-bold text-lg">
                URGENT: Only 2 Spots Left This Month
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mb-6">
            <Crown className="h-10 w-10 text-emerald-400 mr-3" />
            <span className="text-2xl font-bold text-white">BizzBoost</span>
            <span className="text-emerald-400 font-semibold text-sm ml-3 px-3 py-1 bg-emerald-400/20 rounded-full">
              ELITE PROGRAM
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-emerald-200 bg-clip-text text-transparent">
            Claim Your FREE Website
            <br />
            Book More Jobs Today
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Premium website + AI booking system
            <br />
            <span className="text-emerald-400 font-bold text-3xl">100% FREE - Limited Time</span>
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-1 rounded-2xl inline-block mb-6">
            <a href="https://link.bizzboost.pro/widget/bookings/bizzboost-demo" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105">
                BOOK NOW - Claim FREE Website
              </button>
            </a>
          </div>
          
          <div className="flex items-center justify-center text-gray-400 mb-4">
            <Clock className="h-5 w-5 text-red-400 mr-2" />
            <span className="text-red-300 font-semibold">Booking closes in 48 hours</span>
          </div>
        </div>
      </section>

      {/* Simplified Value - Focus on Booking */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Stop Losing $500+ Jobs to Missed Calls
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-400/20">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">FREE Website</h3>
              <p className="text-gray-300">Books jobs 24/7</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">AI Phone Agent</h3>
              <p className="text-gray-300">Never miss a call</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-400/20">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Instant Alerts</h3>
              <p className="text-gray-300">Know every lead</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-1 rounded-2xl inline-block">
            <a href="https://link.bizzboost.pro/widget/bookings/bizzboost-demo" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-6 px-16 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105">
                BOOK APPOINTMENT NOW
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Simple & Effective */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            What Other Plumbers Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-400/20">
              <p className="text-white text-lg mb-4">
                "Used to lose jobs when I couldn't answer the phone. Now the AI picks up and I don't miss anything."
              </p>
              <p className="text-emerald-400 font-semibold">- Mike Rodriguez, Dallas</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20">
              <p className="text-white text-lg mb-4">
                "Customers like that they can schedule online instead of playing phone tag with me."
              </p>
              <p className="text-blue-400 font-semibold">- Tony Martinez, Phoenix</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-1 rounded-2xl inline-block">
            <a href="https://link.bizzboost.pro/widget/bookings/bizzboost-demo" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105">
                GET MY FREE WEBSITE
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Focus - Simplified */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-900/30 border border-red-400/50 p-4 rounded-xl mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-center">
              <Clock className="h-6 w-6 text-red-400 mr-3" />
              <p className="text-red-300 font-bold text-lg">
                URGENT: Book in next 48 hours or lose your spot
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            BOOK YOUR SPOT NOW
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            15-minute call → FREE website live in 24 hours
          </p>
          
          {/* Calendar Placeholder */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-emerald-400/20 mb-8 shadow-2xl">
            <Calendar className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-6">BizzBoost Exclusive Calendar</h3>
            <p className="text-red-300 font-semibold">
              Only 2 spots remaining this month
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-1 rounded-2xl inline-block mb-6">
            <a href="https://link.bizzboost.pro/widget/bookings/bizzboost-demo" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-8 px-20 rounded-2xl text-3xl transition-all duration-300 transform hover:scale-105 pulse-glow">
                BOOK NOW - Don't Miss Out
              </button>
            </a>
          </div>
          
          <div className="bg-emerald-900/30 border border-emerald-400/50 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-emerald-300 font-semibold text-lg">
              ✓ FREE setup ✓ Live in 24hrs ✓ No contracts ✓ Territory protection
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
