import { Search } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { services } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LayananPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout>
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground">Layanan Kesehatan</h1>
        <p className="text-muted-foreground">Pilih layanan yang Anda butuhkan</p>
      </div>

      {/* Search */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari layanan..."
            className="pl-12 h-12 bg-card border-border rounded-xl"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {filteredServices.map((service, index) => (
            <a
              key={service.id}
              href={`/layanan/${service.id}`}
              className="bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{service.title}</h3>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">{service.price}</span>
                <span className="text-xs text-muted-foreground">{service.duration}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default LayananPage;
