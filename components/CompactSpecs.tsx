import React from "react";

export default function CompactSpecs({
  basics,
  performance,
}: {
  basics: { name: string; value: string }[];
  performance: { metric: string; value: string }[];
}) {
  return (
    <section className="space-y-8">
      {/* Especificaciones técnicas */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <h3 className="px-4 pt-4 text-lg font-semibold">Especificaciones técnicas</h3>
        <dl className="divide-y">
          {basics.map((row, i) => (
            <div key={i} className="grid grid-cols-12 items-center px-4 py-3">
              <dt className="col-span-4 md:col-span-3 text-gray-700 font-medium">{row.name}</dt>
              <dd className="col-span-8 md:col-span-9 text-gray-900">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Resultados del Rendimiento */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <h3 className="px-4 pt-4 text-lg font-semibold">Resultados del Rendimiento</h3>
        <div className="mt-3 px-4 pb-4">
          <div className="overflow-x-auto">
            <table className="w-full border-separate [border-spacing:0]">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="text-left py-2 px-3 border-b">Métrica</th>
                  <th className="text-left py-2 px-3 border-b">Valor</th>
                </tr>
              </thead>
              <tbody>
                {performance.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-2 px-3 text-gray-700">{row.metric}</td>
                    <td className="py-2 px-3 text-gray-900">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
