import React, { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};

const iframeWrapperStyle: CSSProperties = {
    overflow: 'hidden',
    paddingTop: '56.25%', // 16:9 aspect ratio
    position: 'relative',
    width: '100%',
};

const iframeStyle: CSSProperties = {
    border: '0', 
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
};

const Calendar: React.FC = () => {
    return (
        <div style={containerStyle}>
            <div style={iframeWrapperStyle}>
                <iframe
                    src="src=https://calendar.google.com/calendar/embed?src=dsiufl%40gmail.com&ctz=America%2FNew_York"
                    style={iframeStyle}
                    aria-label="Google Calendar Embed"
                ></iframe>
            </div>
        </div>
    );
};

export default Calendar;
