import React from "react";

export default function MultipleMetricStatus(
    { metrics, data, defaultSelected }: { metrics: string[], data: Record<string, number>, defaultSelected: string }
) {
    const [selectedMetric, setSelectedMetric] = React.useState<string>(defaultSelected);
    const selectedClass = "text-default bg-primary rounded-sm";

    const onClick = (key: string) => {
        setSelectedMetric(key);
    }

    return (
        <div className="flex items-center justify-center">
            <span className="text-7xl h-20 w-fit content-end text-right">{data[selectedMetric]}</span>
            <ul className="flex flex-col h-20 justify-end text-sm">
                {metrics.map((m) => (
                    <li
                        className={`cursor-pointer w-8 text-center hover:font-bold ${selectedMetric == m ? selectedClass : ''}`}
                        key={m}
                        onClick={() => onClick(m)}
                    >
                        {m}
                    </li>
                ))}
            </ul>
        </div>
    )
}
  