import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
}

const ServiceCard = ({ id, title, description, icon: Icon, price }: ServiceCardProps) => {
  return (
    <Link
      to={`/layanan/${id}`}
      className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-semibold text-primary">{price}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
