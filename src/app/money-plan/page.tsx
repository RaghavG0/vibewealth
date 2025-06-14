// src/app/money-plan/page.tsx
export default function MoneyPlanPage() {
  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-4">Personalized Money Plan</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <p className="text-sm">Net Worth</p>
          <p className="text-xl font-semibold">$10,000</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <p className="text-sm">Monthly Income</p>
          <p className="text-xl font-semibold">$3,000</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <p className="text-sm">Monthly Expenses</p>
          <p className="text-xl font-semibold">$2,000</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        This plan is based on your current data. Eventually, these values will come from authenticated user profiles or calculations via an API.
      </p>
    </section>
  )
}
