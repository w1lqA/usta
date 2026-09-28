"use client";

import { useEffect, useRef } from "react";
import { useYmaps } from "../model/use-ymaps";
import { mapCustomization } from "../model/map-customization";

type Props = {
  center: [number, number];
  zoom?: number;
  className?: string;
};

export function YandexMap({ center, zoom = 17, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<ymaps3.YMap | null>(null);
  const status = useYmaps();

  useEffect(() => {
    if (status !== "ready") return;
    if (!containerRef.current) return;
    if (mapRef.current) return;

    let destroyed = false;

    const init = async () => {
      await ymaps3.ready;

      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker,
      } = ymaps3;

      if (destroyed || !containerRef.current) return;

      const map = new YMap(containerRef.current, {
        location: { center, zoom },
        mode: "vector",
        behaviors: ["drag", "pinchZoom", "mouseTilt"],
      });

      // Слой карты с твоей кастомизацией
      map.addChild(
        new YMapDefaultSchemeLayer({
          customization: mapCustomization,
        }),
      );

      map.addChild(new YMapDefaultFeaturesLayer());

      // Маркер
      const markerEl = document.createElement("div");
      markerEl.innerHTML = `
        <div style="
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #277c7a;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(2,71,92,0.35);
          transform: translate(-50%, -50%);
        "></div>
      `;

      map.addChild(new YMapMarker({ coordinates: center }, markerEl));
      mapRef.current = map;
    };

    init();

    return () => {
      destroyed = true;
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, [status, center, zoom]);

  if (status === "error") {
    return (
      <div className={className}>
        <div className="flex h-full items-center justify-center rounded-3xl border border-border bg-neutral-100 p-8 text-center">
          <p className="text-sm text-neutral-500">
            Не удалось загрузить карту. Проверьте API-ключ Яндекс.Карт.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="h-full w-full overflow-hidden rounded-3xl border border-border"
        style={{ minHeight: "26rem" }}
      />
    </div>
  );
}