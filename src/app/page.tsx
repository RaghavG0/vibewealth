export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060710] text-white">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">VibeWealth</h1>
        <button className="px-4 py-2 bg-blue-500 rounded-lg">Menu</button>
      </header>
      <main className="container mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Finance at Your Fingertips</h2>
          <p className="text-gray-400 mb-6">Powerful tools for budgeting and investing, all on your device.</p>
          <button className="px-6 py-3 bg-[#24C4BD] hover:bg-teal-400 rounded-lg text-[#060710] font-semibold">
            Explore App
          </button>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg" alt="Mobile finance app" className="rounded-lg shadow-xl" />
        </div>
      </main>
      <section className="container mx-auto p-6">
        <h3 className="font-bold text-2xl mb-4">Features</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="inline-block bg-[#24C4BD] p-2 rounded-full mr-4"><i className="fas fa-chart-line text-white"></i></span>
            Real-time analytics on the go
          </li>
          <li className="flex items-center">
            <span className="inline-block bg-[#24C4BD] p-2 rounded-full mr-4"><i className="fas fa-bell text-white"></i></span>
            Instant notifications and alerts
          </li>
        </ul>
      </section>
    </div>
  );
}
