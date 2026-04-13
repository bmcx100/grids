import StatCard from '@/components/dashboard/StatCard'
import SessionTable from '@/components/dashboard/SessionTable'
import ProgressCard from '@/components/dashboard/ProgressCard'
import LeitnerViz from '@/components/dashboard/LeitnerViz'
import { mockChild, mockTopics } from '@/lib/mockData'

export default function DashboardPage() {
  return (
    <div>
      {/* Topbar */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading font-extrabold text-[28px]">Overview</h1>
        <span className="font-mono font-medium text-[13px] text-brand-pencil">
          April 13, 2026
        </span>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard
          icon="🔥"
          label="Current Streak"
          value={`${mockChild.streak} days`}
          sub={`Best: ${mockChild.bestStreak} days`}
          valueClassName="text-brand-marigold"
        />
        <StatCard
          icon="⏱️"
          label="Time Today"
          value={`${mockChild.timeToday} min`}
          sub={`Goal: ${mockChild.timeGoal} min/day`}
        />
        <StatCard
          icon="⭐"
          label="Topics Mastered"
          value={`${mockChild.topicsMastered} / ${mockChild.topicsTotal}`}
          sub={`${mockChild.topicsInProgress} in progress`}
          valueClassName="text-brand-success"
        />
      </div>

      {/* Recent Sessions */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-heading font-bold text-lg">Recent Sessions</h2>
        <a href="#" className="text-[13px] text-brand-indigo font-semibold">
          View all &rarr;
        </a>
      </div>
      <SessionTable />

      {/* Topic Progress */}
      <div className="flex justify-between items-center mb-4 mt-8">
        <h2 className="font-heading font-bold text-lg">Topic Progress</h2>
        <a href="#" className="text-[13px] text-brand-indigo font-semibold">
          See details &rarr;
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {mockTopics.map((topic) => (
          <ProgressCard
            key={topic.id}
            name={topic.name}
            icon={topic.icon}
            pct={topic.pct}
            learned={topic.learned}
            remaining={topic.remaining}
          />
        ))}
      </div>

      {/* Leitner Spaced Repetition */}
      <div className="flex justify-between items-center mb-4 mt-8">
        <h2 className="font-heading font-bold text-lg">
          Spaced Repetition &mdash; Number Patterns
        </h2>
      </div>
      <LeitnerViz />
    </div>
  )
}
