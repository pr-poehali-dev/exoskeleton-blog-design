import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/a49319b2-5e39-4545-aa2f-8372ffe8a97a/files/95996138-0f8d-4252-b64c-0db14eb63d25.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#303b47]/90 via-[#303b47]/80 to-[#303b47]/95" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Exoskeletons for Home,<br />Mobility & Garden
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            Expert Reviews and Essential Gear to Boost Your Performance and Prevent Injuries
          </p>
          <Button 
            size="lg" 
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white text-lg px-10 py-6 rounded-full font-semibold tracking-wide transition-all hover:scale-105 shadow-xl shadow-[#0EA5E9]/30"
          >
            EXPLORE REVIEWS
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight animate-slide-up">
            YOUR PATH TO ENHANCED LIVING
          </h2>
          <div className="w-24 h-1 bg-[#0EA5E9] mx-auto mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#0EA5E9]/30">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                <Icon name="Home" size={40} className="text-[#0EA5E9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">HOME ASSISTANCE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover exoskeletons designed to help with daily household tasks, reducing strain and increasing efficiency in your home environment.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#22c55e]/30">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
                <Icon name="Leaf" size={40} className="text-[#22c55e]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">GARDEN SUPPORT</h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore gear that makes gardening easier on your back and joints, allowing you to enjoy outdoor work without the pain.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#0EA5E9]/30">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                <Icon name="Activity" size={40} className="text-[#0EA5E9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">MOBILITY FREEDOM</h3>
              <p className="text-muted-foreground leading-relaxed">
                Find solutions that enhance your movement and independence, whether for rehabilitation or active lifestyle support.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;