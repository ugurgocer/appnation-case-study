import { use } from "react";

export default function Weather({ params }: { params: Promise<{ location: string }> }) {
    const { location } = use(params);

    return (
      <div>
        {location}
      </div>
    );
  }
  