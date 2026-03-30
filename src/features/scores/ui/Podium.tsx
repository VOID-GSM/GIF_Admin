import { RankItem } from '@/features/scores/model/type';

const HEIGHT_RANKBAR: Record<number, string> = {
  1: '175px',
  2: '100px',
  3: '50px',
};

const podiumOrder = [2, 1, 3];

interface PodiumProps {
  rankings: RankItem[];
}

export default function Podium({ rankings }: PodiumProps) {
  const top3 = [...rankings]
    .filter((item) => item.rank <= 3)
    .sort((a, b) => podiumOrder.indexOf(a.rank) - podiumOrder.indexOf(b.rank));

  return (
    <div className="flex items-end justify-center gap-[50px]">
      {top3.map((item) => (
        <div key={item.name} className="flex flex-col items-center">
          <span className="font-medium text-xl">{item.name}</span>
          <span className="text-main font-semibold">{item.score}점</span>
          <div
            style={{ height: HEIGHT_RANKBAR[item.rank] ?? '50px', width: '100px' }}
            className="rounded-t-2xl rounded-b bg-gradient-to-t from-main to-green-50"
          />
        </div>
      ))}
    </div>
  );
}
