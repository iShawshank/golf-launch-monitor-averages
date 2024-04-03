interface IStatsProps {
  name: string;
  extraInfo?: string;
  value: number;
}

const StatsCard = ({ name, extraInfo, value }: IStatsProps) => {
  return (
    <div className="stats-card border border-white my-4 p-2 flex flex-col rounded-xl justify-center items-center h-full gap-2">
      <div className="stats-card-name">
        <h3 className="text-xl 2xl:text-2xl font-bold">{name}</h3>
        {extraInfo && <p className="text-sm italic">{extraInfo}</p>}
      </div>
      <h1 className="stats-card-value text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        {value}
      </h1>
    </div>
  );
};

export default StatsCard;
