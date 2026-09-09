import {
  Menu,
  Bell,
  Search,
} from "lucide-react";

export default function Header({
  setMobileOpen,
}) {
  return (
    <header className="
      sticky top-0 z-30
      flex h-20 items-center
      justify-between
      border-b border-white/10
      bg-[#080b12]/80
      px-4 backdrop-blur-xl
      sm:px-6 lg:px-8
    ">

      <div className="flex items-center gap-4">

        <button
          onClick={() => setMobileOpen(true)}
          className="
            rounded-lg p-2
            text-gray-400
            hover:bg-white/5
            lg:hidden
          "
        >
          <Menu size={22} />
        </button>

        <div className="hidden md:flex items-center gap-2">

          <Search
            size={17}
            className="text-gray-500"
          />

          <input
            placeholder="Search..."
            className="
              w-48 bg-transparent
              text-sm text-white
              outline-none
              placeholder:text-gray-600
            "
          />

        </div>

      </div>

      <div className="flex items-center gap-3">

        <button className="
          relative rounded-xl
          border border-white/10
          p-2.5 text-gray-400
          hover:bg-white/5
          hover:text-white
        ">
          <Bell size={19} />

          <span className="
            absolute right-2 top-2
            h-1.5 w-1.5
            rounded-full bg-blue-500
          " />
        </button>

        <div className="
          hidden h-9 w-px
          bg-white/10 sm:block
        " />

        <div className="
          hidden text-right sm:block
        ">
          <p className="text-sm font-medium">
            InsuraAI
          </p>

          <p className="text-xs text-gray-500">
            Premium Intelligence
          </p>
        </div>

      </div>

    </header>
  );
}