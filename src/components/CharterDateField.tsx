"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  CalendarDots as CalendarDays,
  CaretLeft as ChevronLeft,
  CaretRight as ChevronRight,
  X,
} from "@phosphor-icons/react/dist/ssr";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDateISO(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function dateObjToISO(date: Date): string {
  return formatDateISO(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatDateReadable(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const dateObj = new Date(y, m - 1, d);
  return dateObj.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface CharterDateFieldProps {
  id: string;
  value: string;
  onChange: (iso: string) => void;
}

export default function CharterDateField({ id, value, onChange }: CharterDateFieldProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 300 });

  const [today, setToday] = useState<Date | null>(null);
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(0);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now);
    setViewYear(now.getFullYear());
    setViewMonth(now.getMonth());
    setMounted(true);
  }, []);

  const quickDates = useMemo(() => {
    if (!today) return { weekendISO: "", nextWeekISO: "" };
    const dayOfWeek = today.getDay();
    const daysToSat = dayOfWeek === 6 ? 7 : 6 - dayOfWeek;
    const weekend = new Date(today);
    weekend.setDate(today.getDate() + daysToSat);
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    return {
      weekendISO: dateObjToISO(weekend),
      weekendDate: weekend,
      nextWeekISO: dateObjToISO(nextWeek),
      nextWeekDate: nextWeek,
    };
  }, [today]);

  const calendarCells = useMemo(() => {
    const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: Array<{ day: number | null; iso: string; isPast: boolean; isToday: boolean }> = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push({ day: null, iso: "", isPast: true, isToday: false });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(viewYear, viewMonth, day);
      cellDate.setHours(0, 0, 0, 0);
      cells.push({
        day,
        iso: formatDateISO(viewYear, viewMonth, day),
        isPast: today ? cellDate.getTime() < today.getTime() : false,
        isToday: today ? cellDate.getTime() === today.getTime() : false,
      });
    }
    return cells;
  }, [viewYear, viewMonth, today]);

  const canGoPrevMonth = useMemo(() => {
    if (!today) return false;
    return (
      viewYear > today.getFullYear() ||
      (viewYear === today.getFullYear() && viewMonth > today.getMonth())
    );
  }, [viewYear, viewMonth, today]);

  const placePopover = () => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const width = Math.min(Math.max(rect.width, 280), window.innerWidth - 16);
    const popHeight = 390;
    const spaceBelow = window.innerHeight - rect.bottom;
    const top =
      spaceBelow < popHeight && rect.top > popHeight
        ? rect.top - popHeight - 8
        : rect.bottom + 8;
    const left = Math.min(Math.max(8, rect.left), window.innerWidth - width - 8);
    setCoords({ top, left, width });
  };

  useEffect(() => {
    if (!open) return;
    placePopover();
    const onScroll = () => placePopover();
    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [open, viewMonth, viewYear]);

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (buttonRef.current?.contains(target) || popRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selectDate = (iso: string, dateObj?: Date) => {
    onChange(iso);
    if (dateObj) {
      setViewYear(dateObj.getFullYear());
      setViewMonth(dateObj.getMonth());
    } else if (iso) {
      const [y, m] = iso.split("-").map(Number);
      if (y && m) {
        setViewYear(y);
        setViewMonth(m - 1);
      }
    }
    setOpen(false);
  };

  const handlePrevMonth = () => {
    if (!canGoPrevMonth) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((year) => year - 1);
    } else {
      setViewMonth((month) => month - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((year) => year + 1);
    } else {
      setViewMonth((month) => month + 1);
    }
  };

  const popover =
    open && mounted
      ? createPortal(
          <div
            ref={popRef}
            role="dialog"
            aria-label="Choose a charter date"
            style={{ top: coords.top, left: coords.left, width: coords.width }}
            className="fixed z-[80] rounded-xl border border-[#849481]/45 bg-[#FAF6EE] p-3 shadow-[0_22px_48px_-16px_rgba(21,43,39,0.45)]"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() =>
                  selectDate(quickDates.weekendISO, quickDates.weekendDate)
                }
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold border bg-white text-[#203F39] border-[#849481]/40 hover:border-[#BF754C] cursor-pointer"
              >
                This Weekend
              </button>
              <button
                type="button"
                onClick={() =>
                  selectDate(quickDates.nextWeekISO, quickDates.nextWeekDate)
                }
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold border bg-white text-[#203F39] border-[#849481]/40 hover:border-[#BF754C] cursor-pointer"
              >
                Next Week
              </button>
              <button
                type="button"
                onClick={() => selectDate("")}
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold border bg-white text-[#203F39] border-[#849481]/40 hover:border-[#BF754C] cursor-pointer"
              >
                Flexible
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={!canGoPrevMonth}
                aria-label="Previous month"
                className="w-8 h-8 rounded-lg border border-[#849481]/35 flex items-center justify-center text-[#203F39] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-display font-bold text-sm text-[#203F39]">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="w-8 h-8 rounded-lg border border-[#849481]/35 flex items-center justify-center text-[#203F39] hover:bg-white cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1 text-center">
              {WEEKDAYS.map((day) => (
                <span
                  key={day}
                  className="text-[10px] font-bold uppercase tracking-wider text-[#6B7A74] py-1"
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1">
              {calendarCells.map((cell, idx) => {
                if (cell.day === null) {
                  return <span key={`empty-${idx}`} className="h-8" />;
                }
                const isSelected = value === cell.iso;
                return (
                  <button
                    key={cell.iso}
                    type="button"
                    disabled={cell.isPast}
                    onClick={() => selectDate(cell.iso)}
                    aria-pressed={isSelected}
                    className={`h-8 rounded-lg text-xs font-semibold transition-all ${
                      cell.isPast
                        ? "text-[#849481]/40 cursor-not-allowed"
                        : isSelected
                          ? "bg-[#BF754C] text-white font-bold cursor-pointer"
                          : cell.isToday
                            ? "bg-white text-[#203F39] ring-1 ring-[#BF754C] hover:bg-[#203F39] hover:text-white cursor-pointer"
                            : "text-[#26302E] hover:bg-white hover:text-[#203F39] cursor-pointer"
                    }`}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
      >
        Preferred Charter Date
      </label>
      <div className="relative">
        <button
          ref={buttonRef}
          id={id}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="w-full px-3.5 py-2.5 pr-16 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-left text-[#26302E] transition-all cursor-pointer"
        >
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-[#BF754C] shrink-0" />
            <span className={value ? "text-[#26302E]" : "text-[#7A8783]"}>
              {value ? formatDateReadable(value) : "Flexible — choose a date"}
            </span>
          </span>
        </button>
        {value && (
          <button
            type="button"
            aria-label="Clear selected date"
            onClick={() => onChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-[#6B7A74] hover:text-[#203F39] hover:bg-[#F6F1E7] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {popover}
    </div>
  );
}
