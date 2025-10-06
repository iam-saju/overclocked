export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-red-900 border-t-2 border-red-500 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <img 
            src="/overclocked_light.svg" 
            alt="OVERCLOCKED" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto filter drop-shadow-[0_0_20px_rgba(220,38,38,0.6)] mx-auto"
            loading="lazy"
            onError={(e) => {
              console.log('Footer logo failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </footer>
  );
}
