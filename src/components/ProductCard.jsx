import React from "react";
export default function ProductCard({
  name,
  price,
  image,
  onBuy,
  onQuickView,
  compact = false,
  aos,
  delay,
}) {
  return (
    <article
      className={`group bg-white rounded-lg overflow-hidden shadow-sm transition-shadow duration-200 ${
        compact ? "flex items-center gap-4 p-3" : ""
      }`}
      data-aos={aos}
      data-aos-delay={delay}>
      <div className={`${compact ? "w-28 flex-shrink-0" : "w-full"}`}>
        <div className={`relative ${compact ? "" : "h-56 md:h-48"}`}>
          <img
            src={image}
            alt={name}
            loading="lazy"
            className={`w-full h-full object-cover ${compact ? "rounded" : ""}`}
          />

          {!compact && (
            <div className="absolute left-3 top-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow">
              Rp {price}
            </div>
          )}

          <button
            aria-label={`Tambahkan ${name} ke wishlist`}
            className="absolute right-3 top-3 bg-white/80 rounded-full p-1.5 shadow-sm text-gray-700 hover:scale-105 transition-transform"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              try {
                window.localStorage && window.localStorage.setItem(`wish-${name}`, "1");
              } catch {}
              e.currentTarget.animate([{ transform: "scale(1.1)" }, { transform: "scale(1)" }], { duration: 150 });
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
              <path
                d="M12 21s-7.5-4.5-9.2-7.1C1.7 11.9 3.4 8 6.7 6.4 9.5 4.9 12 6.2 12 6.2s2.5-1.3 5.3.2c3.3 1.6 5 5.5 3.9 7.5C19.5 16.5 12 21 12 21z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${compact ? "flex-1 pr-2" : "p-4"}`}>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{name}</h3>

        {compact ? (
          <div className="mt-1 flex items-center justify-between gap-2">
            <div className="text-sm text-gray-600">Rp {price}</div>
            <div className="flex items-center gap-2">
              <button
                onClick={onBuy}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md"
                aria-label={`Beli ${name}`}
              >
                Beli
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="mt-3 text-sm text-gray-600">Rp {price}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-gray-500">Ready stock</div>

              <div className="flex gap-2">
                {onQuickView && (
                  <button
                    onClick={onQuickView}
                    className="px-3 py-2 bg-white border text-sm rounded-md shadow-sm hover:bg-gray-50 transition"
                    aria-label={`Quick view ${name}`}
                    type="button"
                  >
                    Quick View
                  </button>
                )}
                <button
                  onClick={onBuy}
                  className="px-3 py-2 bg-blue-600 text-white text-sm rounded-md shadow-sm hover:scale-105 transition-transform"
                  aria-label={`Beli ${name}`}
                  type="button"
                >
                  Beli
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
