'use client';

import { useState, useRef, useEffect, useMemo } from 'react';

const DAY_OF_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const ALL_MONTHS = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

const COLOR_MAP: Record<string, string> = {
  'bg-pastel-red': '#FFADAD',
  'bg-pastel-orange': '#FFD6A5',
  'bg-pastel-yellow': '#FDFFB6',
  'bg-pastel-green': '#CAFFBF',
  'bg-pastel-cyan': '#9BF6FF',
  'bg-pastel-blue': '#A0C4FF',
  'bg-pastel-purple': '#BDB2FF',
};

export interface CalendarSchedule {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
  color: string;
}

interface SubmissionsScheduleCardProps {
  schedules: CalendarSchedule[];
}

export default function SubmissionsScheduleCard({ schedules }: SubmissionsScheduleCardProps) {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(new Date());
  const scrollRef = useRef<HTMLDivElement>(null);

  const gapDate = (num: number) => String(num).padStart(2, '0');

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

  const scheduleMap = useMemo(() => {
    const map: Record<string, CalendarSchedule[]> = {};

    schedules.forEach((s) => {
      const current = new Date(
        s.startDate.getFullYear(),
        s.startDate.getMonth(),
        s.startDate.getDate(),
      );
      const last = new Date(s.endDate.getFullYear(), s.endDate.getMonth(), s.endDate.getDate());

      while (current <= last) {
        const dateKey = current.toDateString();
        if (!map[dateKey]) map[dateKey] = [];
        map[dateKey].push(s);
        current.setDate(current.getDate() + 1);
      }
    });

    return map;
  }, [schedules]);

  const visibleSchedules = useMemo(() => {
    return schedules.filter((s) => {
      const year = viewDate.getFullYear();
      const month = viewDate.getMonth();
      const monthStart = new Date(year, month, 1);
      const monthEnd = new Date(year, month + 1, 0);
      return s.startDate <= monthEnd && s.endDate >= monthStart;
    });
  }, [schedules, viewDate]);

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
    <div className="flex flex-col gap-2">
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

      <div className="grid grid-cols-7 text-center font-bold text-main">
        {DAY_OF_WEEK.map((name, i) => (
          <span key={i}>{name}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {days.map((item, index) => {
          const isToday = item.fullDate && item.fullDate.toDateString() === today.toDateString();
          const dateKey = item.fullDate?.toDateString();
          const daySchedules = dateKey ? scheduleMap[dateKey] : [];

          return (
            <div key={index} className="flex items-center justify-center h-10">
              {item.day && (
                <div
                  className={`w-12 h-8 rounded-2xl pt-1 text-center ${isToday ? 'text-main font-bold border' : ''}`}
                >
                  {item.day}
                  <div className="flex justify-center gap-1 mt-1">
                    {daySchedules?.map((s) => (
                      <div
                        key={s.id}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: COLOR_MAP[s.color] }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <p className="my-2 font-bold">등록된 일정 ({visibleSchedules.length})</p>
        <div className="flex flex-col gap-2">
          {visibleSchedules.map((s) => (
            <div key={s.id} className="flex items-center py-2 px-3 rounded-lg bg-white">
              <div
                className="w-3 h-3 rounded-full mx-2 flex-shrink-0"
                style={{ backgroundColor: COLOR_MAP[s.color] }}
              />
              <div>
                <p>{s.title}</p>
                <p className="text-sm text-gray-500">
                  {s.startDate.toLocaleDateString()} - {s.endDate.toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
