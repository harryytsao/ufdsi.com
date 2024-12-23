import React from 'react';
import ScheduleTable from '@/components/Symposium/ScheduleTable';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Symposium",
    description: "See the schedule for our annual Spring symposium!",
};

const schedule = [
    { start: '8:00 AM', end: '9:00 AM', details: 'Morning Meeting' },
    { start: '10:00 AM', end: '11:30 AM', details: 'Code Review' },
    { start: '1:00 PM', end: '2:00 PM', details: 'Lunch Break' },
    { start: '3:00 PM', end: '4:00 PM', details: 'Project Presentation' },
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
