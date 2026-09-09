import {
  Search,
  Download,
  MoreHorizontal,
} from "lucide-react";

const history = [
  {
    id: "INS-10482",
    customer: "Customer #4821",
    age: 42,
    premium: 48650,
    risk: "High",
    date: "08 Sep 2026",
  },
  {
    id: "INS-10481",
    customer: "Customer #4819",
    age: 31,
    premium: 23400,
    risk: "Moderate",
    date: "08 Sep 2026",
  },
  {
    id: "INS-10480",
    customer: "Customer #4816",
    age: 26,
    premium: 15900,
    risk: "Low",
    date: "07 Sep 2026",
  },
  {
    id: "INS-10479",
    customer: "Customer #4812",
    age: 58,
    premium: 67200,
    risk: "Very High",
    date: "07 Sep 2026",
  },
];


export default function History() {

  return (
    <div className="space-y-6">

      <div>

        <h1 className="
          text-3xl font-bold
        ">
          Prediction History
        </h1>

        <p className="
          mt-2 text-sm
          text-gray-500
        ">
          Review previously generated
          premium predictions.
        </p>

      </div>


      <div className="
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.025]
      ">

        <div className="
          flex flex-col
          gap-3 border-b
          border-white/10
          p-4 sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <div className="
            flex items-center gap-2
            rounded-xl
            border border-white/10
            bg-black/20
            px-3 py-2
          ">

            <Search
              size={16}
              className="text-gray-600"
            />

            <input
              placeholder="Search predictions..."
              className="
                w-full bg-transparent
                text-sm outline-none
                placeholder:text-gray-600
                sm:w-64
              "
            />

          </div>

          <button className="
            inline-flex
            items-center gap-2
            self-start rounded-xl
            border border-white/10
            px-4 py-2
            text-sm text-gray-400
            hover:bg-white/5
          ">
            <Download size={16} />
            Export
          </button>

        </div>


        <div className="overflow-x-auto">

          <table className="
            w-full min-w-[750px]
            text-left
          ">

            <thead className="
              border-b border-white/10
              text-xs text-gray-600
            ">

              <tr>

                <th className="px-5 py-4">
                  Prediction ID
                </th>

                <th className="px-5 py-4">
                  Customer
                </th>

                <th className="px-5 py-4">
                  Age
                </th>

                <th className="px-5 py-4">
                  Premium
                </th>

                <th className="px-5 py-4">
                  Risk
                </th>

                <th className="px-5 py-4">
                  Date
                </th>

                <th />

              </tr>

            </thead>


            <tbody>

              {history.map((item) => (

                <tr
                  key={item.id}
                  className="
                    border-b border-white/5
                    last:border-0
                    hover:bg-white/[0.02]
                  "
                >

                  <td className="
                    px-5 py-4
                    text-sm font-medium
                  ">
                    {item.id}
                  </td>

                  <td className="
                    px-5 py-4
                    text-sm text-gray-400
                  ">
                    {item.customer}
                  </td>

                  <td className="
                    px-5 py-4
                    text-sm text-gray-400
                  ">
                    {item.age}
                  </td>

                  <td className="
                    px-5 py-4
                    text-sm font-semibold
                  ">
                    ₹
                    {item.premium.toLocaleString(
                      "en-IN"
                    )}
                  </td>

                  <td className="px-5 py-4">

                    <RiskBadge
                      risk={item.risk}
                    />

                  </td>

                  <td className="
                    px-5 py-4
                    text-sm text-gray-500
                  ">
                    {item.date}
                  </td>

                  <td className="px-5 py-4">

                    <button className="
                      rounded-lg
                      p-2 text-gray-500
                      hover:bg-white/5
                      hover:text-white
                    ">
                      <MoreHorizontal
                        size={18}
                      />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}


function RiskBadge({
  risk,
}) {

  const styles = {
    Low: "bg-green-500/10 text-green-400",
    Moderate:
      "bg-yellow-500/10 text-yellow-400",
    High:
      "bg-orange-500/10 text-orange-400",
    "Very High":
      "bg-red-500/10 text-red-400",
  };

  return (
    <span className={`
      inline-flex
      rounded-full
      px-2.5 py-1
      text-xs font-medium
      ${styles[risk]}
    `}>
      {risk}
    </span>
  );
}
