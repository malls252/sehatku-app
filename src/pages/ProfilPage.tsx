import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Droplets, 
  AlertTriangle, 
  ChevronRight,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Shield,
  FileText
} from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { userProfile } from "@/data/mockData";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

const menuItems = [
  { icon: Bell, label: "Notifikasi", path: "/notifications" },
  { icon: Shield, label: "Privasi & Keamanan", path: "/privacy" },
  { icon: FileText, label: "Riwayat Medis", path: "/medical-history" },
  { icon: Settings, label: "Pengaturan", path: "/settings" },
  { icon: HelpCircle, label: "Bantuan", path: "/help" },
];

const ProfilPage = () => {
  return (
    <MobileLayout>
      {/* Header */}
      <div className="gradient-primary px-4 pt-12 pb-16 rounded-b-3xl">
        <h1 className="text-xl font-bold text-primary-foreground mb-6">Profil Saya</h1>
        
        <div className="flex items-center gap-4">
          <img
            src={userProfile.image}
            alt={userProfile.name}
            className="w-20 h-20 rounded-2xl object-cover border-4 border-primary-foreground/20"
          />
          <div>
            <h2 className="text-xl font-bold text-primary-foreground">{userProfile.name}</h2>
            <p className="text-primary-foreground/80">{userProfile.email}</p>
            <button className="mt-2 px-4 py-1 bg-primary-foreground/20 rounded-full text-sm text-primary-foreground font-medium">
              Edit Profil
            </button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="px-4 -mt-8">
        <div className="bg-card rounded-2xl p-4 shadow-card mb-6 animate-fade-in">
          <h3 className="font-semibold text-foreground mb-4">Informasi Pribadi</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Jenis Kelamin</p>
                <p className="text-sm font-medium text-foreground">{userProfile.gender}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tanggal Lahir</p>
                <p className="text-sm font-medium text-foreground">
                  {format(parseISO(userProfile.dateOfBirth), "d MMMM yyyy", { locale: id })}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Nomor Telepon</p>
                <p className="text-sm font-medium text-foreground">{userProfile.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">{userProfile.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Info */}
        <div className="bg-card rounded-2xl p-4 shadow-card mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h3 className="font-semibold text-foreground mb-4">Informasi Medis</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Golongan Darah</p>
                <p className="text-sm font-medium text-foreground">{userProfile.bloodType}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Alergi</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {userProfile.allergies.map((allergy) => (
                    <span
                      key={allergy}
                      className="px-3 py-1 bg-warning/10 text-warning rounded-full text-xs font-medium"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-card rounded-2xl shadow-card mb-6 overflow-hidden animate-fade-in" style={{ animationDelay: "200ms" }}>
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.path}
              className="flex items-center gap-4 px-4 py-4 hover:bg-secondary/50 transition-colors border-b border-border last:border-0"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="flex-1 font-medium text-foreground">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </a>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 py-4 mb-6 text-destructive font-medium">
          <LogOut className="w-5 h-5" />
          Keluar
        </button>
      </div>
    </MobileLayout>
  );
};

export default ProfilPage;
