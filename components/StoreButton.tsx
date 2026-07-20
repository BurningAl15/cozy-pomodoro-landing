import React from 'react';
import { useStoreLinks } from '@/hooks/useAppRegistry';
interface StoreButtonProps {
    platform: 'android' | 'ios';
}

export default function StoreButton({ platform }: StoreButtonProps) {
    const links = useStoreLinks('cozyPomodoro');
    const link = links[platform];

    const badgeSrc = platform === 'android'
        ? "/assets/google-play-badge.png"
        : "/assets/app-store-badge.svg";

    const altText = platform === 'android'
        ? "Get it on Google Play"
        : "Download on the App Store";

    const height = platform === 'android' ? '54px' : '40px';

    if (!link) return null;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="store-badge-link"
            style={{
                display: 'inline-block',
                height: height,
                transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <img
                src={badgeSrc}
                alt={altText}
                style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain'
                }}
            />
        </a>
    );
}
