import { useParams, Link } from "react-router-dom";
import { Star, Clock, GraduationCap, Calendar, ArrowLeft, MessageCircle } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { doctors } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const DokterDetailPage = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <MobileLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Dokter tidak ditemukan</p>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      {/* Header with Back Button */}
      <div className="px-4 pt-12 pb-4">
        <Link to="/dokter" className="flex items-center gap-2 text-foreground mb-4">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali</span>
        </Link>
      </div>

      {/* Doctor Profile Card */}
      <div className="px-4 mb-6">
        <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-2xl object-cover"
              />
              {doctor.available && (
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-card" />
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground">{doctor.name}</h1>
              <p className="text-muted-foreground">{doctor.specialty}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-semibold text-foreground">{doctor.rating}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.available 
                    ? "bg-success/10 text-success" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {doctor.available ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary mx-auto flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{doctor.experience}</p>
              <p className="text-xs text-muted-foreground">Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary mx-auto flex items-center justify-center mb-2">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">S2</p>
              <p className="text-xs text-muted-foreground">Pendidikan</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary mx-auto flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{doctor.rating}</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">Tentang Dokter</h2>
        <div className="bg-card rounded-2xl p-4 shadow-card">
          <p className="text-muted-foreground text-sm leading-relaxed">{doctor.bio}</p>
        </div>
      </div>

      {/* Education */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">Pendidikan</h2>
        <div className="bg-card rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">{doctor.education}</p>
              <p className="text-sm text-muted-foreground">Kedokteran Spesialis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">Jadwal Praktik</h2>
        <div className="bg-card rounded-2xl p-4 shadow-card">
          <div className="flex flex-wrap gap-2">
            {doctor.schedule.map((day) => (
              <span
                key={day}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Price & CTA */}
      <div className="px-4 pb-6">
        <div className="bg-card rounded-2xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Biaya Konsultasi</p>
              <p className="text-2xl font-bold text-primary">{doctor.price}</p>
            </div>
            <p className="text-sm text-muted-foreground">per sesi</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 h-12 rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Buat Jadwal
            </Button>
            <Link to="/chat" className="flex-1">
              <Button className="w-full h-12 rounded-xl gradient-primary shadow-primary border-0">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default DokterDetailPage;
