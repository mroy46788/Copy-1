import { BookOpen, ChevronRight, PlayCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with Midjourney v6',
      description: 'Learn the basics of prompting in Midjourney v6, including parameters, aspect ratios, and stylization.',
      type: 'video',
      duration: '15 min',
      level: 'Beginner',
      image: 'https://picsum.photos/seed/tut1/600/400',
    },
    {
      id: 2,
      title: 'Mastering DALL-E 3 Prompts',
      description: 'Discover how to write effective conversational prompts for DALL-E 3 to get exactly what you want.',
      type: 'article',
      duration: '8 min read',
      level: 'Beginner',
      image: 'https://picsum.photos/seed/tut2/600/400',
    },
    {
      id: 3,
      title: 'Advanced Lighting Techniques',
      description: 'Explore different lighting keywords (cinematic, volumetric, studio) and how they affect your AI art.',
      type: 'article',
      duration: '12 min read',
      level: 'Intermediate',
      image: 'https://picsum.photos/seed/tut3/600/400',
    },
    {
      id: 4,
      title: 'Consistent Characters in Stable Diffusion',
      description: 'A comprehensive guide to generating consistent characters across multiple images using ControlNet.',
      type: 'video',
      duration: '25 min',
      level: 'Advanced',
      image: 'https://picsum.photos/seed/tut4/600/400',
    },
    {
      id: 5,
      title: 'Understanding Art Styles & Movements',
      description: 'A visual dictionary of art styles (cyberpunk, impressionism, surrealism) to use in your prompts.',
      type: 'article',
      duration: '10 min read',
      level: 'Beginner',
      image: 'https://picsum.photos/seed/tut5/600/400',
    },
    {
      id: 6,
      title: 'Prompt Engineering for Photorealism',
      description: 'Learn the specific keywords and camera settings needed to generate hyper-realistic photos.',
      type: 'video',
      duration: '18 min',
      level: 'Intermediate',
      image: 'https://picsum.photos/seed/tut6/600/400',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-indigo-500" />
          Tutorials & Guides
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl">
          Master the art of AI image generation. From beginner basics to advanced prompting techniques, our guides will help you create better art.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <Link key={tutorial.id} to={`/tutorials/${tutorial.id}`} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={tutorial.image} 
                alt={tutorial.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-300 border border-slate-800 flex items-center gap-1.5">
                {tutorial.type === 'video' ? <PlayCircle className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                {tutorial.duration}
              </div>
              <div className="absolute top-4 right-4 bg-indigo-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                {tutorial.level}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                {tutorial.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                {tutorial.description}
              </p>
              <div className="flex items-center text-indigo-400 font-medium text-sm mt-auto">
                Read Tutorial <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
