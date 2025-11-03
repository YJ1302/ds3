import React from "react";
import type { Specification } from "../types";

export default function SpecTable({ specs }: { specs: Specification[] }) {
  return (
    <div className="space-y-10">
      {specs.map((group, i) => (
        <section key={i}>
          <h3 className="text-lg font-semibold text-gray-900 border-b border-orange-200 pb-1">
            {group.category}
          </h3>
          <dl className="mt-4 space-y-3">
            {group.details.map((d, j) => (
              <div key={j} className="grid grid-cols-12 gap-3">
                <dt className="col-span-5 text-gray-600">{d.name}</dt>
                <dd className="col-span-7 bg-white border rounded-lg p-3 text-gray-900">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
