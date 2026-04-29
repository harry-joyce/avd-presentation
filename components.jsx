// ============================================================
// AV Distribution deck — shared chrome & primitives
// Broadcast/AV visual vocabulary: timecodes, frame marks,
// waveform motifs, film-leader counters.
// ============================================================

const TYPE_SCALE = {
  hero: 120,
  title: 64,
  subtitle: 44,
  body: 34,
  small: 28,
  tag: 22,
};

const SPACING = {
  paddingTop: 100,
  paddingBottom: 80,
  paddingX: 100,
  titleGap: 52,
  itemGap: 28,
};

// Three variations, switched by data-variant on <deck-stage>
// A: editorial — cream, serif titles
// B: timecode — colder paper, all-mono
// C: leader — amber-forward, oversized numerals
const VARIANTS = {
  A: {
    bg: "#F4EEE4",
    paper: "#EDE3D2",
    ink: "#1C1A17",
    muted: "#6E6458",
    rule: "#C8BBA6",
    accent: "oklch(0.68 0.12 65)",     // warm amber
    accentInk: "#1C1A17",
    titleFamily: '"Newsreader", "Source Serif 4", Georgia, serif',
    titleWeight: 500,
    titleStyle: "normal",
    titleItalicAccent: true,
    bodyFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monoFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
    label: "EDITORIAL BROADCAST",
  },
  B: {
    bg: "#EFE9DD",
    paper: "#E4DCC9",
    ink: "#15130F",
    muted: "#6A5F4E",
    rule: "#B8AB93",
    accent: "oklch(0.68 0.12 65)",
    accentInk: "#15130F",
    titleFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
    titleWeight: 500,
    titleStyle: "normal",
    titleItalicAccent: false,
    bodyFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
    monoFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
    label: "TIMECODE GRID",
  },
  C: {
    bg: "#1C1A17",
    paper: "#24211C",
    ink: "#F4EEE4",
    muted: "#A89C88",
    rule: "#3A352D",
    accent: "oklch(0.78 0.14 70)",     // brighter amber for dark
    accentInk: "#1C1A17",
    titleFamily: '"Newsreader", "Source Serif 4", Georgia, serif',
    titleWeight: 500,
    titleStyle: "normal",
    titleItalicAccent: true,
    bodyFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monoFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
    label: "FILM LEADER",
  },
};

// Tick animation for the running timecode
function useTimecode(startSecs = 0) {
  const [t, setT] = React.useState(startSecs);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function formatTC(totalFrames) {
  // Fake 24fps timecode: HH:MM:SS:FF
  const fps = 24;
  const f = Math.floor(totalFrames % fps);
  const totalSecs = Math.floor(totalFrames / fps);
  const s = totalSecs % 60;
  const m = Math.floor(totalSecs / 60) % 60;
  const h = Math.floor(totalSecs / 3600);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

// ============================================================
// SlideFrame: common broadcast chrome around every slide
// ============================================================
function SlideFrame({
  children,
  variant,
  slideNo,
  totalSlides,
  section,
  tcOffset = 0,
  mode = "default", // default | cover | section
  style = {},
}) {
  const v = VARIANTS[variant];
  // Deterministic timecode per-slide so it doesn't feel random
  const baseFrames = 24 * 60 * 2 + slideNo * 24 * 47 + tcOffset;
  const [frames, setFrames] = React.useState(baseFrames);
  React.useEffect(() => {
    setFrames(baseFrames);
    const id = setInterval(() => setFrames((x) => x + 1), 1000 / 24);
    return () => clearInterval(id);
  }, [slideNo]);

  const bg = mode === "section" ? v.paper : v.bg;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: bg,
        color: v.ink,
        fontFamily: v.bodyFamily,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Top chrome */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: SPACING.paddingX,
          right: SPACING.paddingX,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: v.monoFamily,
          fontSize: TYPE_SCALE.tag,
          letterSpacing: "0.08em",
          color: v.muted,
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, whiteSpace: "nowrap" }}>
          <RecDot accent={v.accent} />
          <span style={{ color: v.ink }}>AV DISTRIBUTION</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>PUBLICATION PRODUCTION SUPPORT</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, whiteSpace: "nowrap" }}>
          <span>{section || "—"}</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{formatTC(frames)}</span>
        </div>
      </div>

      {/* Top rule */}
      <div
        style={{
          position: "absolute",
          top: 74,
          left: SPACING.paddingX,
          right: SPACING.paddingX,
          height: 1,
          background: v.rule,
        }}
      />
      <FrameMarks top={74} variant={v} />

      {/* Bottom chrome */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: SPACING.paddingX,
          right: SPACING.paddingX,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: v.monoFamily,
          fontSize: TYPE_SCALE.tag,
          letterSpacing: "0.08em",
          color: v.muted,
          textTransform: "uppercase",
        }}
      >
        <span style={{ whiteSpace: "nowrap" }}>{v.label}</span>
        <span style={{ whiteSpace: "nowrap" }}>
          REEL {String(slideNo).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 74,
          left: SPACING.paddingX,
          right: SPACING.paddingX,
          height: 1,
          background: v.rule,
        }}
      />
      <FrameMarks top={null} bottom={74} variant={v} />

      {children}
    </div>
  );
}

function RecDot({ accent }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: accent,
        boxShadow: `0 0 0 3px ${accent}22`,
        animation: "av-blink 1.6s ease-in-out infinite",
      }}
    />
  );
}

