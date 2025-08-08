import { Phone, Calendar, Star, CheckCircle, Users, TrendingUp, Clock, AlertCircle, Gift } from 'lucide-react'

export default function PremiumChiropracticLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Urgent Scarcity Header */}
        <div className="bg-gradient-to-r from-amber-600 to-yellow-600 border border-amber-500 text-center py-4 rounded-lg mb-12 shadow-lg">
          <div className="flex items-center justify-center gap-2 text-white mb-1">
            <AlertCircle className="w-5 h-5 text-white animate-pulse" />
            <span className="font-bold text-lg">ONLY 2 SPOTS LEFT THIS MONTH</span>
            <AlertCircle className="w-5 h-5 text-white animate-pulse" />
          </div>
          <p className="text-amber-100 text-sm">Next availability: November 2025</p>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 text-blue-300 text-sm font-light mb-4 tracking-widest uppercase">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <span>Bizz Boost Solutions</span>
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">PREMIUM</div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tight">
            <span className="font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Missing Calls?</span>
            <br />
            <span className="font-bold bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">We Fix It FREE</span>
          </h1>
          
          <p className="text-3xl md:text-4xl font-light text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop losing patients to competitors.
            <br />
            <span className="text-white font-semibold">Get your FREE online booking system now.</span>
          </p>

          {/* Premium CTA */}
          <div className="relative inline-block">
            <a 
              href="https://link.bizzboost.pro/widget/bookings/bizzboost-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-gray-600 hover:from-blue-700 hover:via-blue-800 hover:to-gray-700 text-white font-bold py-6 px-16 rounded-lg text-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 mb-6 border border-blue-400 relative overflow-hidden inline-block text-center no-underline"
            >
              <span className="relative z-10">GET FREE BOOKING SYSTEM</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </a>
          
          </div>
          
          <p className="text-amber-300 text-lg font-bold">Only 2 spots left this month</p>
        </div>

        {/* Problem & Solution */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-5xl font-black text-white mb-8">
                The Problem
              </h2>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-gray-600 p-3 rounded-full border border-gray-500">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Missed Calls
                  </h3>
                  <p className="text-gray-200 font-light leading-relaxed text-lg">
                    Phone rings, you're busy, they hang up and call your competitor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-gray-600 p-3 rounded-full border border-gray-500">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    No Online Booking
                  </h3>
                  <p className="text-gray-200 font-light leading-relaxed text-lg">
                    Patients want to book 24/7. No system = no appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-gray-600 p-3 rounded-full border border-gray-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Lost Revenue
                  </h3>
                  <p className="text-gray-200 font-light leading-relaxed text-lg">
                    Every missed call is $200+ walking out the door to your competition.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl font-black text-white mb-8">
                The Solution
              </h2>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-gray-600 p-3 rounded-full border border-gray-500">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    24/7 Online Booking
                  </h3>
                  <p className="text-gray-200 font-light leading-relaxed text-lg">
                    Patients book themselves automatically. Never miss another appointment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-gray-600 p-3 rounded-full border border-gray-500">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Capture Every Call
                  </h3>
                  <p className="text-gray-200 font-light leading-relaxed text-lg">
                    Automated system captures missed calls and converts them to bookings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-gray-600 p-3 rounded-full border border-gray-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    100% FREE Setup
                  </h3>
                  <p className="text-gray-200 font-light leading-relaxed text-lg">
                    Complete booking system built for you at no cost. Limited spots available.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <a 
              href="https://link.bizzboost.pro/widget/bookings/bizzboost-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-gray-600 hover:from-blue-700 hover:via-blue-800 hover:to-gray-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 border border-blue-400 inline-block text-center no-underline"
            >
              GET FREE BOOKING SYSTEM
            </a>
          </div>
        </div>

        {/* Premium Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="text-amber-300 text-lg font-bold mb-6 tracking-wider">
              ⭐ ELITE CLIENT RESULTS
            </div>
            <h2 className="text-5xl font-black text-white text-center mb-4 tracking-tight">
              Premium Success Stories
            </h2>
            <p className="text-gray-300 text-center text-xl font-medium max-w-2xl mx-auto">
              Exclusive results from our premium client network
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black p-10 rounded-3xl border-2 border-blue-400/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic text-xl font-medium leading-relaxed">
                  "No more missed calls. Patients book themselves 24/7. Problem solved."
                </p>
                <div className="font-black text-white text-lg">
                  Dr. Sarah Mitchell, DC
                </div>
                <div className="text-blue-300 text-sm font-medium mt-1">
                  Premium Client Since 2023
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black p-10 rounded-3xl border-2 border-blue-400/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic text-xl font-medium leading-relaxed">
                  "Online booking system fills my schedule automatically. No more lost appointments."
                </p>
                <div className="font-black text-white text-lg">
                  Dr. Marcus Thompson, DC
                </div>
                <div className="text-blue-300 text-sm font-medium mt-1">
                  Premium Client Since 2023
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Calendar Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 border border-amber-500 text-center py-3 rounded-lg mb-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white">
              <AlertCircle className="w-5 h-5 animate-pulse" />
              <span className="font-bold">FREE BOOKING SYSTEM - 2 SPOTS REMAINING</span>
              <AlertCircle className="w-5 h-5 animate-pulse" />
            </div>
          </div>

          <h2 className="text-6xl md:text-7xl font-normal text-white mb-6 tracking-tight">
            <span className="font-bold bg-gradient-to-r from-blue-400 via-gray-300 to-blue-400 bg-clip-text text-transparent metallic-text">Book Now</span>
          </h2>
          
          <p className="text-2xl text-gray-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Reserved for serious practice owners.
            <br />
            <span className="text-white font-semibold">Next opening: November 2025</span>
          </p>
          
          {/* Simple CTA */}
          <div className="max-w-xl mx-auto">
            <a 
              href="https://link.bizzboost.pro/widget/bookings/bizzboost-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-gray-600 hover:from-blue-700 hover:via-blue-800 hover:to-gray-700 text-white font-bold py-6 px-16 rounded-lg text-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 border border-blue-400 inline-block no-underline w-full text-center"
            >
              BOOK YOUR FREE CONSULTATION
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
