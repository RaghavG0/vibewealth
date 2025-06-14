// src/app/creator-dashboard/page.tsx
export default function CreatorDashboardPage() {
  const metrics = [
    { name: 'Followers', value: '1,500' },
    { name: 'Posts', value: '45' },
    { name: 'Likes', value: '3,200' },
    { name: 'Comments', value: '890' },
  ];

  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-4">Creator Dashboard</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.name} className="p-4 bg-gray-50 dark:bg-gray-800 rounded text-center">
            <p className="text-sm">{m.name}</p>
            <p className="text-xl font-semibold">{m.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Here you could manage your content and see deeper analytics. These numbers are placeholders; connect to your CMS or API for real data.
      </p>
    </section>
  )
}
