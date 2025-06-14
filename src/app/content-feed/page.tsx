// src/app/content-feed/page.tsx
export default function ContentFeedPage() {
  const posts = [
    { id: 1, title: '5 Tips to Save More Money', summary: 'Learn easy ways to cut expenses and boost savings.' },
    { id: 2, title: 'Crypto 101: The Basics', summary: 'A beginner-friendly overview of cryptocurrency.' },
    { id: 3, title: 'Budgeting Apps Compared', summary: 'Find the best app that fits your lifestyle.' },
    { id: 4, title: 'Mindful Spending Habits', summary: 'How wellness and finance go hand-in-hand.' },
  ];

  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-4">Friendly Finance Feed</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{post.summary}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
