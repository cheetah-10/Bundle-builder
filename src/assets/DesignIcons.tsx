//designIcons.tsx
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const CameraIcon = (props: IconProps) => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clip-path="url(#clip0_68_9780)">
            <path d="M8.6665 24.9166V20.5833" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.3335 24.9166V20.5833" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.75 24.9167L3.25 24.9167" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13 5.14581C15.2436 5.14581 17.0625 6.96473 17.0625 9.20831C17.0625 11.4519 15.2436 13.2708 13 13.2708C10.7564 13.2708 8.9375 11.4519 8.9375 9.20831C8.9375 6.96473 10.7564 5.14581 13 5.14581Z" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.9731 16.25C12.7489 16.25 12.5669 16.432 12.5669 16.6562C12.5669 16.8805 12.7489 17.0625 12.9731 17.0625C13.1974 17.0625 13.3794 16.8805 13.3794 16.6562C13.3794 16.432 13.1974 16.25 12.9731 16.25Z" fill="#6F7882" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="3.1875" y="0.75" width="19.625" height="19.625" rx="3.25" stroke="#6F7882" stroke-width="1.5" />
        </g>
        <defs>
            <clipPath id="clip0_68_9780">
                <rect width="26" height="26" fill="white" />
            </clipPath>
        </defs>
    </svg>

)
export const SecurityShieldIcon = (props: IconProps) => (
    <svg viewBox="0 0 26 27" fill="none" aria-hidden="true" {...props}>
        <path d="M4.22 5.25S2.86 5.5 2.86 6.65v8.36c0 4.47 6.57 9.45 8.8 10.94.44.3 1.02.3 1.46 0 2.23-1.48 8.8-6.46 8.8-10.94V6.65c0-1.15-1.36-1.4-1.36-1.4l-7.38-2.32a2.47 2.47 0 0 0-1.58 0L4.22 5.25Z" fill="#F0F0F0" stroke="#6F7882" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


export const SensorIcon = (props: IconProps) => (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
        <rect x="8" y="1" width="12" height="7" rx="1.2" stroke="#6F7882" strokeWidth="1.55" />
        <path d="M12 4.2v.6m4-.6v.6M19.2 13.5c-2.9 2.9-7.8 2.9-10.8 0M22.9 17.2c-5 5-13.2 5-18.3 0M26.8 21.6c-7.3 6.9-18.7 6.8-26 0" stroke="#6F7882" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
);

export const AccessoryIcon = (props: IconProps) => (
    <svg viewBox="0 0 26 26" fill="none" aria-hidden="true" {...props}>
        <path d="m16.48 6.48-3.48-3.48-3.48 3.48M4 10.2h4m3 0h4m3 0h4M4 15.83h4m3 0h4m3 0h4M4 21.48h4m3 0h4m3 0h4" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="10.2" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="13" cy="10.2" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="20" cy="10.2" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="6" cy="15.83" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="13" cy="15.83" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="20" cy="15.83" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="6" cy="21.48" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="13" cy="21.48" r="1.5" fill="white" stroke="#6F7882" />
        <circle cx="20" cy="21.48" r="1.5" fill="white" stroke="#6F7882" />
    </svg>
);

// export const AccessoryIcon = (props: IconProps) => (
//     <svg viewBox="0 0 26 26" fill="none" aria-hidden="true" {...props}>
//         <path d="M4 10.2h4m3 0h4m3 0h4M4 15.8h4m3 0h4m3 0h4M4 21.5h4m3 0h4m3 0h4" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="m16.5 6.5-3.5-3.5-3.5 3.5" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

export const PlusIcon = (props: IconProps) => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_68_9817)">
            <path d="M7.33333 3.33333H4.66667V0.666667C4.66667 0.489856 4.59643 0.320286 4.4714 0.195262C4.34638 0.0702379 4.17681 0 4 0C3.82319 0 3.65362 0.0702379 3.5286 0.195262C3.40357 0.320286 3.33333 0.489856 3.33333 0.666667V3.33333H0.666667C0.489856 3.33333 0.320286 3.40357 0.195262 3.5286C0.0702379 3.65362 0 3.82319 0 4C0 4.17681 0.0702379 4.34638 0.195262 4.4714C0.320286 4.59643 0.489856 4.66667 0.666667 4.66667H3.33333V7.33333C3.33333 7.51014 3.40357 7.67971 3.5286 7.80474C3.65362 7.92976 3.82319 8 4 8C4.17681 8 4.34638 7.92976 4.4714 7.80474C4.59643 7.67971 4.66667 7.51014 4.66667 7.33333V4.66667H7.33333C7.51014 4.66667 7.67971 4.59643 7.80474 4.4714C7.92976 4.34638 8 4.17681 8 4C8 3.82319 7.92976 3.65362 7.80474 3.5286C7.67971 3.40357 7.51014 3.33333 7.33333 3.33333Z" fill={props.fill} />
        </g>
        <defs>
            <clipPath id="clip0_68_9817">
                <rect width="8" height="8" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const MinusIcon = (props: IconProps) => (
    <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M7.33333 1.6H0.666667C0.489856 1.6 0.320286 1.51571 0.195262 1.36569C0.0702379 1.21566 0 1.01217 0 0.8C0 0.587827 0.0702379 0.384344 0.195262 0.234315C0.320286 0.0842856 0.489856 0 0.666667 0H7.33333C7.51014 0 7.67971 0.0842856 7.80474 0.234315C7.92976 0.384344 8 0.587827 8 0.8C8 1.01217 7.92976 1.21566 7.80474 1.36569C7.67971 1.51571 7.51014 1.6 7.33333 1.6Z" fill={props.fill} />
    </svg>
);


export const CloseIcon = (props: IconProps) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.40682 9.43039C6.20741 9.70956 5.7925 9.70956 5.59309 9.43038L1.56472 3.79062C1.32834 3.45968 1.5649 3 1.97159 3L10.0284 3C10.4351 3 10.6716 3.45969 10.4353 3.79062L6.40682 9.43039Z" fill="#4E2FD2" />
    </svg>

)



