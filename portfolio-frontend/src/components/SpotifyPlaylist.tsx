// src/components/SpotifyPlaylist.tsx
import { useMemo, useState } from "react";

type SpotifyPlaylistProps = {
  title?: string;
  playlistEmbedSrc: string;
  playlistUrl: string;
  initialOpen?: boolean;
  height?: number;
};

export default function SpotifyPlaylist({
  title = "Playlist",
  playlistEmbedSrc,
  playlistUrl,
  initialOpen = false,
  height = 352,
}: SpotifyPlaylistProps) {
  const [open, setOpen] = useState<boolean>(initialOpen);

  const buttonLabel = useMemo(() => (open ? "Hide" : "Show"), [open]);

  return (
    <div className="spotify">
      <div className="spotify-head">
        <div className="spotify-left">
          <p className="kicker spotify-kicker">Spotify</p>
          <p className="spotify-text">{title}</p>
        </div>

        <div className="spotify-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {buttonLabel}
          </button>

          <a
            className="btn btn-secondary"
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Spotify
          </a>
        </div>
      </div>

      {open ? (
        <div className="spotify-embed" aria-label="Spotify playlist embed">
          <iframe
            style={{ borderRadius: 12 }}
            src={playlistEmbedSrc}
            width="100%"
            height={height}
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify playlist"
          />
        </div>
      ) : null}
    </div>
  );
}