// Tiny sprocket-like ticks under the rules
function FrameMarks({ top, bottom, variant }) {
  const marks = Array.from({ length: 40 });
  return (
    <div
      style={{
        position: "absolute",
        left: SPACING.paddingX,
        right: SPACING.paddingX,
        top: top != null ? top + 1 : undefined,
        bottom: bottom != null ? bottom - 9 : undefined,
        height: 8,
        display: "flex",
        justifyContent: "space-between",
        pointerEvents: "none",
      }}
    >
      {marks.map((_, i) => (
        <div
          key={i}
          style={{
            width: 1,
            height: i % 5 === 0 ? 8 : 4,
            background: variant.rule,
            opacity: i % 5 === 0 ? 1 : 0.6,
          }}
        />
      ))}
    </div>
  );
}

// ============================================================
// Primitives
// ============================================================

function Eyebrow({ children, variant, style = {}, delay = 0 }) {
  const v = VARIANTS[variant];
  return (
    <div
      data-anim="up"
      style={{
        "--anim-delay": delay,
        fontFamily: v.monoFamily,
        fontSize: TYPE_SCALE.tag,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: v.muted,
        display: "flex",
        alignItems: "center",
        gap: 14,
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 1,
          background: v.accent,
        }}
      />
      {children}
    </div>
  );
}

function BigTitle({ children, variant, accentWord, size = TYPE_SCALE.title, style = {}, delay = 1 }) {
  const v = VARIANTS[variant];
  return (
    <h1
      data-anim="up"
      style={{
        "--anim-delay": delay,
        fontFamily: v.titleFamily,
        fontWeight: v.titleWeight,
        fontSize: size,
        lineHeight: 1.04,
        letterSpacing: v.titleFamily.includes("Mono") ? "-0.01em" : "-0.015em",
        color: v.ink,
        margin: 0,
        textWrap: "balance",
        ...style,
      }}
    >
      {children}
      {accentWord && (
        <>
          {" "}
          <span
            style={{
              fontStyle: v.titleItalicAccent ? "italic" : "normal",
              color: v.accent,
            }}
          >
            {accentWord}
          </span>
        </>
      )}
    </h1>
  );
}

function Body({ children, variant, size = TYPE_SCALE.body, style = {}, delay = 2 }) {
  const v = VARIANTS[variant];
  return (
    <p
      data-anim="up"
      style={{
        "--anim-delay": delay,
        fontFamily: v.bodyFamily,
        fontSize: size,
        lineHeight: 1.35,
        color: v.ink,
        margin: 0,
        textWrap: "pretty",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// Waveform bar used as decoration.
// When `animated`, each bar gently pulses at a unique phase to feel like
// audio is playing. The effect is purely decorative (CSS animation, no JS).
function Waveform({ variant, height = 80, bars = 64, animated = false, style = {} }) {
  const v = VARIANTS[variant];
  // Deterministic pseudo-random heights
  const { heights, delays, durations } = React.useMemo(() => {
    const heights = [];
    const delays = [];
    const durations = [];
    let s = 1;
    for (let i = 0; i < bars; i++) {
      s = (s * 9301 + 49297) % 233280;
      const r = s / 233280;
      const env = Math.sin((i / bars) * Math.PI);
      heights.push(0.15 + env * 0.85 * (0.35 + r * 0.65));
      delays.push(-(r * 1.2).toFixed(3));
      durations.push((0.7 + r * 0.6).toFixed(3));
    }
    return { heights, delays, durations };
  }, [bars]);
  return (
    <div
      className={animated ? "av-wave-playing" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        height,
        ...style,
      }}
    >
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h * 100}%`,
            background: v.ink,
            opacity: 0.85,
            borderRadius: 0.5,
            transformOrigin: "center",
            animationDelay: animated ? `${delays[i]}s` : undefined,
            animationDuration: animated ? `${durations[i]}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}

// Small stat card with mono label
function StatBlock({ number, label, caption, variant, style = {} }) {
  const v = VARIANTS[variant];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: TYPE_SCALE.tag,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: v.muted,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: v.titleFamily,
          fontSize: 140,
          lineHeight: 0.92,
          fontWeight: v.titleWeight,
          letterSpacing: "-0.03em",
          color: v.ink,
          fontFeatureSettings: '"tnum" 1, "lnum" 1',
        }}
      >
        {number}
      </div>
      {caption && (
        <div
          style={{
            fontSize: TYPE_SCALE.small,
            color: v.muted,
            lineHeight: 1.35,
            maxWidth: 420,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

// Pipeline step pill
function PipelineStep({ no, title, owner, active, variant, style = {} }) {
  const v = VARIANTS[variant];
  const fg = active ? v.accentInk : v.ink;
  const bg = active ? v.accent : "transparent";
  const border = active ? v.accent : v.rule;
  return (
    <div
      style={{
        border: `1px solid ${border}`,
        background: bg,
        color: fg,
        padding: "22px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minHeight: 170,
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: TYPE_SCALE.tag,
          letterSpacing: "0.1em",
          opacity: 0.7,
        }}
      >
        STEP {String(no).padStart(2, "0")}
      </div>
      <div
        style={{
          fontFamily: v.titleFamily,
          fontSize: 28,
          lineHeight: 1.1,
          fontWeight: v.titleWeight,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: "auto",
          fontFamily: v.monoFamily,
          fontSize: 18,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        {owner}
      </div>
    </div>
  );
}

Object.assign(window, {
  TYPE_SCALE,
  SPACING,
  VARIANTS,
  SlideFrame,
  Eyebrow,
  BigTitle,
  Body,
  Waveform,
  StatBlock,
  PipelineStep,
  formatTC,
});
