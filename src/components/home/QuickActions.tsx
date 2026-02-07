import { Calendar, MessageCircle, Stethoscope, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: Calendar,
    label: "Jadwal",
    description: "Lihat jadwal",
    path: "/jadwal",
    gradient: "gradient-primary",
  },
  {
    icon: MessageCircle,
    label: "Konsultasi",
    description: "Chat dokter",
    path: "/chat",
    gradient: "gradient-accent",
  },
  {
    icon: Stethoscope,
    label: "Layanan",
    description: "Semua layanan",
    path: "/layanan",
    gradient: "gradient-primary",
  },
  {
    icon: UserRound,
    label: "Dokter",
    description: "Profil dokter",
    path: "/dokter",
    gradient: "gradient-accent",
  },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, index) => (
        <Link
          key={action.path}
          to={action.path}
          className="group bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div
            className={`w-12 h-12 rounded-xl ${action.gradient} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300`}
          >
            <action.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-semibold text-foreground">{action.label}</h3>
          <p className="text-sm text-muted-foreground">{action.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;
