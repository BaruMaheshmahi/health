import {
  LayoutDashboard,
  BrainCircuit,
  BarChart3,
  History,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "prediction",
    label: "Premium Prediction",
    icon: BrainCircuit,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
  },
  {
    id: "history",
    label: "Prediction History",
    icon: History,
  },
];

export default function Sidebar({
  activePage,
  setActivePage,
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-72
          border-r border-white/10
          bg-[#0c1019]
          transition-transform duration-300
          lg:translate-x-0
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex h-full flex-col">

          {/* Logo */}
          <div className="flex h-20 items-center justify-between px-6">
            <div className="flex items-center gap-3">

              <div className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                bg-blue-600
                shadow-lg shadow-blue-600/20
              ">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h1 className="text-lg font-bold">
                  Insura<span className="text-blue-500">AI</span>
                </h1>

                <p className="text-xs text-gray-500">
                  Insurance Intelligence
                </p>
              </div>

            </div>

            <button
              className="lg:hidden text-gray-400"
              onClick={() => setMobileOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">

            <p className="
              mb-3 px-3 text-[11px]
              font-semibold uppercase
              tracking-widest text-gray-500
            ">
              Workspace
            </p>

            <div className="space-y-1">

              {menuItems.map((item) => {

                const Icon = item.icon;

                const active =
                  activePage === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      setMobileOpen(false);
                    }}
                    className={`
                      flex w-full items-center gap-3
                      rounded-xl px-3 py-3
                      text-sm font-medium
                      transition
                      ${
                        active
                          ? "bg-blue-600/15 text-blue-400"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon size={19} />

                    {item.label}
                  </button>
                );
              })}

            </div>

            <p className="
              mb-3 mt-8 px-3 text-[11px]
              font-semibold uppercase
              tracking-widest text-gray-500
            ">
              System
            </p>

            <button
              onClick={() => setActivePage("settings")}
              className="
                flex w-full items-center gap-3
                rounded-xl px-3 py-3
                text-sm font-medium
                text-gray-400
                hover:bg-white/5 hover:text-white
              "
            >
              <Settings size={19} />
              Settings
            </button>

          </nav>

          {/* User */}
          <div className="border-t border-white/10 p-4">

            <div className="
              flex items-center gap-3
              rounded-xl bg-white/[0.03]
              p-3
            ">

              <div className="
                flex h-9 w-9 items-center
                justify-center rounded-full
                bg-blue-500/20
                text-sm font-bold text-blue-400
              ">
                NA
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium">
                  Mahesh
                </p>

                <p className="truncate text-xs text-gray-500">
                  ML Administrator
                </p>
              </div>

            </div>

          </div>

        </div>
      </aside>
    </>
  );
}