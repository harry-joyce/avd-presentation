// ============================================================
// AV Distribution — slides
// 12 slides, variant-aware (A/B/C). All slides receive { variant }.
// ============================================================

const TOTAL = 14;

// Small helper to do an inner content grid
function SlideInner({ children, style = {} }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 132,
        left: SPACING.paddingX,
        right: SPACING.paddingX,
        bottom: 132,
        display: "flex",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ============================================================
// 01 — COVER
// ============================================================
function Slide01({ variant }) {
  const v = VARIANTS[variant];
  return (
    <SlideFrame
      variant={variant}
      slideNo={1}
      totalSlides={TOTAL}
      section="COVER"
    >
      <SlideInner
        style={{ flexDirection: "column", justifyContent: "flex-end" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 80,
          }}
        >
          <div style={{ flex: "1 1 auto" }}>
            <Eyebrow variant={variant} style={{ marginBottom: 40 }}>
              PPS / TEAM BRIEFING · 2026
            </Eyebrow>
            <BigTitle
              variant={variant}
              size={160}
              style={{ letterSpacing: "-0.03em" }}
            >
              AV{" "}
              <span
                style={{
                  fontStyle: v.titleItalicAccent ? "italic" : "normal",
                  color: v.accent,
                }}
              >
                Distribution
              </span>
            </BigTitle>
            <div
              style={{
                marginTop: 44,
                fontFamily: v.bodyFamily,
                fontSize: TYPE_SCALE.subtitle,
                lineHeight: 1.25,
                color: v.muted,
                maxWidth: 1100,
              }}
            >
              The bridge between English source media and the world&rsquo;s
              translation teams.
            </div>
          </div>

          <div
            style={{
              flex: "0 0 380px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 18,
              fontFamily: v.monoFamily,
              fontSize: TYPE_SCALE.tag,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: v.muted,
              whiteSpace: "nowrap",
            }}
          >
            <div>PPS · DEPARTMENT MEETING</div>
            <div
              style={{
                color: v.ink,
                fontSize: TYPE_SCALE.body,
                letterSpacing: "0.06em",
              }}
            >
              30TH APRIL 2026
            </div>
            <div>{"\n"}</div>
            <div
              style={{
                width: 260,
                height: 1,
                background: v.rule,
                margin: "10px 0",
              }}
            />
            <div>RUNTIME · 00:10:00:00</div>
            <div>AUDIENCE · PPS DEPT.</div>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <Waveform variant={variant} height={46} bars={120} />
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

// ============================================================
// 02 — WHO WE ARE
// ============================================================
function Slide02({ variant }) {
  const v = VARIANTS[variant];
  const locations = [
    ["UNITED STATES", "", 19],
    ["BRITAIN", "", 1],
    ["SCANDINAVIA", "", 1],
    ["PORTUGAL", "", 1],
    ["MOZAMBIQUE", "", 1],
    ["CENTRAL AMERICA", "", 1],
    ["MALAYSIA", "", 1],
    ["TAIWAN", "", 1],
    ["ECUADOR", "", 1],
  ];
  const roles = [
    ["Team Lead / Asst. Team Lead", 2],
    ["AV Media Packager", 7],
    ["Audio / Song Support", 4],
    ["Proofreader / Subtitles / PPT", 5],
    ["Compositor", 3],
    ["Secretary", 3],
    ["Scheduler", 1],
    ["Quality Assurance", 1],
    ["Documentation", 1],
  ];

  return (
    <SlideFrame
      variant={variant}
      slideNo={2}
      totalSlides={TOTAL}
      section="01 / WHO WE ARE"
    >
      <SlideInner style={{ flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 80 }}>
          <Eyebrow variant={variant}>01 — WHO WE ARE</Eyebrow>
          <div style={{ marginLeft: "auto", display: "flex", gap: 56 }}>
            <MiniStat n="27" label="Team members" variant={variant} />
            <MiniStat n="9" label="Countries" variant={variant} />
            <MiniStat n="9" label="Role types" variant={variant} />
          </div>
        </div>

        <BigTitle variant={variant}>
          Twenty-seven people,{" "}
          <span
            style={{
              fontStyle: v.titleItalicAccent ? "italic" : "normal",
              color: v.accent,
            }}
          >
            a crack team!
          </span>
        </BigTitle>

        <div style={{ display: "flex", gap: 80, flex: 1, minHeight: 0 }}>
          {/* Locations column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <ColumnHead variant={variant}>LOCATIONS</ColumnHead>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {locations.map(([city, country, n]) => (
                <LocRow
                  key={city}
                  city={city}
                  country={country}
                  n={n}
                  variant={variant}
                />
              ))}
            </div>
          </div>

          {/* Roles column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <ColumnHead variant={variant}>ROLE MIX</ColumnHead>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {roles.map(([role, n]) => (
                <RoleRow key={role} role={role} n={n} variant={variant} />
              ))}
            </div>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 18,
                borderTop: `1px solid ${v.rule}`,
                fontFamily: v.monoFamily,
                fontSize: 20,
                letterSpacing: "0.06em",
                color: v.muted,
                lineHeight: 1.5,
              }}
            >
              A distributed crew.
            </div>
          </div>
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

function MiniStat({ n, label, variant }) {
  const v = VARIANTS[variant];
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
      <div
        style={{
          fontFamily: v.titleFamily,
          fontSize: 56,
          lineHeight: 1,
          fontWeight: v.titleWeight,
          color: v.ink,
          letterSpacing: "-0.02em",
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: TYPE_SCALE.tag,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: v.muted,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function ColumnHead({ children, variant }) {
  const v = VARIANTS[variant];
  return (
    <div
      style={{
        fontFamily: v.monoFamily,
        fontSize: TYPE_SCALE.tag,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        color: v.muted,
        paddingBottom: 10,
        borderBottom: `1px solid ${v.rule}`,
      }}
    >
      {children}
    </div>
  );
}

function LocRow({ city, country, n, variant }) {
  const v = VARIANTS[variant];
  const maxN = 22;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 80px 40px",
        alignItems: "center",
        gap: 14,
      }}
    >
      <div style={{ fontSize: 22, fontFamily: v.bodyFamily }}>
        {city}
        {country && (
          <span
            style={{
              color: v.muted,
              marginLeft: 8,
              fontFamily: v.monoFamily,
              fontSize: 18,
            }}
          >
            {country}
          </span>
        )}
      </div>
      <div
        style={{
          height: 6,
          background: v.rule,
          position: "relative",
          borderRadius: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: `${(n / maxN) * 100}%`,
            background: v.accent,
          }}
        />
      </div>
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: 20,
          color: v.ink,
          textAlign: "right",
          fontFeatureSettings: '"tnum" 1',
        }}
      >
        {String(n).padStart(2, "0")}
      </div>
    </div>
  );
}

function RoleRow({ role, n, variant }) {
  const v = VARIANTS[variant];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 8,
        borderBottom: `1px dashed ${v.rule}`,
      }}
    >
      <div style={{ fontSize: 22, fontFamily: v.bodyFamily }}>{role}</div>
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: 22,
          color: v.muted,
          letterSpacing: "0.04em",
        }}
      >
        ×{n}
      </div>
    </div>
  );
}

function LeadCard({ name, role, loc, variant, highlight }) {
  const v = VARIANTS[variant];
  return (
    <div
      style={{
        border: `1px solid ${highlight ? v.accent : v.rule}`,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        background: highlight
          ? `color-mix(in oklch, ${v.accent} 10%, transparent)`
          : "transparent",
      }}
    >
      <div
        style={{
          fontFamily: v.titleFamily,
          fontSize: 28,
          fontWeight: v.titleWeight,
          letterSpacing: "-0.01em",
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 20, color: v.ink }}>{role}</div>
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: 18,
          color: v.muted,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {loc}
      </div>
    </div>
  );
}

// ============================================================
// 03 — OUR ROLE IN THE PIPELINE
// ============================================================
function Slide03({ variant }) {
  const v = VARIANTS[variant];
  const stages = [
    { label: "FILMING & EDIT", owner: "AVS" },
    { label: "OST REVIEW", owner: "AVS → US" },
    { label: "MEDIA PREP", owner: "US" },
    { label: "PACKAGING", owner: "US" },
    { label: "MEDIACENTER", owner: "US" },
    { label: "TRANSLATION", owner: "LANGUAGES" },
    { label: "PUBLICATION", owner: "JW.ORG" },
  ];
  return (
    <SlideFrame
      variant={variant}
      slideNo={3}
      totalSlides={TOTAL}
      section="02 / ROLE"
    >
      <SlideInner style={{ flexDirection: "column", gap: 56 }}>
        <Eyebrow variant={variant}>02 — OUR ROLE IN THE PIPELINE</Eyebrow>
        <BigTitle variant={variant}>
          We sit between creation and{" "}
          <span
            style={{
              fontStyle: v.titleItalicAccent ? "italic" : "normal",
              color: v.accent,
            }}
          >
            translation.
          </span>
        </BigTitle>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            gap: 0,
            alignItems: "stretch",
          }}
        >
          {stages.map((s, i) => {
            const ours = (i >= 1 && i <= 4) || i === 6;
            return (
              <React.Fragment key={s.label}>
                <div
                  style={{
                    flex: 1,
                    padding: "22px 18px",
                    border: `1px solid ${ours ? v.accent : v.rule}`,
                    background: ours
                      ? `color-mix(in oklch, ${v.accent} 12%, transparent)`
                      : "transparent",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    minHeight: 180,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: v.monoFamily,
                      fontSize: 18,
                      letterSpacing: "0.08em",
                      color: v.muted,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontFamily: v.titleFamily,
                      fontSize: 24,
                      fontWeight: v.titleWeight,
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      fontFamily: v.monoFamily,
                      fontSize: 16,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: ours ? v.ink : v.muted,
                    }}
                  >
                    {s.owner}
                  </div>
                  {ours && (
                    <div
                      style={{
                        position: "absolute",
                        top: -12,
                        right: 12,
                        background: v.accent,
                        color: v.accentInk,
                        fontFamily: v.monoFamily,
                        fontSize: 14,
                        padding: "3px 8px",
                        letterSpacing: "0.12em",
                      }}
                    >
                      OUR SCOPE
                    </div>
                  )}
                </div>
                {i < stages.length - 1 && (
                  <div
                    style={{
                      width: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: v.muted,
                    }}
                  >
                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                      <path
                        d="M0 7 H18 M14 2 L19 7 L14 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            gap: 80,
            paddingTop: 36,
            borderTop: `1px solid ${v.rule}`,
          }}
        >
          <div style={{ flex: 1 }}>
            <Body variant={variant} size={28} style={{ color: v.muted }}>
              UPSTREAM
            </Body>
            <Body variant={variant} style={{ marginTop: 10 }}>
              Audio Video Services hands us the source — filmed, edited, with
              OST.
            </Body>
          </div>
          <div style={{ flex: 1 }}>
            <Body variant={variant} size={28} style={{ color: v.muted }}>
              DOWNSTREAM
            </Body>
            <Body variant={variant} style={{ marginTop: 10 }}>
              Translation teams pick up translation-ready packages and record in
              their language.
            </Body>
          </div>
          <div style={{ flex: 1 }}>
            <Body variant={variant} size={28} style={{ color: v.muted }}>
              OUR JOB
            </Body>
            <Body variant={variant} style={{ marginTop: 10 }}>
              Absorb the technical complexity so translators focus on language
              and delivery.
            </Body>
          </div>
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

// ============================================================
// 04 — FIVE FUNCTIONS
// (now six, after splitting Scheduling & Support)
// ============================================================
function Slide04({ variant }) {
  const v = VARIANTS[variant];
  const items = [
    {
      n: "01",
      t: "Pre-Translation Media Preparation",
      s: "OST, templates, integration",
    },
    { n: "02", t: "Packaging & Distribution", s: "Masters into MediaCenter" },
    {
      n: "03",
      t: "Translation Reference Materials",
      s: "Scripts, subtitles, metadata",
    },
    {
      n: "04",
      t: "Quality & Risk Management",
      s: "Proofreading and proof-watching",
    },
    { n: "05", t: "Scheduling", s: "Calendars, spikes, cadence" },
    { n: "06", t: "Support", s: "On the line for translators" },
  ];
  return (
    <SlideFrame
      variant={variant}
      slideNo={4}
      totalSlides={TOTAL}
      section="03 / FUNCTIONS"
    >
      <SlideInner style={{ flexDirection: "column", gap: 52 }}>
        <Eyebrow variant={variant}>03 — WHAT WE DO</Eyebrow>
        <BigTitle variant={variant}>
          Six functions,{" "}
          <span
            style={{
              fontStyle: v.titleItalicAccent ? "italic" : "normal",
              color: v.accent,
            }}
          >
            one goal.
          </span>
        </BigTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 14,
            marginTop: 12,
          }}
        >
          {items.map((it) => (
            <div
              key={it.n}
              style={{
                border: `1px solid ${v.rule}`,
                padding: "28px 22px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 320,
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: v.monoFamily,
                  fontSize: 22,
                  letterSpacing: "0.1em",
                  color: v.accent,
                }}
              >
                F-{it.n}
              </div>
              <div
                style={{
                  fontFamily: v.titleFamily,
                  fontSize: 28,
                  lineHeight: 1.15,
                  fontWeight: v.titleWeight,
                  letterSpacing: "-0.01em",
                }}
              >
                {it.t}
              </div>
              <div
                style={{
                  marginTop: "auto",
                  fontSize: 20,
                  color: v.muted,
                  lineHeight: 1.35,
                  fontFamily: v.bodyFamily,
                }}
              >
                {it.s}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            fontFamily: v.bodyFamily,
            fontSize: TYPE_SCALE.small,
            color: v.muted,
            maxWidth: 1100,
          }}
        >
          Each function is tightly connected. A single video touches all six
          before it is ready for the world&rsquo;s languages.
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

// ============================================================
// Animated subtitle component
// ============================================================
function SubtitleAnimator({ lines, variant }) {
  const v = VARIANTS[variant];
  const [idx, setIdx] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const SHOW = 3200;
    const FADE = 400;
    const showTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % lines.length);
        setVisible(true);
      }, FADE);
    }, SHOW);
    return () => clearTimeout(showTimer);
  }, [idx, lines.length]);

  return (
    <div
      style={{
        marginTop: "auto",
        paddingTop: 24,
      }}
    >
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: 13,
          letterSpacing: "0.08em",
          color: v.muted,
          marginBottom: 10,
        }}
      >
        SUBTITLE PREVIEW
      </div>
      <div
        style={{
          position: "relative",
          background:
            variant === "C" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
          border: `1px solid ${v.rule}`,
          borderRadius: 2,
          padding: "18px 24px 18px 24px",
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Timecode strip */}
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 12,
            fontFamily: v.monoFamily,
            fontSize: 11,
            color: v.accent,
            letterSpacing: "0.06em",
            opacity: 0.7,
          }}
        >
          SUB {String(idx + 1).padStart(3, "0")} /{" "}
          {String(lines.length).padStart(3, "0")}
        </div>
        {/* Subtitle text */}
        <div
          style={{
            fontFamily: v.bodyFamily || v.monoFamily,
            fontSize: 22,
            lineHeight: 1.45,
            color: v.ink,
            textAlign: "center",
            maxWidth: 560,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {lines[idx]}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Generic "function detail" slide (05–09)
// ============================================================
function FunctionSlide({
  variant,
  slideNo,
  fnNo,
  title,
  sectionTag,
  lede,
  tasks,
  tools,
  sideKind,
  subtitleLines,
}) {
  const v = VARIANTS[variant];
  return (
    <SlideFrame
      variant={variant}
      slideNo={slideNo}
      totalSlides={TOTAL}
      section={sectionTag}
    >
      <SlideInner style={{ flexDirection: "column", gap: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Eyebrow variant={variant}>FUNCTION {fnNo} / 05</Eyebrow>
        </div>

        <BigTitle variant={variant} size={72}>
          {title}
        </BigTitle>

        <div style={{ display: "flex", gap: 80, flex: 1, minHeight: 0 }}>
          <div
            style={{
              flex: 1.25,
              display: "flex",
              flexDirection: "column",
              gap: 30,
              minHeight: 0,
            }}
          >
            <Body
              variant={variant}
              size={32}
              style={{ color: v.muted, maxWidth: 780 }}
            >
              {lede}
            </Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                marginTop: 8,
              }}
            >
              {tasks.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr",
                    alignItems: "baseline",
                    gap: 20,
                    padding: "20px 0",
                    borderTop: `1px solid ${v.rule}`,
                    ...(i === tasks.length - 1
                      ? { borderBottom: `1px solid ${v.rule}` }
                      : {}),
                  }}
                >
                  <div
                    style={{
                      fontFamily: v.monoFamily,
                      fontSize: TYPE_SCALE.tag,
                      color: v.muted,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontSize: 30,
                      lineHeight: 1.35,
                      fontFamily: v.bodyFamily,
                      color: v.ink,
                    }}
                  >
                    {t}
                  </div>
                </div>
              ))}
            </div>
            {subtitleLines && (
              <SubtitleAnimator lines={subtitleLines} variant={variant} />
            )}
          </div>

          {/* Side panel */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <ColumnHead variant={variant}>TOOLS & ARTIFACTS</ColumnHead>
            {tools.some((t) => t.trim()) && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {tools
                  .filter((t) => t.trim())
                  .map((t) => (
                    <div
                      key={t}
                      style={{
                        border: `1px solid ${v.rule}`,
                        padding: "10px 16px",
                        fontFamily: v.monoFamily,
                        fontSize: 20,
                        letterSpacing: "0.06em",
                        color: v.ink,
                      }}
                    >
                      {t}
                    </div>
                  ))}
              </div>
            )}
            <div style={{ marginTop: 12 }}>
              <SideIllustration kind={sideKind} variant={variant} />
            </div>
          </div>
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

function SideIllustration({ kind, variant }) {
  const v = VARIANTS[variant];
  // Simple, non-decorative, variant-tinted diagram based on kind
  const box = {
    border: `1px solid ${v.rule}`,
    padding: 22,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    background: "transparent",
  };
  if (kind === "waveform") {
    return (
      <img
        src="assets/meps-infographic-example.png"
        alt="MEPS infographic example showing timeline layout"
        style={{ width: "100%", display: "block" }}
      />
    );
  }
  if (kind === "package") {
    return (
      <div style={box}>
        <div
          style={{
            fontFamily: v.monoFamily,
            fontSize: 18,
            color: v.muted,
            letterSpacing: "0.1em",
          }}
        >
          MEDIACENTER · CONTAINER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            ["MASTER_VIDEO.MP4", "1920×1080 · 30p"],
            ["MASTER_AUDIO.WAV", "48 kHz / 16-bit"],
            ["OST_ELEMENTS.ZIP", "PSD + AEP"],
            ["SCRIPT_REF.DOCX", "Reference only"],
            ["METADATA.JSON", "Verified"],
          ].map(([name, detail]) => (
            <div
              key={name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderTop: `1px dashed ${v.rule}`,
                fontFamily: v.monoFamily,
                fontSize: 18,
              }}
            >
              <span>{name}</span>
              <span style={{ color: v.muted }}>{detail}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontFamily: v.monoFamily,
            fontSize: 16,
            color: v.accent,
            letterSpacing: "0.08em",
          }}
        >
          STATUS · READY FOR LANGUAGES
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily: v.monoFamily,
            fontSize: 18,
            color: v.muted,
            letterSpacing: "0.1em",
          }}
        >
          TRACK 01 · OST_ENG · 48 kHz / 16-bit
        </div>
        <Waveform variant={variant} height={120} bars={100} animated />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: v.monoFamily,
            fontSize: 16,
            color: v.muted,
          }}
        >
          <span>00:00:00:00</span>
          <span>00:00:15:12</span>
          <span>00:00:30:00</span>
        </div>
      </div>
    );
  }
  if (kind === "doc") {
    const segments = [
      {
        id: "S02",
        type: "Speech",
        speaker: "Mark Noumair",
        text: [
          {
            t: "He had to cultivate this deep attachment for his Father\u2014cultivate this deep love. How? By observing his Father\u2019s personality. He would observe closely how his Father used his power, his authority, his strength in behalf of people\u2014\u2018those crushed, those lowly in spirit.\u2019 He watched his Father deal with ",
          },
          {
            t: "Ruth the Moabite girl\u2014a Moabite girl from a pagan nation. Might he have thought: \u2018Now, a Moabite girl? Weren\u2019t these the Moabite women\u2014? Weren\u2019t these the very women that lured the Israelite men into immorality right on the threshold of the Promised Land?\u2019",
            bold: true,
          },
          {
            t: " True. But his Father saw that this girl was different. She was different. His Father did not put people in categories; he did not stereotype individuals. \u2018Oh, that\u2019s the Moabite girl. I\u2019m not going to deal with her.\u2019 No. Jehovah God looked at Ruth as an individual.",
          },
        ],
      },
    ];
    return (
      <div style={{ ...box, padding: 0, gap: 0, overflow: "hidden" }}>
        {/* Script header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: `1px solid ${v.rule}`,
            padding: "14px 20px",
          }}
        >
          <div
            style={{
              fontFamily: v.monoFamily,
              fontSize: 16,
              letterSpacing: "0.1em",
              color: v.muted,
            }}
          >
            REFERENCE SCRIPT · SAMPLE
          </div>
          <div
            style={{
              fontFamily: v.monoFamily,
              fontSize: 14,
              color: v.muted,
              letterSpacing: "0.06em",
            }}
          >
            PG. 1
          </div>
        </div>
        {/* Segments */}
        <div
          style={{ padding: "8px 0", display: "flex", flexDirection: "column" }}
        >
          {segments.map((seg, i) => (
            <div
              key={i}
              style={{
                borderTop: i > 0 ? `1px dashed ${v.rule}` : "none",
                padding: "10px 20px",
              }}
            >
              {/* Segment marker line */}
              <div
                style={{
                  fontFamily: v.monoFamily,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  marginBottom: 5,
                  display: "flex",
                  gap: 8,
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: v.accent }}>#{seg.id}:</span>
                <span style={{ color: v.muted }}>{seg.type}:</span>
                <span style={{ color: v.ink }}>({seg.speaker})</span>
              </div>
              {/* Speech text */}
              <div
                style={{
                  fontFamily: v.monoFamily,
                  fontSize: 19,
                  lineHeight: 1.6,
                  color: v.ink,
                  paddingLeft: 16,
                  borderLeft: `2px solid ${v.rule}`,
                }}
              >
                {Array.isArray(seg.text)
                  ? seg.text.map((part, i) =>
                      part.bold ? (
                        <strong key={i}>{part.t}</strong>
                      ) : (
                        <span key={i} style={{ color: v.muted, opacity: 0.5 }}>
                          {part.t}
                        </span>
                      ),
                    )
                  : seg.text}
              </div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            borderTop: `1px solid ${v.rule}`,
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: v.monoFamily,
            fontSize: 13,
            color: v.muted,
            letterSpacing: "0.06em",
          }}
        >
          <span>TRANSLATION USE ONLY</span>
          <span>4 / 34 SEGMENTS</span>
        </div>
      </div>
    );
  }
  if (kind === "checklist") {
    return (
      <div style={box}>
        <div
          style={{
            fontFamily: v.monoFamily,
            fontSize: 18,
            color: v.muted,
            letterSpacing: "0.1em",
          }}
        >
          QC CHECKLIST · PRE-RELEASE
        </div>
        {[
          "OST text proofed",
          "Composition alignment verified",
          "Audio template matches picture",
          "MediaCenter container configured",
          "Transcode output inspected",
          "Metadata entered & verified",
          "Final proof-watch complete",
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              padding: "9px 0",
              borderTop: `1px dashed ${v.rule}`,
              fontFamily: v.bodyFamily,
              fontSize: 20,
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                border: `1.5px solid ${v.accent}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: v.accent,
                fontFamily: v.monoFamily,
                fontSize: 14,
              }}
            >
              ✓
            </span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "calendar") {
    const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    const loads = [45, 40, 38, 34, 70, 78, 28, 26, 30, 32, 30, 36];
    const max = 80;
    return (
      <div style={box}>
        <div
          style={{
            fontFamily: v.monoFamily,
            fontSize: 18,
            color: v.muted,
            letterSpacing: "0.1em",
          }}
        >
          YEARLY WORKLOAD · PROJECTS / MONTH
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 8,
            height: 160,
            marginTop: 10,
          }}
        >
          {months.map((m, i) => (
            <div
              key={m + i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                height: "100%",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: `${(loads[i] / max) * 100}%`,
                  background: loads[i] > 40 ? v.accent : v.rule,
                }}
              />
              <div
                style={{
                  fontFamily: v.monoFamily,
                  fontSize: 16,
                  color: v.muted,
                }}
              >
                {m}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: v.monoFamily,
            fontSize: 16,
            color: v.muted,
            marginTop: 10,
          }}
        >
          <span>CONVENTIONS · DEC–APR</span>
          <span>RECORDED · MAY–JUN</span>
        </div>
      </div>
    );
  }
  return null;
}

// 05
function Slide05({ variant }) {
  return (
    <FunctionSlide
      variant={variant}
      slideNo={5}
      fnNo="01"
      sectionTag="03.1 / MEDIA PREP"
      title="Pre-Translation Media Preparation"
      lede="Before a language touches it, we make the source translation-ready."
      tasks={[
        "Review on-screen text (OST) elements for translatability",
        "Rework and compose OST text using MEPS Composition and PowerPoint",
        "Integrate composed OST elements into video via After Effects",
        "Create structured audio templates for translation recording",
        "Perform basic video cleanup and alignment",
      ]}
      tools={["MEPS Composition", "Audacity", "After Effects", "OST"]}
      sideKind="waveform"
    />
  );
}

// 06
function Slide06({ variant }) {
  return (
    <FunctionSlide
      variant={variant}
      slideNo={6}
      fnNo="02"
      sectionTag="03.2 / PACKAGING"
      title="Packaging & Distribution"
      lede="We wrap masters into structured containers that languages can build on."
      tasks={[
        "Prepare English master video and audio packages",
        "Upload all master materials to MediaCenter",
        "Configure containers for vernacular audio, OST, and subtitles uploads",
        "Ensure MediaCenter outputs transcode correctly to final MP4",
      ]}
      tools={[""]}
      sideKind="package"
    />
  );
}

// 07
function Slide07({ variant }) {
  return (
    <FunctionSlide
      variant={variant}
      slideNo={7}
      fnNo="03"
      sectionTag="03.3 / REFERENCE"
      title="Translation Reference Materials"
      lede="Reference materials that help translators understand the source."
      tasks={[
        "Produce scripts for reference",
        "Create subtitles where required",
        "Enter and verify metadata used downstream",
      ]}
      tools={[""]}
      sideKind="doc"
      subtitleLines={[
        // S01
        "Can there really be four words that you can base your life on?",
        "We look to our Exemplar, Christ Jesus, for the answer.",
        "In one verse, Jesus reveals what governed his every action and decision.",
        "Four words that he lived by\u2014found at John 14:31:",
        "\u2018I love the Father.\u2019 The most powerful bond in the universe.",
        // S02
        "But how did this love develop? How did this unbreakable bond develop?",
        "The Son of God was not created with self-sacrificing love already in place.",
        "He had to cultivate this deep attachment for his Father.",
        "He watched how his Father used his power in behalf of those crushed in spirit.",
        "His Father did not put people in categories; he did not stereotype individuals.",
        "The Son\u2019s love grew as his Father allowed a book to be named after Ruth\u2014a Moabite girl.",
        // S03
        "But watching and admiring his Father wasn\u2019t enough\u2014he went further.",
        "His love for his Father began to shape his decisions and actions.",
        "He didn\u2019t just say the words \u2018I love the Father.\u2019 He lived those words.",
        "\u2018I am doing just as the Father has commanded me to do.\u2019\u2014John 14:31",
        "When faced with the Syrophoenician woman, Jesus saw a time to bend in response to higher principles.",
        // S04
        "Another example: what Jesus learned from his Father about forgiveness.",
        "He watched his Father forgive David for adultery and the murder of Uriah.",
        "Jehovah is a largehearted Forgiver\u2014always on the lookout to forgive.",
        "Jesus viewed forgiving others as an opportunity to imitate his Father.",
        "\u2018Like Father, like Son.\u2019",
        // S05
        "Now we take this discussion out of the classroom and apply it to real life.",
        "You don\u2019t know what tests of faith are going to come upon you.",
        "But if you know these four words, you know enough.",
        "Etch \u2018I love the Father\u2019 on your minds and on your hearts.",
        "Let these four words govern every decision and action of yours.",
        "Show by your dealings with others that your heartfelt desire is to please your heavenly Father.",
        // S06
        "As you go from here, who will be your \u2018Ruth\u2019?",
        "Show that you don\u2019t put people in categories.",
        "Who will be your \u2018Syrophoenician woman\u2019? Seize opportunities to be more flexible.",
        "Who will be your imperfect, disappointing \u2018apostles\u2019?",
        "Be on the lookout for opportunities to be more forgiving, more patient.",
        "\u2018I love Jehovah above everything, and I will overcome my negative feelings.\u2019",
        // S07
        "When your love for Jehovah overrides every other concern\u2014not much else matters.",
        "Think deeply on Jehovah\u2019s way of doing things, love those ways, imitate your heavenly Father.",
        "\u2018I set the pattern for you.\u2019\u2014John 13:15",
        "You are clothed with the most unbreakable bond in the universe\u2014",
        "empowered by the unfailing four words to live by: \u2018I love the Father.\u2019",
      ]}
    />
  );
}

// 08
function Slide08({ variant }) {
  return (
    <FunctionSlide
      variant={variant}
      slideNo={8}
      fnNo="04"
      sectionTag="03.4 / QC"
      title="Quality Assurance"
      lede="Many eyes on every frame — so a translator&rsquo;s first viewing is a clean one."
      tasks={[
        "Proofread OST text, scripts, and metadata",
        "Identify technical and delivery issues before release",
        "Proof-watch every video prior to publication",
        "Catch upstream omissions that require fixes before work begins",
      ]}
      tools={["Proofreading", "Proof-watch", "Mech. Check", "QA"]}
      sideKind="checklist"
    />
  );
}

// 09 — SCHEDULING (workload chart + calendar mgmt)
function Slide09({ variant }) {
  const v = VARIANTS[variant];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const baseline = [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25];
  const conventions = [18, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 18];
  const recorded = [0, 0, 0, 0, 25, 25, 0, 0, 0, 0, 0, 0];
  const max = 70;

  return (
    <SlideFrame
      variant={variant}
      slideNo={9}
      totalSlides={TOTAL}
      section="03.5 / SCHEDULING"
    >
      <SlideInner style={{ flexDirection: "column", gap: 36 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 32 }}>
          <div style={{ flex: 1 }}>
            <Eyebrow variant={variant} style={{ marginBottom: 18 }}>
              FN 05 · SCHEDULING
            </Eyebrow>
            <BigTitle variant={variant}>
              A steady line,{" "}
              <span
                style={{
                  fontStyle: v.titleItalicAccent ? "italic" : "normal",
                  color: v.accent,
                }}
              >
                predictable peaks.
              </span>
            </BigTitle>
          </div>
          {/* <Body
            variant={variant}
            size={26}
            style={{ flex: "0 0 460px", color: v.muted, marginBottom: 8 }}
          >
            We own release timing — and absorb the spikes so translators can
            plan against a stable cadence.
          </Body> */}
        </div>

        <div style={{ display: "flex", gap: 56, flex: 1, minHeight: 0 }}>
          {/* Left: chart */}
          <div
            style={{
              flex: 1.6,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <ColumnHead variant={variant}>
              PROJECTS PER MONTH · 12-MONTH VIEW
            </ColumnHead>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-end",
                height: 320,
                marginTop: 4,
              }}
            >
              {months.map((m, i) => {
                const totalH = baseline[i] + conventions[i] + recorded[i];
                const chartH = 270;
                const pxPer = chartH / max;
                return (
                  <div
                    key={m}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      justifyContent: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: v.monoFamily,
                        fontSize: 16,
                        color: v.muted,
                      }}
                    >
                      {totalH}
                    </div>
                    <div
                      data-anim="grow-y"
                      style={{
                        "--anim-delay": i,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      <div
                        style={{
                          background: v.ink,
                          height: `${baseline[i] * pxPer}px`,
                          flexShrink: 0,
                        }}
                      />
                      {conventions[i] > 0 && (
                        <div
                          style={{
                            background: v.accent,
                            height: `${conventions[i] * pxPer}px`,
                            flexShrink: 0,
                          }}
                        />
                      )}
                      {recorded[i] > 0 && (
                        <div
                          style={{
                            background: `color-mix(in oklch, ${v.accent} 55%, transparent)`,
                            height: `${recorded[i] * pxPer}px`,
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        fontFamily: v.monoFamily,
                        fontSize: 16,
                        color: v.ink,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {m}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                gap: 28,
                marginTop: 6,
                fontFamily: v.monoFamily,
                fontSize: 16,
                color: v.muted,
                letterSpacing: "0.06em",
              }}
            >
              <LegendSwatch color={v.ink} label="BASELINE" />
              <LegendSwatch color={v.accent} label="CONVENTIONS" />
              <LegendSwatch
                color={`color-mix(in oklch, ${v.accent} 55%, transparent)`}
                label="RECORDED CONVENTIONS"
              />
            </div>
          </div>

          {/* Right: stats */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <BigNumber
              n="~25"
              label="BASELINE PROJECTS PER MONTH"
              variant={variant}
            />
            <BigNumber
              n="+90"
              label="DEC–APR CONVENTION VIDEOS"
              variant={variant}
            />
            <BigNumber
              n="+50"
              label="MAY–JUN RECORDED CONVENTION VIDEOS"
              variant={variant}
            />
          </div>
        </div>

        {/* Project mix bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            paddingTop: 22,
            borderTop: `1px solid ${v.rule}`,
          }}
        >
          <div
            style={{
              fontFamily: v.monoFamily,
              fontSize: 18,
              color: v.muted,
              letterSpacing: "0.06em",
            }}
          >
            PROJECT MIX · % OF ANNUAL VOLUME
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            <MixSeg
              pct={60}
              color={`color-mix(in oklch, ${v.ink} 85%, ${v.muted})`}
              label="REGULAR RELEASES · 60%"
              textColor={v.bg}
              variant={variant}
            />
            <MixSeg
              pct={28}
              color={v.muted}
              label="SEASONAL / SPECIAL · 28%"
              textColor={v.bg}
              variant={variant}
            />
            <MixSeg
              pct={12}
              color={v.rule}
              label="CORRECTIONS · 12%"
              textColor={v.ink}
              variant={variant}
            />
          </div>
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

// ============================================================
// WORLD MAP — used by Slide10
// ============================================================
function WorldMap({ variant }) {
  const v = VARIANTS[variant];

  // The SVG file uses equirectangular projection, calibrated from path data:
  //   x = lon * 7.678 + 1301.8
  //   y = -lat * 7.678 + 681.5
  // The overlay viewBox matches the SVG native size (2754×1398) so both
  // img and overlay letterbox identically → pins stay on the right countries.
  const W = 2754,
    H = 1398;
  const pin = (lat, lon) => ({
    x: Math.round(lon * 7.678 + 1301.8),
    y: Math.round(-lat * 7.678 + 681.5),
  });

  const dots = [
    { name: "Norway", ...pin(60.5, 8.5), dx: 33, dy: -28, anchor: "start" },
    { name: "Britain", ...pin(54.0, -2.5), dx: -33, dy: 55, anchor: "end" },
    { name: "Portugal", ...pin(39.5, -8.0), dx: -33, dy: 55, anchor: "end" },
    { name: "Mexico", ...pin(23.6, -102.5), dx: 0, dy: -38, anchor: "middle" },
    { name: "Ecuador", ...pin(-1.8, -78.2), dx: 33, dy: 55, anchor: "start" },
    {
      name: "Mozambique",
      ...pin(-18.7, 35.5),
      dx: 33,
      dy: 55,
      anchor: "start",
    },
    { name: "Malaysia", ...pin(4.2, 108.0), dx: 33, dy: 55, anchor: "start" },
    { name: "Taiwan", ...pin(23.7, 121.0), dx: 33, dy: -28, anchor: "start" },
  ];

  const mapFilter =
    variant === "C"
      ? "grayscale(1) invert(1) opacity(0.25)"
      : "grayscale(1) opacity(0.3)";

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src="world-map.svg"
        alt="World map"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
          filter: mapFilter,
        }}
      />
      {/* Pin overlay — viewBox matches SVG native dimensions so letterboxing is identical */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {dots.map(({ name, x, y, dx, dy, anchor }) => (
          <g key={name}>
            <circle cx={x} cy={y} r={25} fill={v.accent} opacity={0.25} />
            <circle cx={x} cy={y} r={14} fill={v.accent} />
            <text
              x={x + dx}
              y={y + dy}
              textAnchor={anchor}
              fontFamily="'JetBrains Mono', 'Courier New', monospace"
              fontSize={33}
              fontWeight="600"
              fill={v.accent}
              letterSpacing="0.06em"
            >
              {name.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ============================================================
// 10 — SUPPORT (the human-facing side of the team)
// ============================================================
function Slide10({ variant }) {
  const v = VARIANTS[variant];

  const pillars = [
    {
      code: "DOCS",
      title: "Publication Processing Documentation",
      body: "Comprehensive guides covering the full video production workflow — from capture to delivery — so teams can self-serve at any stage of a project.",
      items: [
        "Production checklists & best practices",
        "Format, codec & delivery specifications",
        "Step-by-step workflow walkthroughs",
      ],
    },
    {
      code: "PPF",
      title: "Publication Processing Forums",
      body: "Hands-on support through the PPF — a dedicated space for questions, troubleshooting, and expert guidance from the people who built the pipeline.",
      items: [
        "Direct Q&A answered by the team",
        "Issue triage and escalation paths",
        "Shared knowledge built over time",
      ],
    },
  ];

  return (
    <SlideFrame
      variant={variant}
      slideNo={10}
      totalSlides={TOTAL}
      section="03.6 / SUPPORT"
    >
      <SlideInner style={{ flexDirection: "column", gap: 28 }}>
        {/* Header */}
        <div>
          <Eyebrow variant={variant} style={{ marginBottom: 18 }}>
            FN 06 · SUPPORT
          </Eyebrow>
          <BigTitle variant={variant}>
            Support that{" "}
            <span
              style={{
                fontStyle: v.titleItalicAccent ? "italic" : "normal",
                color: v.accent,
              }}
            >
              meets the user where they are.
            </span>
          </BigTitle>
        </div>

        {/* Two columns: pillars + map */}
        <div style={{ display: "flex", gap: 28, flex: 1, minHeight: 0 }}>
          {/* Left: pillars */}
          <div
            style={{
              flex: "0 0 44%",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {pillars.map(({ code, title, body, items }, i) => (
              <div
                key={code}
                data-anim="up"
                style={{
                  "--anim-delay": i + 2,
                  flex: 1,
                  border: `1px solid ${i === 1 ? v.accent : v.rule}`,
                  background:
                    i === 1
                      ? `color-mix(in oklch, ${v.accent} 8%, transparent)`
                      : "transparent",
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: v.monoFamily,
                    fontSize: 18,
                    color: v.accent,
                    letterSpacing: "0.1em",
                  }}
                >
                  {code}
                </span>
                <div
                  style={{
                    fontFamily: v.titleFamily,
                    fontSize: 34,
                    fontWeight: v.titleWeight,
                    color: v.ink,
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: v.bodyFamily,
                    fontSize: 20,
                    color: v.muted,
                    lineHeight: 1.5,
                  }}
                >
                  {body}
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    paddingTop: 14,
                    borderTop: `1px solid ${v.rule}`,
                  }}
                >
                  {items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: v.bodyFamily,
                        fontSize: 19,
                        color: v.ink,
                      }}
                    >
                      <span
                        style={{
                          color: v.accent,
                          fontFamily: v.monoFamily,
                          fontSize: 16,
                          flexShrink: 0,
                        }}
                      >
                        &mdash;
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: world map */}
          <div
            data-anim="fade"
            style={{
              "--anim-delay": 4,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              border: `1px solid ${v.rule}`,
              padding: "20px 20px 16px",
            }}
          >
            <div
              style={{
                fontFamily: v.monoFamily,
                fontSize: 15,
                color: v.muted,
                letterSpacing: "0.08em",
                flexShrink: 0,
              }}
            >
              TEAM COVERAGE — 8 COUNTRIES
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <WorldMap variant={variant} />
            </div>
          </div>
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

function BigNumber({ n, label, variant }) {
  const v = VARIANTS[variant];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          fontFamily: v.titleFamily,
          fontSize: 96,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          color: v.ink,
          fontWeight: v.titleWeight,
          fontFeatureSettings: '"tnum" 1, "lnum" 1',
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: TYPE_SCALE.tag,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: v.muted,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function LegendSwatch({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          width: 16,
          height: 16,
          background: color,
          display: "inline-block",
        }}
      />
      <span>{label}</span>
    </div>
  );
}

function MixSeg({ pct, color, label, textColor, variant }) {
  const v = VARIANTS[variant];
  return (
    <div
      style={{
        width: `${pct}%`,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <div
        style={{
          background: color,
          height: 38,
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        <span
          style={{
            fontFamily: v.monoFamily,
            fontSize: 15,
            letterSpacing: "0.06em",
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          {pct}%
        </span>
      </div>
      <div
        style={{
          fontFamily: v.monoFamily,
          fontSize: 15,
          letterSpacing: "0.05em",
          color: v.muted,
          whiteSpace: "nowrap",
          paddingLeft: 2,
        }}
      >
        {label.replace(` · ${pct}%`, "")}
      </div>
    </div>
  );
}

// ============================================================
// 11 — WHAT TRANSLATORS NEVER SEE
// ============================================================
function Slide11({ variant }) {
  const v = VARIANTS[variant];
  const items = [
    {
      t: "Upstream fixes",
      s: "Omissions caught before they reach a language.",
    },
    {
      t: "OST rework",
      s: "Text rebuilt in MEPS so every character can travel.",
    },
    { t: "Container config", s: "MediaCenter set so uploads simply work." },
    { t: "Transcode checks", s: "Every master verified before release." },
    {
      t: "Schedule juggling",
      s: "Conventions and ad-hoc absorbed into the plan.",
    },
    {
      t: "Metadata verification",
      s: "Downstream systems trust what we enter.",
    },
    {
      t: "Proof-watch",
      s: "Every video watched — end to end — before it ships.",
    },
    {
      t: "Support answers",
      s: "Questions, quietly answered across time zones.",
    },
  ];
  return (
    <SlideFrame
      variant={variant}
      slideNo={11}
      totalSlides={TOTAL}
      section="05 / INVISIBLE"
    >
      <SlideInner style={{ flexDirection: "column", gap: 44 }}>
        <Eyebrow variant={variant}>
          05 — THE WORK THAT DOESN&rsquo;T SHOW
        </Eyebrow>
        <BigTitle variant={variant}>
          What translators{" "}
          <span
            style={{
              fontStyle: v.titleItalicAccent ? "italic" : "normal",
              color: v.accent,
            }}
          >
            never see.
          </span>
        </BigTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
          }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${v.rule}`,
                padding: "22px 22px",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  fontFamily: v.monoFamily,
                  fontSize: 18,
                  color: v.accent,
                  letterSpacing: "0.1em",
                }}
              >
                HIDDEN {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: v.titleFamily,
                  fontSize: 28,
                  lineHeight: 1.15,
                  fontWeight: v.titleWeight,
                  letterSpacing: "-0.01em",
                }}
              >
                {it.t}
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: v.muted,
                  lineHeight: 1.4,
                  marginTop: "auto",
                }}
              >
                {it.s}
              </div>
            </div>
          ))}
        </div>

        <Body
          variant={variant}
          size={28}
          style={{ color: v.muted, maxWidth: 1200, marginTop: 8 }}
        >
          Absorbing complexity is the work. When it&rsquo;s done well, no one
          has to notice it.
        </Body>
      </SlideInner>
    </SlideFrame>
  );
}

