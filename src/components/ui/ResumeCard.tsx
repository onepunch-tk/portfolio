type ResumeCardProps = {
  date: string;
  title: string;
  contents: string[];
};
export function ResumeCard({ date, title, contents }: ResumeCardProps) {
  return (
    <div className="flex flex-col items-start justify-start">
      <label className="bg-amber-400 px-2 py-1 text-[0.55rem] text-white">
        {date}
      </label>
      <h4 className="py-1 text-lg font-semibold">{title}</h4>
      {contents.map((content, index) => (
        <p
          key={index}
          className="max-w-[220px] text-sm font-thin  lg:max-w-[300px]"
        >
          {content}
        </p>
      ))}
    </div>
  );
}
