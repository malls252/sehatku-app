import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  available: boolean;
}

const DoctorCard = ({ id, name, specialty, rating, image, available }: DoctorCardProps) => {
  return (
    <Link
      to={`/dokter/${id}`}
      className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        {available && (
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{name}</h3>
        <p className="text-sm text-muted-foreground">{specialty}</p>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-4 h-4 fill-warning text-warning" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
        </div>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
        available 
          ? "bg-success/10 text-success" 
          : "bg-muted text-muted-foreground"
      }`}>
        {available ? "Online" : "Offline"}
      </div>
    </Link>
  );
};

export default DoctorCard;
