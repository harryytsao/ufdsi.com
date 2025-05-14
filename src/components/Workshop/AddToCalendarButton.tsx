"use client";

import React, { useState } from 'react';
import { Event } from '@/data/events';
import { format } from 'date-fns';

interface AddToCalendarButtonProps {
  event: Event;
}

const AddToCalendarButton: React.FC<AddToCalendarButtonProps> = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Format dates for calendar links
  const formatDate = (date: Date): string => {
    return format(date, "yyyyMMdd'T'HHmmss");
  };

  // Create Google Calendar link
  const googleCalendarUrl = () => {
    const startDate = formatDate(event.start);
    const endDate = formatDate(event.end);
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
  };

  // Create Outlook Calendar link
  const outlookCalendarUrl = () => {
    const startDate = formatDate(event.start);
    const endDate = formatDate(event.end);
    
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${startDate}&enddt=${endDate}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
  };

  // Create Yahoo Calendar link
  const yahooCalendarUrl = () => {
    const startDate = formatDate(event.start);
    const endDate = formatDate(event.end);
    
    return `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(event.title)}&st=${startDate}&et=${endDate}&desc=${encodeURIComponent(event.description)}&in_loc=${encodeURIComponent(event.location)}`;
  };

  // Create iCal file content
  const icalContent = () => {
    const startDate = formatDate(event.start);
    const endDate = formatDate(event.end);
    
    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${startDate}
DTEND:${endDate}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
  };

  // Download iCal file
  const downloadIcal = () => {
    const element = document.createElement('a');
    const file = new Blob([icalContent()], { type: 'text/calendar' });
    element.href = URL.createObjectURL(file);
    element.download = `${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm font-medium transition-colors duration-200 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        Add to Calendar
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64,4.36h-9.91v5.27h5.64c-0.54,2.45-2.45,3.91-5.64,3.91c-3.45,0-6.27-2.82-6.27-6.27 s2.82-6.27,6.27-6.27c1.73,0,3.27,0.73,4.36,1.91l3.82-3.82C17.55,1.18,14.64,0,11.73,0C5.27,0,0,5.27,0,11.73 s5.27,11.73,11.73,11.73c10.09,0,12.27-9.45,11.18-16.64L21.64,4.36z" />
              </svg>
              Google Calendar
            </a>
            <a
              href={outlookCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.88,12.04c0-4.28-1.7-6.53-1.7-6.53H14.3c0,0-1.7,2.14-1.7,6.53c0,4.28,1.7,6.53,1.7,6.53 H6.17C6.17,18.57,7.88,16.32,7.88,12.04z" />
                <path d="M24,7.67v8.67h-8.92v-8.67H24z M23.25,15.67V8.33h-7.42v7.33H23.25z" />
                <path d="M0,7.67v8.67h8.92V7.67H0z M0.75,15.67V8.33h7.42v7.33H0.75z" />
              </svg>
              Outlook Calendar
            </a>
            <a
              href={yahooCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.839,17.525c-0.006,0.002-0.559,0.186-1.039,0.186c-0.265,0-0.372-0.055-0.406-0.079c-0.168-0.117-0.48-0.336,0.054-1.4 l1-1.994c0.215-0.422,0.32-0.601,0.215-0.968c-0.11-0.372-0.303-0.203-0.568-0.094c-0.11,0.055-0.169-0.094-0.094-0.211 c0.188-0.297,0.151-0.732-0.097-0.89c-0.188-0.123-0.38-0.134-0.631-0.116c-0.251,0.018-0.432,0.134-0.535,0.17 c-0.343,0.116-0.953,0.396-0.997,0.359c-0.022-0.02,0.224-0.146,0.355-0.234c0.099-0.066,0.24-0.15,0.409-0.232 c0.238-0.138,0.629-0.232,0.947-0.302c0.318-0.068,0.794-0.017,1.018,0.052c0.516,0.157,0.775,0.351,0.775,0.351 s0.222,0.245,0.222,0.489c0,0.271,0.036,0.317,0.036,0.317s0.131,0.147,0.167,0.303c0.031,0.134,0.066,0.247,0.042,0.411 c-0.031,0.214-0.208,0.47-0.29,0.626c-0.083,0.158-0.249,0.521-0.249,0.521s-0.043,0.118-0.043,0.177 c0,0.060,0.012,0.086,0.036,0.107c0.028,0.025,0.052,0.036,0.09,0.043c0.09,0.012,0.246-0.07,0.246-0.07 s0.194-0.089,0.261-0.116c0.068-0.024,0.388-0.146,0.562-0.217c0.177-0.07,0.427-0.208,0.58-0.245 c0.153-0.04,0.283-0.063,0.423-0.063c0.217,0,0.412,0.043,0.587,0.134c0.067,0.036,0.129,0.072,0.186,0.119 c0.48,0.382,0.155,0.658,0.155,0.658s-0.178,0.245-0.376,0.479c-0.194,0.233-0.175,0.212-0.364,0.458 c-0.188,0.246-0.604,0.797-0.66,0.877c-0.055,0.079-0.196,0.304-0.196,0.304s-0.164,0.317-0.085,0.317 c0.062,0,0.319-0.12,0.319-0.12s0.319-0.134,0.422-0.178c0.103-0.042,0.259-0.127,0.259-0.127s0.036-0.023,0.060-0.023 c0.022,0,0.036,0.023,0.011,0.046c-0.024,0.025-0.12,0.128-0.12,0.128s-0.144,0.164-0.167,0.195 c-0.021,0.027-0.229,0.327-0.229,0.327s-0.209,0.306-0.271,0.388c-0.064,0.085-0.229,0.321-0.229,0.321 s-0.131,0.206-0.156,0.251c-0.023,0.042-0.054,0.11-0.021,0.11c0.027,0,0.104-0.039,0.152-0.060 c0.049-0.021,0.2-0.083,0.2-0.083s0.029-0.012,0.053,0c0.021,0.012,0,0.047-0.01,0.068c-0.014,0.02-0.072,0.073-0.106,0.114 c-0.033,0.041-0.252,0.328-0.252,0.328s-0.354,0.535-0.424,0.629c-0.072,0.094-0.131,0.172-0.131,0.172 s-0.073,0.097-0.073,0.127c0,0.032,0.035,0.016,0.035,0.016s0.152-0.09,0.228-0.138c0.075-0.046,0.285-0.176,0.35-0.22 c0.064-0.04,0.166-0.112,0.193-0.13c0.029-0.019,0.063-0.038,0.087-0.038c0.024,0,0.036,0.019,0.011,0.056 c-0.024,0.039-0.074,0.104-0.112,0.151c-0.032,0.047-0.183,0.245-0.183,0.245s-0.479,0.631-0.566,0.763 c-0.086,0.134-0.112,0.151-0.112,0.151s-0.042,0.047-0.042,0.076c0,0.028,0.042,0.016,0.042,0.016s0.204-0.126,0.306-0.195 c0.103-0.066,0.229-0.146,0.229-0.146s0.025-0.015,0.053-0.015c0.025,0,0.025,0.015,0.008,0.039 c-0.019,0.024-0.107,0.146-0.131,0.172c-0.023,0.024-0.187,0.245-0.187,0.245s-0.229,0.306-0.287,0.388 c-0.054,0.079-0.183,0.26-0.183,0.26s-0.064,0.104-0.064,0.127c0,0.021,0.021,0.021,0.021,0.021s0.104-0.051,0.152-0.079 c0.05-0.027,0.086-0.047,0.086-0.047s0.05-0.016,0.064,0c0.015,0.016-0.011,0.047-0.019,0.063c-0.012,0.019-0.175,0.221-0.175,0.221 s-0.276,0.351-0.306,0.396c-0.032,0.047-0.093,0.127-0.093,0.127s-0.021,0.034-0.021,0.062c0,0.027,0.021,0.027,0.021,0.027 s0.093-0.039,0.145-0.066c0.054-0.027,0.112-0.063,0.14-0.063c0.027,0,0.027,0.016,0.012,0.035 c-0.016,0.019-0.104,0.126-0.104,0.126s-0.271,0.337-0.312,0.396c-0.041,0.063-0.072,0.118-0.072,0.118s-0.032,0.055-0.032,0.095 c0,0.039,0.032,0.021,0.032,0.021s0.166-0.104,0.215-0.131c0.054-0.028,0.234-0.138,0.234-0.138s0.018-0.012,0.042-0.012 c0.022,0,0.022,0.012,0.008,0.027c-0.015,0.016-0.072,0.096-0.072,0.096s-0.234,0.306-0.271,0.351 c-0.041,0.047-0.072,0.093-0.072,0.093s-0.018,0.039-0.018,0.062c0,0.027,0.018,0.027,0.018,0.027s0.104-0.055,0.166-0.094 c0.062-0.039,0.209-0.146,0.209-0.146s0.043-0.028,0.062-0.028c0.021,0,0.021,0.028,0.006,0.047 c-0.016,0.019-0.1,0.146-0.1,0.146s-0.1,0.138-0.126,0.172c-0.025,0.035-0.05,0.073-0.05,0.073s-0.018,0.039-0.018,0.062 c0,0.027,0.018,0.027,0.018,0.027s0.166-0.104,0.22-0.138c0.054-0.035,0.19-0.131,0.19-0.131s0.033-0.019,0.054-0.019 c0.019,0,0.019,0.019,0.006,0.035c-0.014,0.016-0.072,0.104-0.072,0.104s-0.062,0.096-0.076,0.118 c-0.014,0.021-0.029,0.055-0.029,0.055s-0.008,0.027-0.008,0.047c0,0.019,0.032,0.008,0.032,0.008s0.076-0.047,0.126-0.082 c0.05-0.035,0.224-0.151,0.224-0.151s0.043-0.028,0.062-0.028c0.021,0,0.021,0.028,0.006,0.047 c-0.016,0.019-0.076,0.104-0.076,0.104s-0.018,0.027-0.018,0.047c0,0.019,0.018,0.008,0.018,0.008s0.068-0.043,0.126-0.082 c0.057-0.039,0.175-0.118,0.175-0.118s0.035-0.016,0.054-0.016c0.021,0,0.021,0.016,0.008,0.035 c-0.016,0.019-0.062,0.073-0.062,0.073s-0.008,0.016-0.008,0.035c0,0.019,0.008,0.008,0.008,0.008s0.068-0.043,0.103-0.063 c0.036-0.019,0.112-0.066,0.112-0.066s0.022-0.012,0.042-0.012c0.019,0,0.019,0.012,0.008,0.027 c-0.012,0.016-0.042,0.047-0.042,0.047s-0.022,0.027-0.022,0.047c0,0.019,0.022,0.008,0.022,0.008s0.093-0.055,0.112-0.066 c0.018-0.012,0.018-0.012,0.018-0.012s0.021-0.007,0.033-0.007c0.014,0,0.014,0.007,0.014,0.007s0.018,0.019-0.008,0.047 c-0.025,0.027-0.062,0.073-0.062,0.073s-0.008,0.019-0.008,0.035c0,0.016,0.008,0.008,0.008,0.008s0.044-0.027,0.068-0.047 c0.025-0.019,0.047-0.035,0.047-0.035s0.022-0.008,0.033-0.008c0.015,0,0.015,0.008,0.015,0.008s0.018,0.019-0.007,0.039 c-0.022,0.023-0.022,0.027-0.022,0.027s0,0.012,0.008,0.012c0.007,0,0.029-0.016,0.029-0.016s0.021-0.012,0.033-0.012 c0.015,0,0.015,0.012,0.015,0.012s0,0.015-0.015,0.027c-0.012,0.012-0.019,0.019-0.019,0.019s-0.007,0.008,0,0.008 c0.008,0,0.022-0.008,0.022-0.008s0.018-0.008,0.025-0.008c0.008,0,0.008,0.008,0.008,0.008s-0.008,0.012-0.018,0.019 c-0.007,0.008-0.007,0.008-0.007,0.008s0.007,0.004,0.007,0.004s0.008-0.004,0.008-0.004s0.007-0.004,0.007-0.004s0.008,0,0.008,0 s0,0.004-0.008,0.008c-0.007,0.004-0.007,0.004-0.007,0.004" />
              </svg>
              Yahoo Calendar
            </a>
            <button
              onClick={downloadIcal}
              className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,4h-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V3c0-0.6-0.4-1-1-1S6,2.4,6,3v1H5C3.3,4,2,5.3,2,7v12c0,1.7,1.3,3,3,3h14 c1.7,0,3-1.3,3-3V7C22,5.3,20.7,4,19,4z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V10h16V19z M20,8H4V7c0-0.6,0.4-1,1-1h1v1 c0,0.6,0.4,1,1,1s1-0.4,1-1V6h8v1c0,0.6,0.4,1,1,1s1-0.4,1-1V6h1c0.6,0,1,0.4,1,1V8z" />
              </svg>
              Download iCal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { AddToCalendarButton };