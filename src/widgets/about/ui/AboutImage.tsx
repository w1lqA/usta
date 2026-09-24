export function AboutImage() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden radius-signature aspect-[3/4]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=760&h=1000&fit=crop&auto=format"
          alt="Учебный процесс"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(2,71,92,0.3) 0%, transparent 45%)",
          }}
        />
      </div>

      {/* Floating stat badge */}
      <div
        className="absolute -bottom-5 -left-6 min-w-[10rem] rounded-[0_1.25rem_0_1.25rem] border border-[#f0efeb] bg-white px-7 py-5 shadow-md"
      >
        <div className="mb-2 text-6xl leading-none font-extrabold text-brand-primary">
          6+
        </div>
        <div className="text-sm font-medium leading-snug text-neutral-500">
          направлений
          <br />
          обучения
        </div>
      </div>
    </div>
  );
}