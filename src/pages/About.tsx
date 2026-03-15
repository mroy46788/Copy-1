import { Rabbit } from 'lucide-react';

export default function About() {
  const images = [
    'https://picsum.photos/seed/about1/600/400',
    'https://picsum.photos/seed/about2/600/800',
    'https://picsum.photos/seed/about3/600/400',
    'https://picsum.photos/seed/about4/600/600',
    'https://picsum.photos/seed/about5/600/600',
    'https://picsum.photos/seed/about6/600/600',
    'https://picsum.photos/seed/about7/600/400',
    'https://picsum.photos/seed/about8/600/400',
    'https://picsum.photos/seed/about9/600/400',
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="text-center mb-24">
        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 mx-auto mb-6">
          <Rabbit className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Prompt Image</h1>
        <p className="text-slate-400 text-lg mb-8">AI Image Prompts Gallery</p>
        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          👋 Welcome to Prompt Image! We're dedicated to building the best AI image generation prompt library, helping creators explore the infinite possibilities of AI art. Whether you're using Midjourney v6, DALL-E 3, Flux, Stable Diffusion XL, Leonardo AI, or nanobanana, you'll find inspiration and learning resources here.
        </p>
        <button className="px-6 py-2.5 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 rounded-lg font-medium transition-colors border border-indigo-500/20 flex items-center gap-2 mx-auto">
          <span className="text-xl">✉️</span> Contact Us
        </button>
      </div>

      {/* Content Sections */}
      <div className="space-y-20 mb-24">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              In today's rapidly evolving AI image generation landscape, we noticed creators facing a common challenge: how to write prompts that generate the desired images? Crafting effective prompts often requires extensive practice and accumulated experience.
            </p>
            <p>
              Prompt Image was born from this insight: by collecting and sharing these valuable prompt experiences, we can help more people overcome the learning curve and create stunning AI artwork faster.
            </p>
            <p>
              We believe knowledge and creativity should be shared, not monopolized. By building an open, free prompt library, we aim to lower the barriers to AI art creation and enable everyone to participate in this creative revolution.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-slate-300 mb-6">Make AI art creation simple, fun, and accessible to everyone. We're committed to:</p>
          <ul className="space-y-3 text-slate-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Curating high-quality prompts to save creators' exploration time
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Providing detailed guides to help beginners get started quickly
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Building an open sharing community to foster creative exchange
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Continuously updating content to keep pace with the latest AI developments
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Curated Prompt Library</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Every prompt is tested in practice to ensure high-quality image generation</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Multi-Platform Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Covering Midjourney v6, DALL-E 3, Flux, Stable Diffusion XL, Leonardo AI, and nanobanana</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Completely Free</h3>
              <p className="text-slate-400 text-sm leading-relaxed">All content is freely accessible, no registration required, open for use</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Detailed Instructions</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Each prompt comes with parameter explanations and usage recommendations</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Categorized Search</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Quickly find prompts through categories, tags, and search</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Regular Updates</h3>
              <p className="text-slate-400 text-sm leading-relaxed">New content added regularly, keeping up with latest AI tech and creative trends</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Open Sharing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We believe knowledge should flow freely. All prompts use open licenses, encouraging sharing and innovation.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Quality First</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We don't chase quantity, but focus on providing truly valuable, verified high-quality content.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We listen to user feedback and will open community submissions, making the platform truly co-created by creators.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Innovation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">AI technology evolves rapidly. We keep learning and improving to provide the latest, most practical resources.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us</h2>
          <p className="text-slate-300 mb-6">Prompt Image is not just a tool, but a creator community. We welcome you to:</p>
          <ul className="space-y-3 text-slate-300 ml-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Use our prompts to create amazing works
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Share your creative experiences and insights
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Suggest improvements to help us do better
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1.5">•</span>
              Follow our social media for the latest updates
            </li>
          </ul>
          <p className="text-indigo-400 font-bold text-lg">Let's explore the infinite possibilities of AI art together!</p>
        </section>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
        {images.map((src, i) => (
          <div key={i} className={`rounded-xl overflow-hidden ${i === 1 ? 'row-span-2' : ''}`}>
            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        <p className="text-slate-400 mb-12">Have any questions or suggestions? We'd love to hear from you</p>
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-left">
          <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>
          <p className="text-slate-400 text-sm mb-8">Fill out the form below and we'll get back to you soon</p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input type="text" placeholder="Name" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" placeholder="Email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea placeholder="Message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-600 resize-none"></textarea>
            </div>
            <button type="submit" className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
