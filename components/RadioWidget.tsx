import React, { useState, useRef, useEffect } from 'react';

const TRACKS = [
    { name: "Coffee Lofi", artist: "delosound", url: "assets/music/track1.mp3" },
    { name: "Lofi Study", artist: "fassounds", url: "assets/music/track2.mp3" }
];

export default function RadioWidget() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef<HTMLAudioElement>(null);

    const currentTrack = TRACKS[currentTrackIndex];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio play failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`radio-widget ${isPlaying ? 'playing' : ''}`}>
            <div className="radio-header">
                <span style={{ fontSize: '1.2rem' }}>🎵</span>
                <span style={{ fontWeight: 600 }}>Cozy Radio Preview</span>
            </div>
            <div className="radio-player">
                <div className="track-info">
                    <span id="track-name" style={{ display: 'block', fontWeight: 'bold' }}>{currentTrack.name}</span>
                    <span id="track-artist" className="track-artist">{currentTrack.artist}</span>
                </div>
                <button
                    onClick={togglePlay}
                    className="play-btn"
                >
                    {isPlaying ? '⏸' : '▶'}
                </button>
            </div>
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src={currentTrack.url}
                loop
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
}
