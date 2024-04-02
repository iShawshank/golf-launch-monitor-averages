interface IStatsProps {
  name: string;
  extraInfo?: string;
  value: number;
}

const StatsCard = ({ name, extraInfo, value }: IStatsProps) => {
  return (
    <div className="stats-card border border-white m-4 p-2 rounded-xl justify-center justify-items-center align-middle items-center h-full gap-4 flex-col">
      <div className="stats-card-name">
        <h3 className="text-xl font-bold">{name}</h3>
        {extraInfo && <p className="text-sm italic">{extraInfo}</p>}
      </div>
      <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl xl:7xl">
        {value}
      </h1>
    </div>
  );
};

export default StatsCard;
