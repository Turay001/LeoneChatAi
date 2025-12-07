import { GlassCard } from "../components/ui/GlassCard";
import { PageTransition } from "../components/layout/PageTransition";
import { TrendingUp, AlertTriangle, Shield, Users, Calendar } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

export function ThreatDashboard() {
  // Mock data for the last 6 months
  const trendData = [
    { month: "Jul", reports: 1250, verified: 890 },
    { month: "Aug", reports: 1580, verified: 1120 },
    { month: "Sep", reports: 1890, verified: 1340 },
    { month: "Oct", reports: 2150, verified: 1620 },
    { month: "Nov", reports: 2680, verified: 2010 },
    { month: "Dec", reports: 3240, verified: 2430 },
  ];

  const categoryData = [
    { name: "Phishing", value: 1245, color: "#00E5FF" },
    { name: "Investment Scams", value: 980, color: "#FF006E" },
    { name: "Job Scams", value: 675, color: "#FFBE0B" },
    { name: "Misinformation", value: 530, color: "#8338EC" },
  ];

  const advisories = [
    {
      id: 1,
      title: "Fake WhatsApp Business Accounts Impersonating Banks",
      severity: "Critical",
      date: "Dec 2, 2024",
      description: "Multiple reports of scammers using WhatsApp Business to impersonate local banks and request PIN codes.",
    },
    {
      id: 2,
      title: "COVID-19 Vaccine Misinformation Campaign",
      severity: "High",
      date: "Nov 28, 2024",
      description: "Coordinated spread of false claims about vaccine side effects targeting rural communities.",
    },
    {
      id: 3,
      title: "Cryptocurrency Investment Pyramid Scheme",
      severity: "High",
      date: "Nov 25, 2024",
      description: "New crypto trading platform promising 300% returns. No legitimate business registration found.",
    },
    {
      id: 4,
      title: "Fake Government Job Recruitment Messages",
      severity: "Medium",
      date: "Nov 20, 2024",
      description: "Messages claiming to offer government positions requiring upfront payment for 'processing fees'.",
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      label: "Reports (Last 30 Days)",
      value: "3,240",
      change: "+21%",
      changeType: "increase" as const,
    },
    {
      icon: AlertTriangle,
      label: "Verified Scams",
      value: "75%",
      change: "2,430 threats",
      changeType: "neutral" as const,
    },
    {
      icon: Shield,
      label: "Citizens Protected",
      value: "524K",
      change: "+14.2K",
      changeType: "increase" as const,
    },
    {
      icon: Users,
      label: "Active Reporters",
      value: "8,950",
      change: "+18%",
      changeType: "increase" as const,
    },
  ];

  return (
    <PageTransition>
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 mb-6">
            <Shield className="size-4 text-[#00E5FF]" />
            <span className="text-sm text-[#00E5FF]">Real-Time Threat Intelligence</span>
          </div>
          <h1 className="text-white mb-4">Public Threat Dashboard</h1>
          <p className="text-gray-400 max-w-3xl">
            Transparency in action. This dashboard shows anonymized, aggregated data from our national
            threat database, helping citizens understand and avoid emerging scams.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                  <stat.icon className="size-6 text-[#00E5FF]" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
              <div
                className={`text-sm flex items-center gap-1 ${
                  stat.changeType === "increase"
                    ? "text-green-400"
                    : stat.changeType === "decrease"
                    ? "text-red-400"
                    : "text-gray-400"
                }`}
              >
                {stat.changeType === "increase" && "↑"}
                {stat.changeType === "decrease" && "↓"}
                <span>{stat.change}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Trend Chart */}
        <GlassCard className="p-8 mb-12">
          <div className="mb-8">
            <h3 className="text-white mb-2">Report Trends (Last 6 Months)</h3>
            <p className="text-gray-400">Total reports received vs. verified scam threats</p>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorVerified" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00A36C" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00A36C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)",
                }}
              />
              <Area
                type="monotone"
                dataKey="reports"
                stroke="#00E5FF"
                fillOpacity={1}
                fill="url(#colorReports)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="verified"
                stroke="#00A36C"
                fillOpacity={1}
                fill="url(#colorVerified)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#00E5FF]"></div>
              <span className="text-sm text-gray-400">Total Reports</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#00A36C]"></div>
              <span className="text-sm text-gray-400">Verified Scams</span>
            </div>
          </div>
        </GlassCard>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Pie Chart */}
          <GlassCard className="p-8">
            <div className="mb-8">
              <h3 className="text-white mb-2">Top Scam Categories</h3>
              <p className="text-gray-400">Last 30 days breakdown</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Bar Chart */}
          <GlassCard className="p-8">
            <div className="mb-8">
              <h3 className="text-white mb-2">Report Volume by Category</h3>
              <p className="text-gray-400">Total verified threats</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                  }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>

        {/* Recent Advisories */}
        <GlassCard neon className="p-8">
          <div className="mb-8">
            <h3 className="text-white mb-2">Recent Public Safety Advisories</h3>
            <p className="text-gray-400">Official alerts based on threat database analysis</p>
          </div>
          <div className="space-y-4">
            {advisories.map((advisory) => (
              <div
                key={advisory.id}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#00E5FF]/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          advisory.severity === "Critical"
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : advisory.severity === "High"
                            ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {advisory.severity}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="size-4" />
                        <span>{advisory.date}</span>
                      </div>
                    </div>
                    <h5 className="text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                      {advisory.title}
                    </h5>
                    <p className="text-gray-400 text-sm">{advisory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
    </PageTransition>
  );
}