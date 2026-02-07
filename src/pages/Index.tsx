import { Bell, Search } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import QuickActions from "@/components/home/QuickActions";
import DoctorCard from "@/components/home/DoctorCard";
import ServiceCard from "@/components/home/ServiceCard";
import { doctors, services } from "@/data/mockData";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <MobileLayout>
      {/* Header */}
      <div className="gradient-primary px-4 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/80 text-sm">Selamat datang 👋</p>
            <h1 className="text-xl font-bold text-primary-foreground">John Doe</h1>
          </div>
          <button className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Cari dokter, layanan..."
            className="pl-12 h-12 bg-card border-0 rounded-xl shadow-card"
          />
        </div>
      </div>

      <div className="px-4 -mt-2">
        {/* Quick Actions */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Akses Cepat</h2>
          <QuickActions />
        </section>

        {/* Available Doctors */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Dokter Tersedia</h2>
            <a href="/dokter" className="text-sm text-primary font-medium">Lihat Semua</a>
          </div>
          <div className="space-y-3">
            {doctors.slice(0, 2).map((doctor, index) => (
              <div key={doctor.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <DoctorCard {...doctor} />
              </div>
            ))}
          </div>
        </section>

        {/* Popular Services */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Layanan Populer</h2>
            <a href="/layanan" className="text-sm text-primary font-medium">Lihat Semua</a>
          </div>
          <div className="space-y-3">
            {services.slice(0, 3).map((service, index) => (
              <div key={service.id} className="animate-slide-up" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </MobileLayout>
  );
};

export default Index;
