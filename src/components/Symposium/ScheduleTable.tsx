import React from 'react';

const ScheduleTable = ({ schedule }) => {
    return (
        <div className="p-4 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border border-gray-300 px-4 py-2 text-left text-black">Start Time</th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-black">End Time</th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-black">Event Details</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.length > 0 ? (
                        schedule.map((event, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
                            >
                                <td className="border border-gray-300 px-4 py-2 text-black">{event.start}</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">{event.end}</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">{event.name}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={3}
                                className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                            >
                                No events scheduled
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;
