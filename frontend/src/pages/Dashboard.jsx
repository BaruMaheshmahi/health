import {
  BrainCircuit,
  IndianRupee,
  ShieldAlert,
  Users,
  ArrowUpRight,
} from "lucide-react";

import StatCard from "../components/StatCard";

export default function Dashboard({
  setActivePage,
}) {
  return (
    <div className="space-y-6">

      {/* Hero */}
      <section className="
        relative overflow-hidden
        rounded-3xl
        border border-blue-500/20
        bg-gradient-to-br
        from-blue-600/15
        via-blue-500/5
        to-transparent
        p-6 sm:p-8
      ">

        <div className="
          absolute -right-20 -top-20
          h-64 w-64
          rounded-full
          bg-blue-500/10
          blur-3xl
        " />

        <div className="relative">

          <div className="
            mb-4 inline-flex
            items-center gap-2
            rounded-full
            border border-blue-500/20
            bg-blue-500/10
            px-3 py-1.5
            text-xs font-medium
            text-blue-400
          ">
            <span className="
              h-1.5 w-1.5
              rounded-full bg-blue-400
            " />

            AI Prediction Engine Online
          </div>

          <h1 className="
            max-w-2xl
            text-3xl font-bold
            tracking-tight
            sm:text-4xl
          ">
            Insurance intelligence,
            powered by AI.
          </h1>

          <p className="
            mt-3 max-w-xl
            text-sm leading-6
            text-gray-400
          ">
            Analyze customer health profiles,
            estimate insurance premiums and
            identify potential risk factors
            using machine learning.
          </p>

          <button
            onClick={() =>
              setActivePage("prediction")
            }
            className="
              mt-6 inline-flex
              items-center gap-2
              rounded-xl
              bg-blue-600
              px-5 py-3
              text-sm font-semibold
              text-white
              shadow-lg shadow-blue-600/20
              transition
              hover:bg-blue-500
            "
          >
            <BrainCircuit size={18} />
            New Prediction
            <ArrowUpRight size={16} />
          </button>

        </div>

      </section>


      {/* Stats */}
      <div className="
        grid gap-4
        sm:grid-cols-2
        xl:grid-cols-4
      ">

        <StatCard
          title="Total Predictions"
          value="1,284"
          description="+12.5% from last month"
          icon={BrainCircuit}
        />

        <StatCard
          title="Average Premium"
          value="₹34,820"
          description="Across analyzed profiles"
          icon={IndianRupee}
        />

        <StatCard
          title="High Risk Profiles"
          value="18.4%"
          description="Requires additional review"
          icon={ShieldAlert}
        />

        <StatCard
          title="Profiles Analyzed"
          value="2,450"
          description="+8.2% from last month"
          icon={Users}
        />

      </div>


      {/* Analytics */}
      <div className="
        grid gap-6
        lg:grid-cols-3
      ">

        <div className="
          rounded-2xl
          border border-white/10
          bg-white/[0.025]
          p-6
          lg:col-span-2
        ">

          <div className="
            mb-6 flex
            items-center justify-between
          ">

            <div>
              <h2 className="font-semibold">
                Premium Overview
              </h2>

              <p className="
                mt-1 text-xs
                text-gray-500
              ">
                Average predicted premium
                over the last 6 months
              </p>
            </div>

            <span className="
              rounded-lg
              bg-white/5
              px-3 py-1.5
              text-xs text-gray-400
            ">
              Last 6 months
            </span>

          </div>

          <div className="
            flex h-64
            items-end gap-3
            sm:gap-5
          ">

            {[42, 55, 48, 70, 62, 82].map(
              (height, index) => (

                <div
                  key={index}
                  className="
                    flex flex-1
                    flex-col
                    items-center
                    gap-3
                  "
                >

                  <div className="
                    relative flex w-full
                    items-end
                    rounded-lg
                    bg-white/[0.03]
                  "
                  style={{
                    height: "210px",
                  }}
                  >

                    <div
                      className="
                        w-full
                        rounded-lg
                        bg-blue-500/70
                        transition
                        hover:bg-blue-400
                      "
                      style={{
                        height: `${height}%`,
                      }}
                    />

                  </div>

                  <span className="
                    text-xs text-gray-600
                  ">
                    {
                      [
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                      ][index]
                    }
                  </span>

                </div>

              )
            )}

          </div>

        </div>


        {/* Risk */}
        <div className="
          rounded-2xl
          border border-white/10
          bg-white/[0.025]
          p-6
        ">

          <h2 className="font-semibold">
            Risk Distribution
          </h2>

          <p className="
            mt-1 text-xs
            text-gray-500
          ">
            Current customer portfolio
          </p>

          <div className="
            mt-8 flex
            items-center justify-center
          ">

            <div className="
              relative flex
              h-44 w-44
              items-center
              justify-center
              rounded-full
              border-[18px]
              border-blue-500/20
              border-t-blue-500
              border-r-yellow-500
              border-b-red-500
            ">

              <div className="text-center">

                <p className="
                  text-2xl font-bold
                ">
                  1,284
                </p>

                <p className="
                  text-xs text-gray-500
                ">
                  Profiles
                </p>

              </div>

            </div>

          </div>

          <div className="
            mt-7 space-y-3
          ">

            {[
              ["Low Risk", "38%", "bg-green-500"],
              ["Moderate", "43%", "bg-yellow-500"],
              ["High Risk", "15%", "bg-orange-500"],
              ["Very High", "4%", "bg-red-500"],
            ].map(([label, value, color]) => (

              <div
                key={label}
                className="
                  flex items-center
                  justify-between
                  text-sm
                "
              >

                <div className="
                  flex items-center gap-2
                ">

                  <span
                    className={`
                      h-2 w-2 rounded-full
                      ${color}
                    `}
                  />

                  <span className="text-gray-400">
                    {label}
                  </span>

                </div>

                <span className="font-medium">
                  {value}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}