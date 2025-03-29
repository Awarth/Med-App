import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Users, 
  Heart
} from 'lucide-react';

const Home = () => {
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle demo application submission
    console.log('Demo application submitted');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-300 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            >
              Your Health, Our Priority
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Experience seamless healthcare management with our comprehensive medical platform.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div className="rounded-md shadow">
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="#demo"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We are dedicated to revolutionizing healthcare management through technology
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 border border-gray-100 shadow-lg">
              <CardContent className="text-center">
                <Shield className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Platform</h3>
                <p className="mt-2 text-gray-500">
                  Your health data is protected with industry-leading security measures
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border border-gray-100 shadow-lg">
              <CardContent className="text-center">
                <Users className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Team</h3>
                <p className="mt-2 text-gray-500">
                  Our team of healthcare professionals ensures quality service
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border border-gray-100 shadow-lg">
              <CardContent className="text-center">
                <Heart className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Patient First</h3>
                <p className="mt-2 text-gray-500">
                  We prioritize patient care and satisfaction above all else
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Demo Application Section */}
      <div id="demo" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Request a Demo
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Experience our platform firsthand with a personalized demo
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <Card className="p-8 border border-gray-100 shadow-lg">
              <form onSubmit={handleDemoSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-gray-200 focus:border-blue-400 bg-white text-gray-900"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-gray-200 focus:border-blue-400 bg-white text-gray-900"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border-gray-200 focus:border-blue-400 bg-white text-gray-900"
                    required
                  />
                </div>
                <div>
                  <select
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                    required
                  >
                    <option value="">Select Organization Type</option>
                    <option value="hospital">Hospital</option>
                    <option value="clinic">Clinic</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message (Optional)"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Request Demo
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Get in touch with our team for any questions or support
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 border border-gray-100 shadow-lg">
              <CardContent className="text-center">
                <Phone className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-2 text-gray-500">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="p-6 border border-gray-100 shadow-lg">
              <CardContent className="text-center">
                <Mail className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-2 text-gray-500">support@healthcare.com</p>
              </CardContent>
            </Card>
            <Card className="p-6 border border-gray-100 shadow-lg">
              <CardContent className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Address</h3>
                <p className="mt-2 text-gray-500">123 Healthcare Ave, Medical City</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 