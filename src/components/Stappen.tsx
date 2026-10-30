interface Stap {
  titel: string;
  tekst: string;
}

const Stappen = ({ stappen }: { stappen: Stap[] }) => (
  <ol className="border-t-2 border-foreground">
    {stappen.map((stap, i) => (
      <li
        key={stap.titel}
        className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 border-b border-border py-6 md:grid-cols-[3.25rem_minmax(0,1fr)] md:gap-x-6 md:py-7"
      >
        <span
          className="flex h-11 w-11 items-center justify-center rounded bg-primary font-heading text-xl font-extrabold text-primary-foreground md:h-[3.25rem] md:w-[3.25rem] md:text-2xl"
          aria-hidden
        >
          {i + 1}
        </span>
        <div>
          <h3 className="kop-blok">{stap.titel}</h3>
          <p className="mt-1.5 max-w-prose text-muted-foreground">{stap.tekst}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default Stappen;
