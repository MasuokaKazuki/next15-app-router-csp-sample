"use client";

import { useState } from "react";
import Script from "next/script";

export default function LodashVersionInfo() {
  const [lodashVersion, setLodashVersion] = useState<string>("Loading...");

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const version = (window as any)._?.VERSION;
          setLodashVersion(version ?? "Loaded but version not found");
        }}
      />
      <p>
        <strong>Lodash version:</strong> {lodashVersion}
      </p>
    </>
  );
}
