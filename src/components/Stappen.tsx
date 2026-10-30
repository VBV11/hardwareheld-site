interface Stap {
  titel: string;
  tekst: string;
}

const Stappen = ({ stappen }: { stappen: Stap[] }) => (
  <ol>
    {stappen.map((stap, i) => (
      <li
        key={stap.titel}
        className="relative grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-5 pb-8 last:pb-0"
      >
        {i < stappen.length - 1 && (
          <span className="absolute bottom-0 left-[1.125rem] top-10 w-px bg-border" aria-hidden />
        )}
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-[0.9375rem] font-semibold text-inkt"
          aria-hidden
        >
          {i + 1}
        </span>
        <div className="pt-1">
          <h3 className="kop-blok">{stap.titel}</h3>
          <p className="mt-1 max-w-prose text-muted-foreground">{stap.tekst}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default Stappen;
