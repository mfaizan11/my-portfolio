const Skeleton = () => {
  return (
    <section className="py-16 bg-[#f7f6fb] animate-pulse">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="h-8 w-40 bg-purple-200 mx-auto rounded mb-6"></div>

        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-3/5 mx-auto"></div>
        </div>

      </div>
    </section>
  );
};

export default Skeleton;
