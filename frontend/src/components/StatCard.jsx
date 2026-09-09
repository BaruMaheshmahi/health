export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <div className="
      rounded-2xl
      border border-white/10
      bg-white/[0.025]
      p-5
      transition
      hover:border-white/20
      hover:bg-white/[0.04]
    ">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="
            mt-2 text-2xl
            font-bold tracking-tight
          ">
            {value}
          </h3>

        </div>

        <div className="
          rounded-xl
          bg-blue-500/10
          p-3 text-blue-400
        ">
          <Icon size={20} />
        </div>

      </div>

      <p className="
        mt-4 text-xs
        text-gray-500
      ">
        {description}
      </p>

    </div>
  );
}