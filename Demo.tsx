import { Link } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen text-white font-sans" style={{ background: 'linear-gradient(to bottom right, #4E56C0, #9B5DE0, #D78FEE)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-20 backdrop-blur-md z-50 border-b border-white border-opacity-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="bg-white bg-opacity-10 p-2 rounded-xl border border-white border-opacity-20">
                <Brain className="w-8 h-8" style={{ color: '#FDCFFA' }} />
              </div>
              <span className="text-2xl font-bold tracking-tight">Silta</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Demo <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Experience Silta's face recognition technology in action
            </p>
          </div>

          {/* Demo Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 mb-8">
            <h2 className="text-3xl font-bold mb-6">Interactive Demo</h2>
            <p className="text-lg text-gray-200 mb-8">
              This is a demo page for the Silta application. You can add interactive features, 
              video demonstrations, or any other content you'd like to showcase here.
            </p>
            
            {/* Placeholder for demo content */}
            <div className="bg-black bg-opacity-30 rounded-2xl p-12 text-center border border-white border-opacity-10">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-xl text-gray-300">Demo content goes here</p>
              <p className="text-sm text-gray-400 mt-2">Add your interactive demo, video, or features</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-3">Real-time Recognition</h3>
              <p className="text-gray-200">See how Silta identifies faces instantly</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-gray-200">All processing happens locally on your device</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
              <p className="text-gray-200">Simple interface designed for accessibility</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;

