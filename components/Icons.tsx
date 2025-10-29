
import React from 'react';

interface IconProps {
  className?: string;
}

export const IconLotus: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.29 11.23c.38.4.55.95.49 1.5-1.14 9.5-1.14 9.5 7.15 0-.06-.55.1-1.1.49-1.5" />
    <path d="M12 21.23c-1.25-2.5-1.25-2.5-3.71-5" />
    <path d="M12 21.23c1.25-2.5 1.25-2.5 3.71-5" />
    <path d="M5.14 9.23c-.27-.27-.42-.64-.42-1.02 0-3.5 2.5-6.21 6.36-6.21S17.43 4.71 17.43 8.2c0 .38-.15.75-.42 1.02" />
    <path d="M12 12.23c-1.25-2.5-1.25-2.5-3.71-5" />
    <path d="M12 12.23c1.25-2.5 1.25-2.5 3.71-5" />
    <path d="M2 13.23h20" />
  </svg>
);

const createIcon = (d: string) => {
    const Icon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={d} />
        </svg>
    );
    return Icon;
}

const createIconWithChildren = (children: React.ReactNode) => {
    const Icon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {children}
        </svg>
    );
    return Icon;
};


export const IconBookOpen = createIcon("M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z");
export const IconTarget = createIconWithChildren(<>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
</>);
export const IconShieldCheck = createIconWithChildren(<>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
</>);
export const IconRoad = createIconWithChildren(<>
    <path d="M4 17l4-4 4 4-4 4-4-4z"></path>
    <path d="M12 7l4-4 4 4-4 4-4-4z"></path>
    <path d="M20 17l-4-4-4 4 4 4 4-4z"></path>
</>);
export const IconClipboardList = createIconWithChildren(
    <>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path>
    </>
);
export const IconUsers = createIcon("M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75");
export const IconTable = createIcon("M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4m6 6h10a2 2 0 0 0 2-2v-4M9 3v18h0");
export const IconHelpCircle = createIcon("M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01");
export const IconCode = createIcon("M16 18l6-6-6-6M8 6l-6 6 6 6");
export const IconAt = createIconWithChildren(<>
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
</>);
export const IconLink = createIcon("M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72");
export const IconFileText = createIconWithChildren(
    <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </>
);
export const IconHeartHandshake = createIcon("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7zM12 5l-2-2-2 2M12 19l2 2 2-2");
export const IconBrandInstagram = createIconWithChildren(
    <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </>
);
export const IconPhone = createIcon("M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z");
export const IconStar = createIconWithChildren(
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
);

export const IconSparkles = createIconWithChildren(
    <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z M22 12l-3-1.5L16 12l1.5-3L19 6l1.5 3L22 12z M19 22l-1.5-3L16 17.5l3-1.5 1.5 3 1.5-3 3 1.5-1.5 1.5 1.5 3z" />
);

export const IconBrain = createIconWithChildren(
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5V5h2.5A2.5 2.5 0 0 1 17 7.5V10h.5A2.5 2.5 0 0 1 20 12.5v1.5a2.5 2.5 0 0 1-2.5 2.5H17v2.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 18.5V16h-.5A2.5 2.5 0 0 1 4 13.5v-1.5A2.5 2.5 0 0 1 6.5 9.5H7V7.5A2.5 2.5 0 0 1 9.5 5H12V4.5A2.5 2.5 0 0 1 9.5 2zM12 7V5M7 9.5H6.5M17 10h.5M7 16v2.5M12 19v-2M14.5 14H17" />
);

export const IconHeart = createIconWithChildren(
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
);

export const IconAlertTriangle = createIconWithChildren(
    <>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </>
);

export const IconBrush = createIconWithChildren(
    <>
        <path d="M9.06 11.9 2 19v3h3l7.06-7.06-.06.06L9.06 11.9z" />
        <path d="M16 2a3 3 0 0 1 3 3L6.83 17.17 3 21l3.83-3.83L19 5a3 3 0 0 1-3-3L16 2z" />
    </>
);

export const IconFeather = createIconWithChildren(
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" />
);

export const IconAtom = createIconWithChildren(<>
    <circle cx="12" cy="12" r="1" />
    <path d="M20.82 11.18a8.98 8.98 0 0 0-16.34-2.36" />
    <path d="M3.18 12.82a8.98 8.98 0 0 0 16.34 2.36" />
    <path d="M11.18 3.18a8.98 8.98 0 0 1 2.36 16.34" />
</>);

export const IconHandsPraying = createIcon("m14 15-4-4-4 4m8-10-4-4-4 4");

export const IconCrystalBall = createIconWithChildren(<>
    <circle cx="12" cy="12" r="10" />
    <line x1="5" y1="12" x2="19" y2="12" />
</>);

export const IconYinYang = createIconWithChildren(<>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 0 0 20V2z" />
    <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="17" r="1" />
</>);

export const IconSpiral = createIcon("M12 3a9 9 0 0 1 0 18A9 9 0 0 1 3.75 6");

export const IconQuote = createIcon("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z");