// ============================================================
// 12 — HOW WE CONNECT TO YOUR WORK
// ============================================================
function Slide12({ variant }) {
  const v = VARIANTS[variant];
  const connections = [
    {
      code: "DIGITAL PUB",
      team: "Digital Publishing",
      role: "PARTNER",
      flows: [
        "Convention media playlist & venue metadata",
        "Midweek meeting video lists for branch confirmation",
        "Video hosting documents for public releases",
      ],
    },
    {
      code: "COMPOSITION",
      team: "Composition",
      role: "COLLABORATE",
      flows: [
        "Lead sheet preparation for original songs",
        "OST text coordination via MEPS Composition",
      ],
    },
    {
      code: "AUDIO DESC",
      team: "Audio Descriptions",
      role: "ENABLE",
      flows: [
        "MediaCenter metadata enabled for descriptions",
        "Translation materials published for MWM, convention & JWB",
      ],
    },
    {
      code: "SIGN LANG",
      team: "Sign Language",
      role: "ENABLE",
      flows: [
        "Alternate master enabled and published",
        "Materials for music videos & convention preludes",
      ],
    },
  ];

  const lc = variant === "C" ? "0.78 0.14" : "0.68 0.12";
  const boxAccents = [50, 62, 76, 90].map((h) => `oklch(${lc} ${h})`);

  return (
    <SlideFrame
      variant={variant}
      slideNo={12}
      totalSlides={TOTAL}
      section="05 / CONNECTED"
    >
      <SlideInner style={{ flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 32 }}>
          <div style={{ flex: 1 }}>
            <Eyebrow variant={variant} style={{ marginBottom: 18 }}>
              05 — HOW WE CONNECT TO YOUR WORK
            </Eyebrow>
            <BigTitle variant={variant}>
              How our work,{" "}
              <span
                style={{
                  fontStyle: v.titleItalicAccent ? "italic" : "normal",
                  color: v.accent,
                }}
              >
                connects to yours.
              </span>
            </BigTitle>
          </div>
          {/* <Body
            variant={variant}
            size={26}
            style={{ flex: "0 0 500px", color: v.muted, marginBottom: 8 }}
          >
            Our output feeds directly into your workflows — here is where the
            join happens.
          </Body> */}
        </div>

        {/* Pipeline connector strip */}
        <div style={{ position: "relative", height: 20, flexShrink: 0 }}>
          <div
            data-anim="grow"
            style={{
              "--anim-delay": 1,
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 1,
              background: v.rule,
            }}
          />
          {[1 / 4, 2 / 4, 3 / 4].map((pos, i) => (
            <div
              key={i}
              data-anim="scale"
              style={{
                "--anim-delay": i + 2,
                position: "absolute",
                top: "50%",
                left: `${pos * 100}%`,
                transform: "translate(-50%, -50%)",
                width: 7,
                height: 7,
                background: v.accent,
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          {connections.map((c, i) => (
            <div
              key={c.code}
              data-anim="up"
              style={{
                "--anim-delay": i + 2,
                border: `1px solid ${boxAccents[i]}`,
                background: `color-mix(in oklch, ${boxAccents[i]} 8%, transparent)`,
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: v.monoFamily,
                    fontSize: 16,
                    color: boxAccents[i],
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.code}
                </div>
                <div
                  style={{
                    fontFamily: v.monoFamily,
                    fontSize: 14,
                    color: v.muted,
                    letterSpacing: "0.1em",
                    border: `1px solid ${boxAccents[i]}`,
                    padding: "3px 8px",
                  }}
                >
                  {c.role}
                </div>
              </div>
              <div
                style={{
                  fontFamily: v.titleFamily,
                  fontSize: 28,
                  lineHeight: 1.15,
                  fontWeight: v.titleWeight,
                  letterSpacing: "-0.01em",
                }}
              >
                {c.team}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 4,
                }}
              >
                {c.flows.map((f, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      fontFamily: v.bodyFamily,
                      fontSize: 20,
                      color: v.ink,
                      lineHeight: 1.35,
                    }}
                  >
                    <span
                      style={{
                        color: boxAccents[i],
                        fontFamily: v.monoFamily,
                        fontSize: 16,
                        lineHeight: 1.6,
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

// ============================================================
// 13 — WHY IT MATTERS
// ============================================================
function Slide13({ variant }) {
  const v = VARIANTS[variant];
  return (
    <SlideFrame
      variant={variant}
      slideNo={13}
      totalSlides={TOTAL}
      section="CLOSE"
    >
      <SlideInner
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Eyebrow variant={variant}>CLOSE</Eyebrow>
          <div
            style={{
              fontFamily: v.monoFamily,
              fontSize: TYPE_SCALE.tag,
              color: v.muted,
              letterSpacing: "0.1em",
              textAlign: "right",
              lineHeight: 1.6,
            }}
          >
            JW.ORG · KINGDOM HALLS
            <br />
            CONVENTIONS · BIBLE STUDY
          </div>
        </div>

        <div style={{ maxWidth: 1500 }}>
          <div
            style={{
              fontFamily: v.titleFamily,
              fontSize: 92,
              lineHeight: 1.05,
              fontWeight: v.titleWeight,
              letterSpacing: "-0.02em",
              color: v.ink,
              textWrap: "balance",
            }}
          >
            Every file we package becomes a video in{" "}
            <span
              style={{
                fontStyle: v.titleItalicAccent ? "italic" : "normal",
                color: v.accent,
              }}
            >
              someone&rsquo;s language
            </span>
            — watched in a Kingdom Hall, at a convention, or around a kitchen
            table.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 60,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                fontFamily: v.monoFamily,
                fontSize: TYPE_SCALE.tag,
                color: v.muted,
                letterSpacing: "0.12em",
              }}
            >
              AV DISTRIBUTION
            </div>
            {/* <div
              style={{
                fontFamily: v.bodyFamily,
                fontSize: 30,
                color: v.ink,
                maxWidth: 780,
                lineHeight: 1.35,
              }}
            >
              Thank you — to the packagers, proofreaders, composers, schedulers,
              and support crew who make each release land cleanly.
            </div> */}
          </div>
          <div style={{ flex: "0 0 540px" }}>
            <Waveform variant={variant} height={70} bars={90} />
            <div
              style={{
                marginTop: 14,
                fontFamily: v.monoFamily,
                fontSize: 18,
                color: v.muted,
                letterSpacing: "0.1em",
                textAlign: "right",
              }}
            >
              END OF REEL · 00:10:00:00
            </div>
          </div>
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

// ============================================================
// 14 — CREDIT CRAWL
// ============================================================
function Slide14({ variant }) {
  const v = VARIANTS[variant];
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (!document.getElementById("credit-roll-kf")) {
      const style = document.createElement("style");
      style.id = "credit-roll-kf";
      style.textContent = `
        @keyframes credit-roll {
          0%   { transform: translateY(860px); }
          1%   { transform: translateY(860px); }
          96%  { transform: translateY(-4000px); }
          100% { transform: translateY(-4000px); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  React.useEffect(() => {
    const section = ref.current && ref.current.closest("section");
    if (!section) return;
    const obs = new MutationObserver(() =>
      setActive(section.hasAttribute("data-deck-active")),
    );
    obs.observe(section, {
      attributes: true,
      attributeFilter: ["data-deck-active"],
    });
    setActive(section.hasAttribute("data-deck-active"));
    return () => obs.disconnect();
  }, []);

  const creditGroups = [
    {
      role: "",
      members: [{ name: "Eduardo Quezada" }, { name: "Harry Joyce" }],
    },
    {
      role: "AV MEDIA PACKAGERS",
      members: [
        { name: "Kristalyn Aubry" },
        { name: "Jessica Campos" },
        { name: "Jessica Marundee" },
        { name: "Adam Moore" },
        { name: "Denielle Riggins" },
        { name: "Jennifer Smythe" },
      ],
    },
    {
      role: "COMPOSITORS",
      members: [
        { name: "Sonya Hornis" },
        { name: "Natasha Perry" },
        { name: "Cinzia Wolff" },
      ],
    },
    {
      role: "PROOFREADERS",
      members: [
        { name: "Sandra Chan" },
        { name: "Catrina Genaris" },
        { name: "Michelle D. Geringer" },
        { name: "Sonya Hornis" },
      ],
    },
    {
      role: "SUBTITLES",
      members: [
        { name: "Sandra Chan" },
        { name: "Tanya Frohberg" },
        { name: "Catrina Genaris" },
        { name: "Michelle D. Geringer" },
        { name: "Sonya Hornis" },
      ],
    },
    {
      role: "QUALITY ASSURANCE",
      members: [{ name: "Denise Telep" }],
    },
    {
      role: "SCHEDULING",
      members: [{ name: "Brian Lick" }],
    },
    {
      role: "SECRETARIAT",
      members: [
        { name: "Rebecca Casstevens" },
        { name: "Debra Gates" },
        { name: "Gena Kowert" },
      ],
    },
    {
      role: "AUDIO & SONG SUPPORT",
      members: [
        { name: "Abner Aquiáhuatl", note: "Central America" },
        { name: "Matiu Piata Bevan", note: "Mozambique" },
        { name: "Desmond Chong", note: "Malaysia" },
        { name: "David Zhan", note: "Taiwan" },
      ],
    },
    {
      role: "INTERNATIONAL CORRESPONDENTS",
      members: [
        { name: "Jonas Holmbacka", note: "Scandinavia" },
        { name: "Filipe Machado", note: "Portugal" },
        { name: "Michaela de Yaguachi", note: "Ecuador" },
      ],
    },
    {
      role: "PRESENTATION DESIGN",
      members: [{ name: "Harry Joyce" }],
    },
    {
      role: "SPECIAL THANKS",
      members: [
        { name: "Digital Publishing" },
        { name: "Composition" },
        { name: "Sign Language" },
        { name: "Audio Descriptions" },
      ],
    },
    {
      role: "PRODUCED FOR",
      members: [
        { name: "Publication Production Support" },
        { name: "Watchtower Bible and Tract Society" },
      ],
    },
  ];

  const sectionDivider = (
    <div
      style={{
        width: 48,
        height: 1,
        background: v.rule,
        margin: "56px auto",
      }}
    />
  );

  return (
    <SlideFrame
      variant={variant}
      slideNo={14}
      totalSlides={TOTAL}
      section="CREDITS"
    >
      <SlideInner style={{ overflow: "hidden" }}>
        <div
          ref={ref}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            animation: active ? "credit-roll 45s linear infinite" : "none",
            paddingBottom: 120,
          }}
        >
          {/* Opening title block */}
          <div style={{ paddingTop: 80 }}>
            <div
              style={{
                fontFamily: v.monoFamily,
                fontSize: TYPE_SCALE.tag,
                letterSpacing: "0.2em",
                color: v.muted,
                marginBottom: 32,
              }}
            >
              PPS · TEAM BRIEFING · 2026
            </div>
            <div
              style={{
                fontFamily: v.titleFamily,
                fontSize: 96,
                fontWeight: v.titleWeight,
                letterSpacing: "-0.03em",
                color: v.ink,
                lineHeight: 1.0,
                marginBottom: 16,
              }}
            >
              AV{" "}
              <span
                style={{
                  fontStyle: v.titleItalicAccent ? "italic" : "normal",
                  color: v.accent,
                }}
              >
                Distribution
              </span>
            </div>
            <div
              style={{
                fontFamily: v.monoFamily,
                fontSize: TYPE_SCALE.tag,
                letterSpacing: "0.14em",
                color: v.muted,
                marginTop: 20,
              }}
            >
              A PPS PRODUCTION
            </div>
          </div>

          {sectionDivider}

          {/* Credit groups */}
          {creditGroups.map((group, gi) => (
            <React.Fragment key={gi}>
              <div style={{ marginBottom: 52 }}>
                {/* Role header */}
                <div
                  style={{
                    fontFamily: v.monoFamily,
                    fontSize: 16,
                    letterSpacing: "0.18em",
                    color: v.accent,
                    textTransform: "uppercase",
                    marginBottom: 22,
                  }}
                >
                  {group.role}
                </div>
                {/* Names */}
                {group.members.map((m, mi) => (
                  <div key={mi} style={{ marginBottom: 10 }}>
                    <div
                      style={{
                        fontFamily: v.titleFamily,
                        fontSize: 38,
                        fontWeight: v.titleWeight,
                        letterSpacing: "-0.01em",
                        color: v.ink,
                        lineHeight: 1.15,
                      }}
                    >
                      {m.name}
                    </div>
                    {m.note && (
                      <div
                        style={{
                          fontFamily: v.monoFamily,
                          fontSize: 17,
                          letterSpacing: "0.1em",
                          color: v.muted,
                          marginTop: 4,
                          textTransform: "uppercase",
                        }}
                      >
                        {m.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {gi < creditGroups.length - 1 && gi % 3 === 2 && sectionDivider}
            </React.Fragment>
          ))}

          {sectionDivider}

          {/* Closing card */}
          <div style={{ paddingBottom: 60 }}>
            <div
              style={{
                fontFamily: v.titleFamily,
                fontSize: 52,
                fontWeight: v.titleWeight,
                letterSpacing: "-0.02em",
                color: v.ink,
                lineHeight: 1.2,
                marginBottom: 28,
                fontStyle: v.titleItalicAccent ? "normal" : "normal",
              }}
            >
              Well done for staying
              <br />
              until the end 😉
            </div>
            <div
              style={{
                fontFamily: v.monoFamily,
                fontSize: TYPE_SCALE.tag,
                letterSpacing: "0.14em",
                color: v.muted,
                marginTop: 36,
              }}
            >
              END OF REEL · AV DISTRIBUTION · {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </SlideInner>
    </SlideFrame>
  );
}

Object.assign(window, {
  TOTAL,
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
});
