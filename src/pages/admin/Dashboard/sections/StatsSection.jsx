import {
  FiUsers,
  FiHome,
  FiShield,
  FiDollarSign,
} from "react-icons/fi";

import StatsCard from "../../../../components/dashboard/StatsCard/StatsCard";
import { stats } from "../data/stats";

const iconMap = {
  users: FiUsers,
  home: FiHome,
  shield: FiShield,
  money: FiDollarSign,
};

export default function StatsSection() {
  return (
    <div className="stats-grid">
      {stats.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <StatsCard
            key={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
            color={item.color}
            icon={Icon}
          />
        );
      })}
    </div>
  );
}