import { Link } from "react-router-dom";

const OMTREK =
  "M516 0L616 2L632 28L658 40L678 84L696 92L714 114L714 144L726 168L706 254L706 286L714 294L730 340L682 378L664 380L658 386L620 456L566 498L566 526L558 530L560 588L568 604L572 608L600 608L654 590L666 598L650 606L650 630L660 636L576 658L548 688L512 714L482 718L442 750L426 764L426 782L402 798L396 796L378 766L350 768L336 788L336 814L366 842L372 874L406 870L430 874L476 872L478 930L544 948L532 1028L526 1034L524 1048L516 1056L496 1056L462 1074L464 1108L458 1114L458 1138L480 1150L476 1176L388 1170L374 1180L346 1176L340 1164L286 1164L254 1174L236 1154L230 1148L202 1148L188 1154L176 1172L146 1170L130 1178L122 1172L132 1160L130 1106L94 1092L70 1050L78 1048L88 1022L118 1002L134 1000L150 972L172 970L192 940L194 912L172 904L220 862L222 832L208 818L220 788L238 786L250 778L256 766L254 738L282 728L282 704L262 688L296 668L296 642L282 626L258 626L224 640L204 596L140 600L96 592L80 568L0 538L46 524L58 454L94 430L134 388L332 346L380 310L378 282L322 212L312 156L298 136L282 48L338 56L352 64L392 64L474 38L494 52L518 52L522 14L514 2Z";

const plaatsen = [
  { naam: "Weert", slug: "weert", x: 120, y: 528, anker: "start" as const, dx: 24, dy: 12 },
  { naam: "Roermond", slug: "roermond", x: 471, y: 562, anker: "end" as const, dx: -24, dy: 12 },
  { naam: "Sittard-Geleen", slug: "sittard-geleen", x: 323, y: 841, anker: "start" as const, dx: 56, dy: 12 },
  { naam: "Heerlen", slug: "heerlen", x: 400, y: 960, anker: "end" as const, dx: -24, dy: 12 },
  { naam: "Maastricht", slug: "maastricht", x: 161, y: 1051, anker: "start" as const, dx: 24, dy: 12 },
];

const LimburgKaart = () => (
  <svg
    viewBox="-16 -16 762 1216"
    role="img"
    aria-label="Kaart van Limburg. Hardware Held haalt op in Zuid- en Midden-Limburg."
    className="mx-auto h-auto w-full max-w-[18rem]"
  >
    <defs>
      {/* Noord-Limburg valt buiten het werkgebied */}
      <clipPath id="limburg-werkgebied">
        <polygon points="-16,470 760,300 760,1200 -16,1200" />
      </clipPath>
    </defs>
    <path d={OMTREK} fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth={4} strokeLinejoin="round" />
    <path
      d={OMTREK}
      fill="hsl(var(--primary) / 0.28)"
      stroke="hsl(var(--primary))"
      strokeWidth={4}
      strokeLinejoin="round"
      clipPath="url(#limburg-werkgebied)"
    />
    {plaatsen.map((p) => (
      <Link key={p.slug} to={`/ophalen/${p.slug}`} aria-label={`Gratis ophalen in ${p.naam}`}>
        <circle cx={p.x} cy={p.y} r={11} fill="hsl(var(--inkt))" />
        <text
          x={p.x + p.dx}
          y={p.y + p.dy}
          textAnchor={p.anker}
          fill="hsl(var(--foreground))"
          fontSize={35}
          fontWeight={500}
          className="underline-offset-4 hover:underline"
        >
          {p.naam}
        </text>
      </Link>
    ))}
  </svg>
);

export default LimburgKaart;
