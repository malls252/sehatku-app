import { Calendar, Clock, ChevronRight } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { schedules, doctors } from "@/data/mockData";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JadwalPage = () => {
  const upcomingSchedules = schedules.filter(s => s.status === "upcoming");
  const completedSchedules = schedules.filter(s => s.status === "completed");

  const getDoctor = (doctorId: string) => doctors.find(d => d.id === doctorId);

  return (
    <MobileLayout>
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground">Jadwal Saya</h1>
        <p className="text-muted-foreground">Kelola jadwal konsultasi Anda</p>
      </div>

      <div className="px-4">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full mb-4 bg-secondary">
            <TabsTrigger value="upcoming" className="flex-1">Akan Datang</TabsTrigger>
            <TabsTrigger value="completed" className="flex-1">Selesai</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-3">
            {upcomingSchedules.length > 0 ? (
              upcomingSchedules.map((schedule) => {
                const doctor = getDoctor(schedule.doctorId);
                return (
                  <div
                    key={schedule.id}
                    className="bg-card rounded-2xl p-4 shadow-card animate-fade-in"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={doctor?.image}
                        alt={schedule.doctorName}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{schedule.doctorName}</h3>
                        <p className="text-sm text-muted-foreground">{schedule.service}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{format(parseISO(schedule.date), "d MMMM yyyy", { locale: id })}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{schedule.time}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex gap-2">
                      <button className="flex-1 py-2 px-4 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium hover:bg-secondary/80 transition-colors">
                        Batalkan
                      </button>
                      <button className="flex-1 py-2 px-4 gradient-primary text-primary-foreground rounded-xl text-sm font-medium shadow-primary hover:opacity-90 transition-opacity">
                        Mulai Chat
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">Belum Ada Jadwal</h3>
                <p className="text-sm text-muted-foreground">Anda belum memiliki jadwal konsultasi</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-3">
            {completedSchedules.length > 0 ? (
              completedSchedules.map((schedule) => {
                const doctor = getDoctor(schedule.doctorId);
                return (
                  <div
                    key={schedule.id}
                    className="bg-card rounded-2xl p-4 shadow-card opacity-75"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={doctor?.image}
                        alt={schedule.doctorName}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{schedule.doctorName}</h3>
                        <p className="text-sm text-muted-foreground">{schedule.service}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{format(parseISO(schedule.date), "d MMMM yyyy", { locale: id })}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{schedule.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium">
                        Selesai
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">Belum Ada Riwayat</h3>
                <p className="text-sm text-muted-foreground">Anda belum pernah konsultasi</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default JadwalPage;
