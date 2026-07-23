import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiTool,
} from "react-icons/fi";

import StatsCard from "../../../../components/dashboard/StatsCard/StatsCard";

import { stats } from "../data/stats";

const iconMap = {
  properties: FiHome,
  tenants: FiUsers,
  revenue: FiDollarSign,
  maintenance: FiTool,
};

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((item) => (
          <StatsCard
            key={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
            color={item.color}
            icon={iconMap[item.icon]}
          />
        ))}
      </div>
    </section>
  );
}