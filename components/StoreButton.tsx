import React from 'react';

interface StoreButtonProps {
    platform: 'android' | 'ios';
}

export default function StoreButton({ platform }: StoreButtonProps) {
    const link = platform === 'android'
        ? "https://play.google.com/store/apps/details?id=com.fatcatgamestudio.cozypomodoro"
        : "https://apps.apple.com/app/id6759178972";

    const badgeSrc = platform === 'android'
        ? "/assets/google-play-badge.png"
        : "/assets/app-store-badge.svg";

    const altText = platform === 'android'
        ? "Get it on Google Play"
        : "Download on the App Store";

    const height = platform === 'android' ? '54px' : '40px';

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
