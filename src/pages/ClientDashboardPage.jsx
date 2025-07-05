import React, { useState, useEffect } from 'react';
import { CircleCheck } from 'lucide-react';
import { db, appId } from '../firebase.js'; // Corrected import path
import { collection, query, onSnapshot, doc, setDoc, deleteDoc } from 'firebase/firestore'; // Specific function imports

const ClientDashboardPage = ({ user, userId, setCurrentPage }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || !userId || !db) {
      setLoadingServices(false);
      setError("Authentication or Firestore not ready. Please log in.");
      return;
    }

    const servicesCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/client_services`);
    const q = query(servicesCollectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const services = [];
      snapshot.forEach((doc) => {
        services.push({ id: doc.id, ...doc.data() });
      });
      setSelectedServices(services);
      setLoadingServices(false);
    }, (err) => {
      console.error("Error fetching services:", err);
      setError("Failed to load your services. Please try again.");
      setLoadingServices(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [user, userId]); // Re-run if user/userId changes

  const handlePayForService = (serviceId) => {
    // This is a placeholder for actual payment integration
    // In a real application, you'd integrate with a payment gateway here (e.g., Stripe, PayPal)
    // After successful payment, you'd update the service status in Firestore.
    // For now, we'll simulate a payment success by updating the status immediately.
    if (!db || !userId) {
      setError("Firestore not ready or user ID is missing.");
      return;
    }
    try {
      setDoc(doc(db, `artifacts/${appId}/users/${userId}/client_services`, serviceId), { status: 'paid' }, { merge: true });
      // console.log(`Service ID: ${serviceId} status updated to paid.`);
    } catch (err) {
      console.error("Error updating service status:", err);
      setError("Failed to update service status. Please try again.");
    }
  };

  const handleDeleteService = async (serviceId) => {
    if (!user || !userId || !db) {
      setError("Authentication or Firestore not ready.");
      return;
    }
    try {
      await deleteDoc(doc(db, `artifacts/${appId}/users/${userId}/client_services`, serviceId));
      // console.log("Service deleted successfully.");
    } catch (err) {
      console.error("Error deleting service:", err);
      setError("Failed to delete service. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-16 animate-in">
        Welcome to Your Client Portal, {user?.email || 'Valued Client'}!
      </h1>
      <div className="text-center text-blue-200 mb-8 animate-in delay-100">
        <p>Your User ID: <span className="font-mono text-blue-300 break-all">{userId}</span></p>
        <p className="mt-2">This is your personalized space to manage your services and projects with ByteHub.</p>
      </div>

      <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 card-hover-effect animate-in delay-200">
        <h2 className="text-3xl font-bold text-white mb-6">Your Selected Services</h2>
        {loadingServices ? (
          <div className="flex items-center justify-center py-8">
            <svg className="spinner w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-blue-200 ml-3">Loading your services...</span>
          </div>
        ) : error ? (
          <div className="bg-red-900 bg-opacity-30 border border-red-700 text-red-300 p-4 rounded-md text-sm">
            {error}
          </div>
        ) : selectedServices.length === 0 ? (
          <div className="text-center text-blue-200 py-8">
            <p className="text-lg mb-4">You haven't selected any services yet.</p>
            <button
              onClick={() => setCurrentPage('services')}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 btn-hover-effect"
            >
              Explore Our Services
            </button>
          </div>
        ) : (
          <ul className="space-y-4">
            {selectedServices.map((service) => (
              <li key={service.id} className="bg-gray-800 p-5 rounded-lg border border-blue-800 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="text-left flex-grow">
                  <h3 className="text-xl font-semibold text-white">{service.serviceName}</h3>
                  <p className="text-blue-200 text-sm">{service.description}</p>
                  <p className="text-gray-400 text-xs mt-1">Status: <span className="font-medium capitalize">{service.status.replace('-', ' ')}</span></p>
                </div>
                <div className="flex space-x-2">
                  {service.status === 'pending-payment' && (
                    <button
                      onClick={() => handlePayForService(service.id)}
                      className="px-4 py-2 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition duration-300 btn-hover-effect"
                    >
                      Pay Now
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="px-4 py-2 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition duration-300 btn-hover-effect"
                  >
                      Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="text-center mt-12 animate-in delay-300">
        <button
          onClick={() => setCurrentPage('services')}
          className="px-8 py-3 bg-blue-800 text-white font-medium rounded-full hover:bg-blue-900 transition duration-300 btn-hover-effect"
        >
          Add More Services
        </button>
      </div>
    </div>
  );
};

export default ClientDashboardPage;
