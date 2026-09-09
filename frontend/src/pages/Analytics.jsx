import {
  TrendingUp,
  Activity,
  Users,
  IndianRupee,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";


const premiumData = [
  { month: "Apr", premium: 28400 },
  { month: "May", premium: 30100 },
  { month: "Jun", premium: 29800 },
  { month: "Jul", premium: 32700 },
  { month: "Aug", premium: 34100 },
  { month: "Sep", premium: 34820 },
];


const smokingData = [
  {
    category: "Non-Smoker",
    premium: 24600,
  },
  {
    category: "Former Smoker",
    premium: 32800,
  },
  {
    category: "Smoker",
    premium: 47200,
  },
];


export default function Analytics() {

  return (
    <div className="space-y-6">

      <div>

        <p className="
          text-sm text-blue-400
        ">
          Intelligence Center
        </p>

        <h1 className="
          mt-1 text-3xl
          font-bold tracking-tight
        ">
          Analytics
        </h1>

        <p className="
          mt-2 text-sm text-gray-500
        ">
          Explore patterns across
          insurance predictions.
        </p>

      </div>


      <div className="
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      ">

        <Metric
          title="Average Premium"
          value="₹34,820"
          icon={IndianRupee}
        />

        <Metric
          title="Predictions"
          value="1,284"
          icon={Activity}
        />

        <Metric
          title="Growth"
          value="+12.5%"
          icon={TrendingUp}
        />

        <Metric
          title="Profiles"
          value="2,450"
          icon={Users}
        />

      </div>


      <div className="
        grid gap-6
        lg:grid-cols-2
      ">

        <ChartCard
          title="Average premium trend"
          description="Monthly average predicted premium"
        >

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <AreaChart
              data={premiumData}
            >

              <defs>

                <linearGradient
                  id="premiumGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#3b82f6"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="100%"
                    stopColor="#3b82f6"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                stroke="#ffffff10"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                stroke="#6b7280"
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                stroke="#6b7280"
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  background:
                    "#10151f",
                  border:
                    "1px solid #ffffff15",
                  borderRadius:
                    "12px",
                }}
              />

              <Area
                type="monotone"
                dataKey="premium"
                stroke="#3b82f6"
                fill="url(#premiumGradient)"
                strokeWidth={2}
              />

            </AreaChart>

          </ResponsiveContainer>

        </ChartCard>


        <ChartCard
          title="Premium by smoking status"
          description="Average premium across smoking categories"
        >

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={smokingData}
            >

              <CartesianGrid
                stroke="#ffffff10"
                vertical={false}
              />

              <XAxis
                dataKey="category"
                stroke="#6b7280"
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                stroke="#6b7280"
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  background:
                    "#10151f",
                  border:
                    "1px solid #ffffff15",
                  borderRadius:
                    "12px",
                }}
              />

              <Bar
                dataKey="premium"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </ChartCard>

      </div>

    </div>
  );
}


function Metric({
  title,
  value,
  icon: Icon,
}) {

  return (
    <div className="
      rounded-2xl
      border border-white/10
      bg-white/[0.025]
      p-5
    ">

      <Icon
        size={19}
        className="text-blue-400"
      />

      <p className="
        mt-4 text-xs
        text-gray-500
      ">
        {title}
      </p>

      <p className="
        mt-1 text-xl
        font-bold
      ">
        {value}
      </p>

    </div>
  );
}


function ChartCard({
  title,
  description,
  children,
}) {

  return (
    <div className="
      rounded-2xl
      border border-white/10
      bg-white/[0.025]
      p-5
    ">

      <h2 className="font-semibold">
        {title}
      </h2>

      <p className="
        mt-1 text-xs
        text-gray-500
      ">
        {description}
      </p>

      <div className="mt-6">
        {children}
      </div>

    </div>
  );
}