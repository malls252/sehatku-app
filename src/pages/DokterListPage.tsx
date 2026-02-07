import { Search, Filter, Star } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { doctors } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const DokterListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout>
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground">Daftar Dokter</h1>
        <p className="text-muted-foreground">Temukan dokter terbaik untuk Anda</p>
      </div>

      {/* Search & Filter */}
      <div className="px-4 mb-6">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari dokter..."
              className="pl-12 h-12 bg-card border-border rounded-xl"
            />
          </div>
          <button className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Doctors List */}
      <div className="px-4 pb-6 space-y-3">
        {filteredDoctors.map((doctor, index) => (
          <Link
            key={doctor.id}
            to={`/dokter/${doctor.id}`}
            className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              {doctor.available && (
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground">{doctor.name}</h3>
              <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
              <p className="text-xs text-muted-foreground mt-1">{doctor.experience} pengalaman</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <span className="text-sm font-medium text-foreground">{doctor.rating}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  doctor.available 
                    ? "bg-success/10 text-success" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {doctor.available ? "Online" : "Offline"}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary">{doctor.price}</p>
              <p className="text-xs text-muted-foreground">per sesi</p>
            </div>
          </Link>
        ))}
      </div>
    </MobileLayout>
  );
};

export default DokterListPage;
