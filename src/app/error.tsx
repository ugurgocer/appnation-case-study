"use client";

import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
    const router = useRouter()

    return (
        <div className="flex items-center justify-center h-screen bg- p-4">
        <div className="bg-default p-6 rounded-lg shadow-md text-center max-w-sm">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">
            Something went wrong!
          </h1>
          <p className="mb-6">{error.message}</p>
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-background rounded-lg item-border cursor-pointer"
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    );
  }