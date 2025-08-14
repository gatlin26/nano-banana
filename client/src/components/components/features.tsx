import { MessageSquare, UserCheck, Layers, Zap, Images, Star } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Editing",
      description: "Edit images using simple text prompts. Nano-banana AI understands complex instructions like GPT for images.",
      color: "bg-banana-500",
    },
    {
      icon: UserCheck,
      title: "Character Consistency",
      description: "Maintain perfect character details across edits. This model excels at preserving faces and identities.",
      color: "bg-banana-green-500",
    },
    {
      icon: Layers,
      title: "Scene Preservation",
      description: "Seamlessly blend edits with original backgrounds. Superior scene fusion compared to Flux Kontext.",
      color: "bg-purple-500",
    },
    {
      icon: Zap,
      title: "One-Shot Editing",
      description: "Perfect results in a single attempt. Nano-banana solves one-shot image editing challenges effortlessly.",
      color: "bg-blue-500",
    },
    {
      icon: Images,
      title: "Multi-Image Context",
      description: "Process multiple images simultaneously. Support for advanced multi-image editing workflows.",
      color: "bg-green-500",
    },
    {
      icon: Star,
      title: "AI UGC Creation",
      description: "Create consistent AI influencers and UGC content. Perfect for social media and marketing campaigns.",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Nano Banana?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nano-banana is the most advanced AI image editor on LMArena. 
            Revolutionize your photo editing with natural language understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center group hover:shadow-lg transition-shadow">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
