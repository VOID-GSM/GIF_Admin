'use client';

import { useState, useRef, useEffect, useMemo } from 'react';

const DAY_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const ALL_MONTHS = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

interface CalendarProps {
  onSelect: (start: string, end: string) => void;
}

export default function Calendar({ onSelect }: CalendarProps) {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(new Date());
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  const gapDate = (num: number) => String(num).padStart(2, '0');
  const formatDate = (date: Date) =>
    `${date.getFullYear()}. ${gapDate(date.getMonth() + 1)}. ${gapDate(date.getDate())}`;

  const days = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const result = [];

    for (let i = 0; i < firstDayIndex; i++) {
      result.push({ day: null, fullDate: null });
    }
    for (let d = 1; d <= lastDate; d++) {
      result.push({ day: d, fullDate: new Date(year, month, d) });
    }
    return result;
  }, [viewDate]);

  const handleSelectDate = (date: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
      return;
    }

    const start = date < range.start ? date : range.start;
    const end = date < range.start ? range.start : date;
    setRange({ start, end });
    onSelect(formatDate(start), formatDate(end));
  };

  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.querySelector('[data-active="true"]');
      if (activeButton) {
        const parent = scrollRef.current;
        const child = activeButton as HTMLElement;
        const scrollLeft = child.offsetLeft - parent.offsetWidth / 2 + child.offsetWidth / 2;
        parent.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [viewDate]);

  return (
    <div className="absolute z-50 top-[80px] left-0 flex justify-end w-full">
      <div className="flex flex-col gap-2 bg-white border border-gray-80 rounded-[10px] p-4 w-[400px] h-[380px]">
        <div className="text-center font-bold">
          {`${viewDate.getFullYear()}. ${gapDate(viewDate.getMonth() + 1)}.`}
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 no-scrollbar scrollbar-hide scroll-smooth py-2 px-[180px]"
          >
            {ALL_MONTHS.map((m, idx) => {
              const isCurrent = viewDate.getMonth() === idx;
              return (
                <button
                  key={m}
                  data-active={isCurrent}
                  onClick={() => setViewDate(new Date(viewDate.getFullYear(), idx, 1))}
                  className={`flex-shrink-0 text-sm cursor-pointer ${
                    isCurrent
                      ? 'scale-110 bg-black text-white rounded-full px-3 py-1'
                      : 'text-gray-80 font-medium'
                  }`}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-7 text-center font-bold text-main text-sm">
          {DAY_OF_WEEK.map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {days.map((item, index) => {
            const isToday = item.fullDate?.toDateString() === today.toDateString();
            const isStart = item.fullDate?.toDateString() === range.start?.toDateString();
            const isEnd = item.fullDate?.toDateString() === range.end?.toDateString();
            const isInRange =
              range.start &&
              range.end &&
              item.fullDate &&
              item.fullDate > range.start &&
              item.fullDate < range.end;

            return (
              <div key={index} className="flex items-center justify-center h-8">
                {item.day && (
                  <button
                    onClick={() => item.fullDate && handleSelectDate(item.fullDate)}
                    className={`w-8 h-8 rounded-full text-center text-sm cursor-pointer transition-colors
                      ${isStart || isEnd ? 'bg-main text-white font-bold' : ''}
                      ${isInRange ? 'bg-main/20 text-main' : ''}
                      ${!isStart && !isEnd && !isInRange && isToday ? 'text-main font-bold border border-main' : ''}
                      ${!isStart && !isEnd && !isInRange && !isToday ? 'hover:bg-gray-100' : ''}
                    `}
                  >
                    {item.day}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
