import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import { User, Settings, Droplets, TrendingUp, Calendar } from 'lucide-react';

const Dashboard = () => {
  const { currentUser } = useAuth();

  // Show welcome toast when dashboard loads
  useEffect(() => {
    if (currentUser) {
      const firstName = currentUser.displayName?.split(' ')[0] || 'there';
      toast.success(`💧 Welcome to your dashboard, ${firstName}!`, {
        duration: 4000,
        style: {
          background: 'rgba(0, 194, 255, 0.1)',
          border: '1px solid rgba(0, 194, 255, 0.5)',
          color: '#00C2FF',
          fontWeight: '600',
        },
      });
    }
  }, [currentUser]);

  const stats = [
    {
      icon: Droplets,
      label: "Daily Goal",
      value: "2.5L",
      progress: 68,
    },
    {
      icon: TrendingUp,
      label: "Weekly Average",
      value: "2.1L",
      progress: 84,
    },
    {
      icon: Calendar,
      label: "Streak",
      value: "7 days",
      progress: 100,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 bg-black text-white p-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00C2FF] to-[#0099CC] rounded-full flex items-center justify-center">
              {currentUser?.photoURL ? (
                <img 
                  src={currentUser.photoURL} 
                  alt="Profile" 
                  className="w-14 h-14 rounded-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-white" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {currentUser?.displayName || 'Hydration Hero'}!
              </h1>
              <p className="text-white/70">
                Let's track your hydration journey today
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#00C2FF]/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#00C2FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{stat.label}</h3>
                    <p className="text-2xl font-bold text-[#00C2FF]">{stat.value}</p>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  className="bg-gradient-to-r from-[#00C2FF] to-[#0099CC] h-2 rounded-full"
                />
              </div>
              <p className="text-sm text-white/70 mt-2">{stat.progress}% of goal</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <Droplets className="w-5 h-5 text-[#00C2FF]" />
            <span>Quick Log</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['250ml', '500ml', '750ml', '1L'].map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  toast.success(`💧 Logged ${amount} of water!`, {
                    duration: 3000,
                    style: {
                      background: 'rgba(0, 194, 255, 0.1)',
                      border: '1px solid rgba(0, 194, 255, 0.5)',
                      color: '#00C2FF',
                    },
                  });
                }}
                className="bg-[#00C2FF]/20 hover:bg-[#00C2FF]/30 border border-[#00C2FF]/30 rounded-lg p-4 text-center transition-colors"
              >
                <Droplets className="w-6 h-6 text-[#00C2FF] mx-auto mb-2" />
                <span className="font-semibold">{amount}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { time: '2 hours ago', amount: '500ml', type: 'Water' },
              { time: '4 hours ago', amount: '250ml', type: 'HydraX Pro' },
              { time: '6 hours ago', amount: '750ml', type: 'Water' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#00C2FF]/20 rounded-full flex items-center justify-center">
                    <Droplets className="w-4 h-4 text-[#00C2FF]" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.amount} of {activity.type}</p>
                    <p className="text-sm text-white/70">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;