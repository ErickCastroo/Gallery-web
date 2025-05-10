import React from "react";
import '@/index.css'

const SkeletonMasonry: React.FC = () => {
  const skeletonItems = Array.from({ length: 12 });


  return (
    <div className="overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skeletonItems.map((_, index) => (
          <div key={index} className="animate-pulse bg-gray-200 rounded-lg h-48"></div>
        ))}
      </div>
    </div>
  );
};

export { SkeletonMasonry }