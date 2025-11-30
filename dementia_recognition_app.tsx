import React, { useState } from 'react';
import { Brain, Users, Smartphone, Database, Zap, Heart, ChevronRight, Camera, Shield, Linkedin, Activity, Lock, Globe, Rocket, Flag, Lightbulb, Award, Trophy } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('problem');

  const sections = ['problem', 'solution-&-impact', 'team', 'roadmap', 'why-us', 'how-it-works'];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-300 selection:text-purple-900" style={{ background: 'linear-gradient(to bottom right, #4E56C0, #9B5DE0, #D78FEE)' }}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-20 backdrop-blur-md z-50 border-b border-white border-opacity-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('problem')}>
              <div className="bg-white bg-opacity-10 p-2 rounded-xl border border-white border-opacity-20">
                <Brain className="w-8 h-8" style={{ color: '#FDCFFA' }} />
              </div>
              <span className="text-2xl font-bold tracking-tight">Silta</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-white bg-opacity-20 text-white shadow-lg border border-white border-opacity-20' 
                      : 'text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`}
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Placeholder (simplified for demo) */}
            <div className="lg:hidden">
              <span className="text-sm text-gray-200 bg-white bg-opacity-10 px-3 py-1 rounded-full border border-white border-opacity-20">
                {activeSection.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </span>
            </div>
          </div>
        </div>
        
        {/* Mobile Scroller */}
        <div className="lg:hidden overflow-x-auto pb-4 px-4 flex gap-2 no-scrollbar">
           {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === section 
                      ? 'bg-white bg-opacity-20 text-white shadow-lg border border-white border-opacity-20' 
                      : 'text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`}
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out">
        
        {/* PROBLEM SECTION */}
        {activeSection === 'problem' && (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-500 bg-opacity-20 border border-red-400 border-opacity-30 text-red-100 font-medium text-sm mb-6 animate-pulse">
                Global Health Crisis
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
                the 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200"><i> Silta </i></span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light">
                For millions with dementia, a familiar face becomes a stranger. The resulting isolation devastates families.
              </p>
            </div>
            
            <div className="rounded-3xl p-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-16 shadow-2xl">
              <div className="bg-black bg-opacity-40 backdrop-blur-xl rounded-[22px] p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-4xl shadow-lg border-4 border-white border-opacity-20">
                    🇫🇮
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Why the name "Silta"?</h3>
                    <p className="text-xl text-gray-200 leading-relaxed">
                      "Silta" means <span className="font-bold text-pink-200">Bridge</span> in Finnish. We chose this name because Finland has the highest dementia rate in the world. Our app serves as a digital bridge, reconnecting patients with their loved ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all cursor-default group">
                <div className="w-14 h-14 bg-pink-500 bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-pink-200" />
                </div>
                <h3 className="text-4xl font-bold mb-4">55 Million</h3>
                <p className="text-lg text-gray-200">
                  People worldwide live with dementia today. This number is expected to <span className="font-bold text-pink-200">triple by 2050</span>.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all cursor-default group">
                 <div className="w-14 h-14 bg-pink-500 bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-pink-200" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Emotional Toll</h3>
                <p className="text-lg text-gray-200">
                  The inability to recognize loved ones leads to severe anxiety, social withdrawal, and caregiver burnout.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SOLUTION & IMPACT SECTION */}
        {activeSection === 'solution-&-impact' && (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">Silta</span></h1>
              <p className="text-2xl text-gray-200">The memory assistant that bridges the gap.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 transition-transform hover:scale-105">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="p-4 bg-blue-500 bg-opacity-20 rounded-2xl">
                      <Camera className="w-8 h-8 text-blue-200" />
                    </div>
                    <h3 className="text-2xl font-bold">Instant Recognition</h3>
                  </div>
                  <p className="text-lg text-gray-300">
                    Just point the camera. Our optimized AI identifies faces quickly and accurately, providing immediate context on who the person is and their relationship to the user.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 transition-transform hover:scale-105">
                   <div className="flex items-center gap-6 mb-4">
                    <div className="p-4 bg-purple-500 bg-opacity-20 rounded-2xl">
                      <Lock className="w-8 h-8 text-purple-200" />
                    </div>
                    <h3 className="text-2xl font-bold">Private & Secure</h3>
                  </div>
                  <p className="text-lg text-gray-300">
                    Zero cloud dependencies for recognition. All facial data is stored locally on the device, ensuring privacy for vulnerable users.
                  </p>
                </div>
              </div>

              {/* Visual Graphic for Solution */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-black bg-opacity-30 rounded-[3rem] p-8 border-4 border-gray-700 aspect-[9/19] max-w-xs mx-auto shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-[2.5rem] flex justify-center items-center z-20">
                    <div className="w-24 h-5 bg-black rounded-b-xl"></div>
                  </div>
                  
                  {/* Fake UI */}
                  <div className="h-full flex flex-col pt-12">
                    <div className="flex-1 bg-gray-800 rounded-2xl mb-4 overflow-hidden relative">
                      <img src="/alisher-adilov.jpg" alt="Camera View" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-80 border-2 border-purple-400 rounded-xl relative">
                           <div className="absolute -top-3 -left-1 bg-purple-500 text-xs px-2 py-1 rounded">Face Detected</div>
                           <div className="absolute bottom-0 left-0 right-0 bg-black rounded-xl bg-opacity-70 p-3 text-center backdrop-blur-sm">
                             <div className="text-white font-bold text-lg">Alisher Odilov</div>
                             <div className="text-purple-300 text-sm">Your Grandson</div>
                           </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-16 flex justify-center items-center gap-8">
                      <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                      <div className="w-16 h-16 rounded-full border-4 border-white"></div>
                      <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section Content */}
            <div className="mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 drop-shadow-sm">
                Expected Outcomes
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { label: "Reduction in Patient Anxiety", icon: Activity, color: "text-green-300" },
                  { label: "Improvement in Social Interactions", icon: Users, color: "text-blue-300" },
                  { label: "Decrease in Caregiver Stress", icon: Heart, color: "text-pink-300" }
                ].map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-500 opacity-10 rounded-3xl blur-lg group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-10 border border-white border-opacity-20 text-center h-full flex flex-col justify-center items-center transform hover:-translate-y-2 transition-transform duration-300">
                      <stat.icon className={`w-12 h-12 ${stat.color} mb-6 opacity-80`} />
                      <p className="text-xl font-medium text-gray-100">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-3xl p-8 border border-white border-opacity-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-purple-300" />
                  Global Scalability
                </h3>
                <p className="text-lg text-gray-300">
                  While starting in Uzbekistan, Silta is designed to be language-agnostic. The core visual recognition technology works universally, allowing us to deploy to other Central Asian countries within a year.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* HOW IT WORKS & TECHNOLOGY SECTION */}
        {activeSection === 'how-it-works' && (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center">How It Works</h1>
            
            <div className="relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-white bg-opacity-10 transform -translate-x-1/2"></div>

              <div className="space-y-12 md:space-y-24">
                {[
                  {
                    step: 1,
                    title: "Caregiver Setup",
                    desc: "A family member or caregiver downloads Silta and creates a secure profile. They upload 3-5 photos of key people (family, doctors, friends).",
                    icon: Users
                  },
                  {
                    step: 2,
                    title: "Contextual Tagging",
                    desc: "Add names and relationships. e.g., 'Ahmad - Son' or 'Dr. MironShoh - Neurologist'. Optional audio notes can be recorded.",
                    icon: Database
                  },
                  {
                    step: 3,
                    title: "Local Training",
                    desc: "The app generates a unique facial fingerprint for each person on the device. No photos ever leave the phone.",
                    icon: Shield
                  },
                  {
                    step: 4,
                    title: "Daily Use",
                    desc: "The patient simply opens the app. When the camera sees a face, it displays the name and relationship in large, high-contrast text.",
                    icon: Zap
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-block p-3 rounded-2xl bg-white bg-opacity-10 mb-4 md:hidden">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Step {item.step}: {item.title}</h3>
                      <p className="text-xl text-gray-200 leading-relaxed">{item.desc}</p>
                    </div>
                    
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-gray-900 z-10 shrink-0">
                      {item.step}
                    </div>

                    <div className="flex-1 flex justify-center">
                       <div className="w-full max-w-xs bg-white bg-opacity-5 p-6 rounded-3xl border border-white border-opacity-10 aspect-video flex items-center justify-center">
                         <item.icon className="w-20 h-20 text-white opacity-20" />
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Section Content */}
            <div className="mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Tech Stack</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-10 border border-white border-opacity-20 shadow-xl">
                  <Brain className="w-16 h-16 text-purple-300 mb-6" />
                  <h3 className="text-3xl font-bold mb-6">Edge AI Engine</h3>
                  <ul className="space-y-4">
                    {[
                      "TensorFlow Lite for mobile optimization",
                      "Quantized models (< 15MB size)",
                      "Real-time vector embedding generation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-gray-200">
                        <ChevronRight className="w-6 h-6 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-10 border border-white border-opacity-20 shadow-xl">
                  <Smartphone className="w-16 h-16 text-blue-300 mb-6" />
                  <h3 className="text-3xl font-bold mb-6">Mobile Architecture</h3>
                  <ul className="space-y-4">
                    {[
                      "React Native for cross-platform deployment",
                      "SQLite for encrypted local storage",
                      "Offline-first sync capability"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-gray-200">
                        <ChevronRight className="w-6 h-6 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-block bg-black bg-opacity-30 rounded-full px-8 py-3 border border-white border-opacity-20">
                  <span className="text-gray-400">Powered by</span>
                  <span className="ml-3 font-bold text-white text-lg">Python • TensorFlow • React Native • SQLite</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TEAM SECTION */}
        {activeSection === 'team' && (
          <div className="max-w-6xl mx-auto animate-fadeIn text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-16">The Creators</h1>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Elnur Mavlonov", role: "Team Lead & Mech. Eng.", color: "text-blue-300", linkedin: "https://www.linkedin.com/in/elnur-mavlonov-169a7a246/", image: "/elnur-mavlonov.jpg" },
                { name: "Akmal Isfandiyorov", role: "AI Engineer", color: "text-purple-300", linkedin: "https://www.linkedin.com/in/akmal-isfandiyorov-0a46a635a/", image: "/akmal-isfandiyorov.jpg" },
                { name: "Farangiz Iskandarova", role: "Designer", color: "text-pink-300", linkedin: "https://www.linkedin.com/in/farangiz-iskandarova-6176a435a", image: "/farangiz-iskandarova.jpg" },
                { name: "Abdumajid Adilov", role: "Software Engineer", color: "text-indigo-300", linkedin: "https://www.linkedin.com/in/abdumajid-adilov?utm_source=share_via&utm_content=profile&utm_medium=member_android", image: "/abdumajid-adilov.jpg" }
              ].map((member, i) => (
                <div key={i} className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all group">
                  <div className="w-24 h-24 mx-auto rounded-full mb-6 overflow-hidden shadow-lg group-hover:scale-110 transition-transform border-2 border-white border-opacity-20">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initial if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.className = "w-24 h-24 mx-auto bg-gradient-to-tr from-gray-700 to-gray-600 rounded-full mb-6 flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform";
                            parent.textContent = member.name.charAt(0);
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-3xl font-bold text-white">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className={`text-sm mb-4 ${member.color} font-medium`}>{member.role}</p>
                  <div className="flex justify-center">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                      <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-white bg-opacity-5 border border-white border-opacity-10 inline-block">
               <p className="text-2xl font-light italic text-gray-300">
                 "Bridging memory loss with human connection."
               </p>
            </div>
          </div>
        )}

        {/* ROADMAP SECTION (NEW) */}
        {activeSection === 'roadmap' && (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Development Roadmap</h1>
              <p className="text-2xl text-gray-200">From Hackathon to Nationwide Impact</p>
            </div>
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white bg-opacity-20"></div>
              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1: Concept & Prototype",
                    time: "Q4 2025",
                    desc: "Hackathon development. Core face recognition engine built. UI/UX design finalized.",
                    status: "current",
                    icon: Rocket
                  },
                  {
                    phase: "Phase 2: MVP Pilot",
                    time: "Q1 2026",
                    desc: "Closed beta testing with 50 families in Tashkent. Integration of voice note features.",
                    status: "future",
                    icon: Activity
                  },
                  {
                    phase: "Phase 3: Public Launch",
                    time: "Q2 2026",
                    desc: "Official release on App Store & Play Store in Central Asian countries. Partnership with local health clinics.",
                    status: "future",
                    icon: Flag
                  },
                  {
                    phase: "Phase 4: Global Expansion",
                    time: "2027",
                    desc: "Localization for European markets (starting with Finland). Enterprise API for care homes.",
                    status: "future",
                    icon: Globe
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Box */}
                    <div className="flex-1 w-full">
                       <div className={`p-8 rounded-3xl border border-white border-opacity-10 backdrop-blur-md transition-all hover:scale-105 ${item.status === 'current' ? 'bg-gradient-to-r from-purple-900 to-indigo-900 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'bg-white bg-opacity-5'}`}>
                         <div className="flex items-center gap-3 mb-2">
                           {item.status === 'current' && <span className="bg-green-500 text-xs font-bold px-2 py-1 rounded text-black uppercase tracking-wide">Current Stage</span>}
                           <span className="text-sm font-mono text-purple-300">{item.time}</span>
                         </div>
                         <h3 className="text-2xl font-bold mb-2">{item.phase}</h3>
                         <p className="text-gray-300">{item.desc}</p>
                       </div>
                    </div>
                    {/* Timeline Node */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 ${item.status === 'current' ? 'bg-purple-500 border-white shadow-lg scale-125' : 'bg-gray-900 border-gray-600'}`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    {/* Empty Space for alignment */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* WHY US SECTION (NEW) */}
        {activeSection === 'why-us' && (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center">Why Us?</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
               {/* Card 1 */}
               <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl border border-white border-opacity-20 flex flex-col items-start hover:bg-opacity-15 transition">
                 <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                   <Lightbulb className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Innovation from Tashkent</h3>
                 <p className="text-lg text-gray-200">
                   Positioned in the heart of Central Asia, our team combines engineering education with deep cultural empathy for family structures, allowing us to build a solution that is both high-tech and human-centric.
                 </p>
               </div>
               {/* Card 2 */}
               <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl border border-white border-opacity-20 flex flex-col items-start hover:bg-opacity-15 transition">
                 <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                   <Award className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Multidisciplinary Excellence</h3>
                 <p className="text-lg text-gray-200">
                   We are Mechanical Engineers, AI Specialists, and Product Designers. This full-stack hardware-software perspective ensures Silta is a robust tool that works in the real world.
                 </p>
               </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Achievements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-3xl border border-white border-opacity-20 flex items-start gap-4 hover:bg-opacity-15 transition">
                  <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hackathon Champions</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Proven track record of excellence in competitive programming and innovation challenges. Our team members have secured multiple victories across various hackathons, including the prestigious official NASA hackathon, demonstrating our ability to deliver cutting-edge solutions under pressure.
                    </p>
                  </div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-3xl border border-white border-opacity-20 flex items-start gap-4 hover:bg-opacity-15 transition">
                  <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Impact</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Committed to making technology accessible to all. Our team members have volunteered on inclusivity projects with the Zaamin Foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-10 border border-white border-opacity-20 text-center">
              <h3 className="text-3xl font-bold mb-4">Our Motivation</h3>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                "Our philosophy is that technology's greatest purpose is to help the most vulnerable. Witnessing the struggle of dementia drove us to build a bridge to bring clarity back to those who need it most."
              </p>
            </div>
          </div>
        )}

      </main>

      <footer className="bg-black bg-opacity-40 backdrop-blur-lg py-12 border-t border-white border-opacity-10 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <Brain className="w-10 h-10 mx-auto text-purple-300 mb-4" />
          <p className="text-3xl font-bold mb-2 text-purple-300">Silta</p>
          <p className="text-gray-400 mb-2">AI Hackathon 2025 • Tashkent, Uzbekistan</p>
          <div className="text-sm text-gray-400">
            © 2025 Team ~105. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;