// src/app/dream-based-budgeting/page.tsx
export default function DreamBudgetingPage() {
  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-4">Dream-Based Budgeting</h2>
      <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <p className="text-lg">
          <span className="font-semibold">Dream Goal:</span> Trip to Bali
        </p>
        <p className="mt-2">Target Date: December 2024</p>
        <p className="mt-2">Monthly Savings Needed: $500</p>
        <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div
            className="bg-brand h-4 rounded-full"
            style={{ width: '60%' }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">60% funded</p>
      </div>
      <p className="mt-6 text-gray-700 dark:text-gray-300">
        The AI coach would analyze your finances and suggest this budget. In a real app, fetch this data from an API or compute with ML models.
      </p>
    </section>
  )
}
