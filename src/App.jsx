import React, { useState, useEffect } from 'react';
import { Home, Info, Briefcase, DollarSign, Code, User, LogIn, UserPlus, LogOut } from 'lucide-react';

// Import Firebase config and auth state observer
import { auth, initialAuthToken } from './firebase.js'; // Corrected import path
import { onAuthStateChanged, signOut, signInAnonymously, signInWithCustomToken } from 'firebase/auth';

// Import Pages and Components
import HomePage from './pages/HomePage.jsx'; // Corrected import path
import AboutUsPage from './pages/AboutUsPage.jsx'; // Corrected import path
import ServicesPage from './pages/ServicesPage.jsx'; // Corrected import path
import PricingPage from './pages/PricingPage.jsx'; // Corrected import path
import SignInPage from './pages/SignInPage.jsx'; // Corrected import path
import SignUpPage from './pages/SignUpPage.jsx'; // Corrected import path
import ClientDashboardPage from './pages/ClientDashboardPage.jsx'; // Corrected import path
import NavItem from './components/common/NavItem.jsx'; // Corrected import path
import ThemeToggle from './components/common/ThemeToggle.jsx';
import WhatsappButton from './components/common/WhatsappButton.jsx';

// --- Main App component ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null); // Firebase User object
  const [userId, setUserId] = useState(null); // User ID for Firestore
  const [authReady, setAuthReady] = useState(false); // Auth state listener ready
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // If Firebase Auth service is not available (due to failed initialization),
    // set authReady to true to allow the UI to render the loading message or main content.
    if (!auth) {
      console.error("Firebase Auth service not available. Authentication features will be limited.");
      setAuthReady(true);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserId(currentUser.uid);
      } else {
        // Attempt anonymous sign-in if no custom token is provided or user logs out.
        // This ensures a userId is always present for Firestore operations (even for anonymous users).
        try {
          if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
          } else {
            await signInAnonymously(auth);
          }
          // The onAuthStateChanged listener will fire again after successful signInWithCustomToken/signInAnonymously
          // to update the user and userId states.
        } catch (error) {
          console.error("Error during anonymous/custom token sign-in attempt:", error);
          // If even anonymous sign-in fails, ensure user and userId are null, but still set authReady
          setUser(null);
          setUserId(null); // Or generate a random one if strictly needed for non-auth Firestore access
        }
      }
      setAuthReady(true); // Crucially, mark authReady as true after the initial check
    });

    return () => unsubscribe(); // Cleanup the auth listener on component unmount
  }, []); // Empty dependency array means this runs once on component mount

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#09090b';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f9fafb';
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleLogout = async () => {
    try {
      if (auth) { // Ensure auth object exists before trying to sign out
        await signOut(auth);
      }
      setUser(null);
      setUserId(null); // Clear user ID on logout
      setCurrentPage('home'); // Redirect to home after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const renderPage = () => {
    if (!authReady) {
      return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-white text-2xl">Loading authentication...</div>
        </div>
      );
    }

    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUsPage />;
      case 'services':
        // Pass user and userId to ServicesPage for conditional rendering of "Select Service"
        return <ServicesPage user={user} userId={userId} setCurrentPage={setCurrentPage} />;
      case 'pricing':
        return <PricingPage />;
      // Remove client login/signup pages
      case 'dashboard':
        // Ensure user is passed to dashboard. If user is null (e.g., anonymous user logged out),
        // redirect to sign-in. For anonymous users who are still "logged in", they will see their dashboard.
        return user ? <ClientDashboardPage user={user} userId={userId} setCurrentPage={setCurrentPage} /> : <SignInPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-100 font-inter antialiased overflow-x-hidden ${theme === 'dark' ? 'dark' : ''}`}> {/* Added overflow-x-hidden */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 p-4 border-b border-blue-900">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-in delay-100">
            <span className="text-2xl font-bold text-blue-400">ByteHub</span>
            <Code className="w-6 h-6 text-blue-400" />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <NavItem icon={Home} label="Home" active={currentPage === 'home'} onClick={() => setCurrentPage('home')} delay="200" />
            <NavItem icon={Info} label="About Us" active={currentPage === 'about'} onClick={() => setCurrentPage('about')} delay="300" />
            <NavItem icon={Briefcase} label="Services" active={currentPage === 'services'} onClick={() => setCurrentPage('services')} delay="400" />
            <NavItem icon={DollarSign} label="Pricing" active={currentPage === 'pricing'} onClick={() => setCurrentPage('pricing')} delay="500" />
            {user && (
              <>
                <NavItem icon={User} label="My Portal" active={currentPage === 'dashboard'} onClick={() => setCurrentPage('dashboard')} delay="600" />
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-gray-300 hover:text-red-300 hover:bg-red-900 bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 animate-in delay-700"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </>
            )}
            <div className="ml-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-20"> {/* Padding to offset fixed navbar */}
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-950 to-black border-t border-blue-900 p-8 text-center text-gray-400 mt-16">
        <div className="container mx-auto animate-in delay-100">
          <p>&copy; {new Date().getFullYear()} ByteHub. All rights reserved.</p>
          <p className="mt-2 text-sm">Innovating Tomorrow's Digital Landscape.</p>
        </div>
      </footer>

      <WhatsappButton />
    </div>
  );
};

export default App;
