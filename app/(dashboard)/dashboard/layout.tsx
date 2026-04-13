import { Sidebar } from '@/components/dashboard/Sidebar'
import { DashboardTabs } from '@/components/dashboard/DashboardTabs'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="noise-overlay">
      <div className="flex min-h-screen">
        <div className="hidden md:block">
          <Sidebar activePath="/dashboard" />
        </div>
        <main className="flex-1 p-6 md:p-10 max-w-[960px] pb-20 md:pb-10">
          {children}
        </main>
      </div>
      <DashboardTabs activePath="/dashboard" />
    </div>
  )
}
