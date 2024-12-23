import React from 'react';
import ScheduleTable from '@/components/Symposium/ScheduleTable';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Symposium",
    description: "See the schedule for our annual Spring symposium!",
};

const schedule = [
    { start: '9:00 AM', end: '9:30 AM', name: 'Breakfast Networking' },
    { start: '9:30 AM', end: '10:00 AM', name: 'Keynote Speaker 1' },
    { start: '10:00 AM', end: '10:40 AM', name: 'Workshop 1 (Companies)' },
    { start: '10:45 AM', end: '11:25 AM', name: 'Workshop 2 (Research)' },
    { start: '11:30 AM', end: '12:15 AM', name: 'UF Clubs Competition' },
    { start: '12:15 PM', end: '1:00 PM', name: 'Lunch' },
    { start: '1:00 PM', end: '1:30 PM', name: 'Poster Presentation' },
    { start: '1:30 PM', end: '2:00 PM', name: 'Keynote Speaker 2' },
    { start: '2:05 PM', end: '2:45 PM', name: 'Workshop 3 (Research)' },
    { start: '2:50 PM', end: '3:30 PM', name: 'Workshop 4 (Companies)' }
];

const Symposium = () => {
    return (
        <>
            <section
                id="symposium"
                className="relative z-10 overflow-hidden bg-white pb-8 pt-[120px] dark:bg-gray-dark"
            >
                <div className="container mx-auto px-4 py-8">
                    <div className="text-3xl font-bold text-center mb-8">
                        Symposium
                    </div>
                </div>
                <ScheduleTable schedule={schedule} />
            </section>
        </>
    );
}

export default Symposium;
