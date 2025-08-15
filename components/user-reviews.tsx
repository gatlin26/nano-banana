'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function UserReviews() {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "Digital Artist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4&clothesColor=262e33",
      initials: "SC",
      rating: 5,
      review: "Nano Banana has revolutionized my workflow! The character consistency is incredible - I can edit portraits without losing the person's identity. This is exactly what I needed for my client work.",
      date: "2 days ago"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Content Creator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=c0aede&clothesColor=3c4f5c",
      initials: "MR",
      rating: 5,
      review: "I've tried many AI image editors, but Nano Banana is in a league of its own. The one-shot editing actually works - no more generating 20 versions to get what I want. Saves me hours every week!",
      date: "1 week ago"
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=ffd93d&clothesColor=25557c",
      initials: "EW",
      rating: 5,
      review: "Our team uses Nano Banana for all our campaign visuals. The scene preservation feature is amazing - we can change outfits, backgrounds, and styles while keeping the original composition intact.",
      date: "3 days ago"
    },
    {
      name: "David Kim",
      role: "Photographer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=ffdfbf&clothesColor=929598",
      initials: "DK", 
      rating: 5,
      review: "As a professional photographer, I'm impressed by Nano Banana's quality. The AI understands context better than any tool I've used. It's like having a skilled photo editor who never makes mistakes.",
      date: "5 days ago"
    },
    {
      name: "Lisa Thompson",
      role: "Social Media Manager",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa&backgroundColor=a7f3d0&clothesColor=6b7280",
      initials: "LT",
      rating: 5,
      review: "Nano Banana makes creating engaging social content so easy! I can quickly adapt images for different platforms and campaigns. The free unlimited usage is incredible - no other tool offers this value.",
      date: "1 week ago"
    },
    {
      name: "Alex Johnson",
      role: "Graphic Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=fed7d7&clothesColor=1f2937",
      initials: "AJ",
      rating: 5,
      review: "The precision of Nano Banana is outstanding. I can make surgical edits to images without affecting other elements. It's become an essential tool in my design arsenal. Highly recommended!",
      date: "4 days ago"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-blue-600 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Users Say About <span className="text-blue-600">Nano Banana</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of creators who trust Nano Banana for their AI image editing needs
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 1,250+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-blue-200 hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-blue-600 text-white font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-blue-300 mb-2" />
                    <p className="text-gray-700 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
