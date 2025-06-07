import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Textarea } from "../../components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Github, Music, Menu, X, Coffee, Code, Zap, Star, Heart, Rocket, Clock, Monitor, Lightbulb, Gamepad2, BookOpen, Headphones } from "lucide-react";

export const ElementAboutPage = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  // Navigation items data
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Technologies", href: "#technologies" },
    { label: "Collaboration", href: "#collaboration" },
    { label: "Hire Me", href: "#hire-me" },
    { label: "Contact", href: "#contact" },
  ];

  // Quote blocks data
  const quoteBlocks = [
    {
      text: "When I was 5, I thought computers were magic boxes. Turns out I was right - they're just really expensive magic boxes that hate me personally.",
      highlighted: true,
    },
    {
      text: "I've mastered the ancient art of Googling error messages and pretending I knew the solution all along. Stack Overflow is basically my second home at this point.",
      highlighted: false,
    },
    {
      text: "Fun fact: I can debug code for 6 hours straight but still can't figure out why my microwave beeps at me aggressively.",
      highlighted: true,
    },
    {
      text: "Available for projects Monday through Friday, 9-5 (unless there's a critical bug that decides to ruin my weekend - which happens more often than I'd like to admit). Services include: turning coffee into code, explaining why your website looks weird on Internet Explorer, and occasionally making things work on the first try (rare but it happens).",
      highlighted: false,
    },
  ];

  // Technologies data with updated Tailwind CSS icon
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "My go-to library for building user interfaces. It's like LEGO blocks for web development - except when you step on a bug, it hurts your brain instead of your foot.",
      whyIUseIt: "Because who doesn't love components that you can reuse everywhere? It's like having a Swiss Army knife, but for building websites. Plus, the virtual DOM makes everything fast - faster than my excuses when code breaks in production.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "The language that runs the web and occasionally runs away from logic. It's quirky, unpredictable, and somehow makes perfect sense once you accept that '1' + 1 = '11'.",
      whyIUseIt: "Because it's everywhere! Frontend, backend, mobile apps, desktop apps - JavaScript is like that friend who shows up to every party uninvited but somehow makes it better. Also, closures are magic.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description: "JavaScript's responsible older sibling who went to college and got a degree in 'Making Sense.' It catches my mistakes before they become production disasters.",
      whyIUseIt: "Because I got tired of playing 'guess the type' at 2 AM. TypeScript is like having a really smart friend who points out your mistakes before you embarrass yourself. Static typing saves lives (and careers).",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      description: "Utility-first CSS framework that makes styling as easy as playing with building blocks. No more wrestling with CSS specificity or wondering why your div won't center.",
      whyIUseIt: "Because writing custom CSS is like trying to fold a fitted sheet - theoretically possible, but why suffer? Tailwind lets me style components faster than I can drink coffee, and that's saying something.",
      color: "from-cyan-400 to-teal-500"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "The language that reads like English and works like magic. Perfect for when you need to automate boring stuff or build AI that's smarter than you (which isn't hard).",
      whyIUseIt: "Because life's too short for semicolons and curly braces everywhere. Python is like that chill friend who gets things done without drama. Plus, the ecosystem is huge - there's literally a library for everything.",
      color: "from-blue-500 to-yellow-500"
    },
    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      description: "Google's playground for developers who want to deploy apps without buying a server farm. It's like having a data center in your pocket, except the pocket is in the cloud.",
      whyIUseIt: "Because managing servers is like babysitting - exhausting and full of unexpected surprises. GCP handles the infrastructure so I can focus on writing code that actually matters. Plus, their AI services are scary good.",
      color: "from-blue-500 to-red-500"
    }
  ];

  // Hire Me section data - Same structure as About/Collaboration
  const hireMeBlocks = [
    {
      text: "So you want to hire me? Bold choice. I'm like a premium subscription to Netflix - expensive, but you'll wonder how you lived without me. Fair warning: I come with side effects including improved code quality, reduced technical debt, and an inexplicable urge to refactor everything.",
      highlighted: true,
    },
    {
      text: "I don't just write code - I craft digital poetry that happens to make computers do useful things. My code is so clean, Marie Kondo would weep tears of joy. I write documentation that people actually read (shocking, I know).",
      highlighted: false,
    },
    {
      text: "Need someone who can turn your 'it should be simple' into actual working software? I speak fluent client-to-developer translation. 'Make it pop' becomes 'add subtle animations,' and 'can you make it more web 2.0' becomes 'absolutely not, it's 2024.'",
      highlighted: true,
    },
    {
      text: "I'm available for full-time positions, contract work, or just general tech wizardry. I work remotely (because pants are optional when you're debugging), but I'm also down for in-person collaboration if you provide good coffee and don't judge my debugging face.",
      highlighted: false,
    },
    {
      text: "My rates are competitive, my code is bulletproof, and my dad jokes are legendary. I deliver projects on time, under budget, and with fewer bugs than a freshly debugged codebase. Hire me, and I'll make your competitors wonder what dark magic you're using.",
      highlighted: true,
    },
  ];

  // Day in My Life section data
  const dayInLifeBlocks = [
    {
      text: "6:00 AM - Wake up and immediately check if any of my servers decided to have an existential crisis overnight. Spoiler alert: they usually did. Coffee is brewed with the intensity of someone defusing a bomb.",
      highlighted: true,
      icon: Clock,
    },
    {
      text: "7:30 AM - Morning standup where I pretend to understand why the frontend is 'acting weird again' and nod knowingly when someone mentions 'technical debt' like it's a mythical creature we're hunting.",
      highlighted: false,
      icon: Coffee,
    },
    {
      text: "9:00 AM - Deep work time. This is when the magic happens - I turn caffeine into code and somehow make computers bend to my will. My IDE is my canvas, and bugs are just happy little accidents (that I fix aggressively).",
      highlighted: true,
      icon: Code,
    },
    {
      text: "12:00 PM - Lunch break, where I contemplate whether the sandwich I'm eating has better architecture than the legacy code I'm refactoring. Usually, the sandwich wins.",
      highlighted: false,
      icon: Lightbulb,
    },
    {
      text: "2:00 PM - Afternoon coding session. This is when I either achieve enlightenment or question every life choice that led me to programming. There's no middle ground. Stack Overflow becomes my spiritual guide.",
      highlighted: true,
      icon: Monitor,
    },
    {
      text: "5:00 PM - Code review time! I get to play the role of 'that person' who points out that your variable names look like they were chosen by a drunk keyboard. It's therapeutic, really.",
      highlighted: false,
      icon: BookOpen,
    },
    {
      text: "7:00 PM - Evening wind-down with some side projects or learning new tech. Because apparently, I enjoy torturing myself with JavaScript frameworks that will be obsolete by next Tuesday.",
      highlighted: true,
      icon: Gamepad2,
    },
    {
      text: "10:00 PM - Finally close the laptop, but my brain keeps running background processes about that one function that could be optimized. Sleep is just a long debugging session for my subconscious.",
      highlighted: false,
      icon: Headphones,
    },
  ];

  // Collaboration blocks data
  const collaborationBlocks = [
    {
      text: "Looking for someone to write code that actually works? Plot twist: I'm your guy. I specialize in making computers do what they're supposed to do (revolutionary concept, I know).",
      highlighted: true,
    },
    {
      text: "Need a speaker for your tech event? I can talk about code for hours without getting tired - it's like a superpower, except less useful at parties. Topics include: 'Why Your Code Doesn't Work' and 'How I Learned to Stop Worrying and Love the Bug'.",
      highlighted: false,
    },
    {
      text: "Open source contributions? I'm basically the Robin Hood of code - except instead of stealing from the rich, I fix bugs that everyone's too scared to touch. Your repository's nightmare is my Tuesday afternoon.",
      highlighted: true,
    },
    {
      text: "Mentoring junior developers is my jam. I'll teach you everything I know, including the sacred art of reading error messages, the ancient technique of 'turning it off and on again,' and the mystical practice of pretending you meant to write that bug as a feature.",
      highlighted: false,
    },
    {
      text: "Available for collaborations that involve: coding (obviously), speaking at events (where I'll try not to roast your tech stack too hard), contributing to open source projects (because free labor is the best labor), and mentoring (where I'll crush your dreams gently and rebuild them stronger).",
      highlighted: true,
    },
  ];

  // Updated social media data with correct usernames and phone number
  const socialLinks = [
    { 
      name: "WhatsApp", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      url: "https://wa.me/27688822288",
      color: "hover:bg-green-500"
    },
    { 
      name: "Instagram", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      url: "https://instagram.com/tholumuzikhuboni",
      color: "hover:bg-pink-500"
    },
    { 
      name: "LinkedIn", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      url: "https://linkedin.com/in/tholumuzikhuboni",
      color: "hover:bg-blue-600"
    },
    { 
      name: "GitHub", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      url: "https://github.com/tholumuzikhuboni",
      color: "hover:bg-gray-800"
    },
    { 
      name: "TikTok", 
      icon: "https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg",
      url: "https://tiktok.com/@tholumuzikuboni",
      color: "hover:bg-black"
    },
    { 
      name: "Facebook", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
      url: "https://www.facebook.com/tholumuzi.khuboni.2025/",
      color: "hover:bg-blue-500"
    },
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/movwjdyv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-start relative w-full min-h-screen">
      {/* Enhanced Premium Desktop Navigation */}
      <header className="relative self-stretch w-full h-16 md:h-20 bg-white/95 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 md:px-8 lg:px-[50px] sticky top-0 z-50 shadow-sm">
        {/* Logo Section - Enhanced */}
        <div className="flex items-center gap-3 md:gap-4 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#009379] to-[#f6dce9] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#009379] to-[#f6dce9] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-sm md:text-base">TK</span>
            </div>
          </div>
          <div className="[font-family:'Epilogue',Helvetica] font-bold text-black text-xl md:text-2xl tracking-[-0.5px] leading-tight">
            Tholumuzi
          </div>
        </div>

        {/* Desktop Navigation - Premium Design */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-200/50">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="relative [font-family:'Epilogue',Helvetica] font-medium text-gray-700 text-sm xl:text-base tracking-[0] leading-7 hover:text-[#009379] transition-all duration-300 px-4 xl:px-6 py-2.5 rounded-full hover:bg-white hover:shadow-md group"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#009379] transition-all duration-300 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 rounded-full"></span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Button - Enhanced */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Available for hire</span>
          </div>
          <Button 
            onClick={() => document.getElementById('hire-me')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative bg-gradient-to-r from-[#009379] to-[#00b894] hover:from-[#007a65] hover:to-[#009379] text-white px-6 xl:px-8 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xl:text-base"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <button
          className="lg:hidden relative p-3 rounded-xl bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 hover:bg-gray-100 transition-all duration-300 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-5 h-5">
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700 transform rotate-0 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700 transform rotate-0 transition-transform duration-300 group-hover:rotate-180" />
            )}
          </div>
        </button>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl lg:hidden">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-700 hover:text-[#009379] font-medium py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-[#009379] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-base">{item.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Mobile Status and CTA */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Available for hire</span>
                </div>
                <Button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('hire-me')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-gradient-to-r from-[#009379] to-[#00b894] hover:from-[#007a65] hover:to-[#009379] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Responsive Hero Section - Reduced Desktop Padding */}
      <section className="relative self-stretch w-full bg-gradient-to-br from-[#f9e6f0] via-[#f5f0f9] to-[#e6f0f9] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 md:top-20 left-1/4 w-20 md:w-32 h-20 md:h-32 bg-[#009379] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 md:bottom-20 right-1/4 w-24 md:w-40 h-24 md:h-40 bg-[#f6dce9] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 md:w-24 h-16 md:h-24 bg-[#009379] rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Further reduced padding on desktop: py-12 md:py-16 lg:py-20 (was py-16 md:py-20 lg:py-24) */}
        <div className="relative px-4 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-20">
          {/* Hero Content - Responsive Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 group flex-shrink-0 w-full lg:w-auto">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#009379] to-[#f6dce9] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-[200px] md:w-[240px] lg:w-[280px] h-[200px] md:h-[240px] lg:h-[280px] bg-[url(/1000022396.png)] bg-cover bg-[50%_50%] rounded-lg border-2 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-white rounded-full px-3 md:px-4 py-1 md:py-2 shadow-lg border border-gray-100">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">Available</span>
                </div>
              </div>

              {/* Name and Title */}
              <div className="space-y-2 md:space-y-3 text-center lg:text-left">
                <h1 className="font-[number:var(--body-text-font-weight)] leading-tight font-body-text text-xl md:text-2xl font-bold text-black tracking-tight">
                  Tholumuzi Kuboni
                </h1>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="h-px bg-gradient-to-r from-[#009379] to-transparent w-full max-w-[100px]"></div>
                </div>
                <p className="text-base md:text-lg text-gray-600 font-medium">
                  Software Engineer & Code Whisperer
                </p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1 space-y-6 md:space-y-8 w-full">
              {/* Bio label with accent */}
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="text-base md:text-lg font-semibold text-[#009379] uppercase tracking-wider">Bio</span>
                <div className="h-px bg-gradient-to-r from-[#009379] to-transparent flex-1"></div>
              </div>

              {/* Enhanced bio text */}
              <div className="space-y-6 md:space-y-8">
                <div className="relative">
                  <div className="absolute -left-2 md:-left-4 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#009379] to-[#f6dce9] rounded-full"></div>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 pl-4 md:pl-8 font-body-text">
                    Growing up, I was that kid who thought Bill Gates and Mark Zuckerberg were basically real-life superheroes (cape not included, unfortunately). Their innovations sparked something in me that led to collecting degrees like Pokémon cards - a Diploma in IT (Software Development) and a BSc in Electrical & Computer Engineering.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 md:-left-4 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#f6dce9] to-[#009379] rounded-full"></div>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 pl-4 md:pl-8 font-body-text">
                    I turn coffee into code, bugs into features, and occasionally wonder if my computer judges my life choices. When I'm not debugging at 3 AM or explaining why "it works on my machine," you'll find me contemplating whether AI will eventually write better bios than this one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-0.5 md:w-1 h-2 md:h-3 bg-gray-400 rounded-full mt-1 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Responsive About Section - Reduced Padding */}
      <section id="about" className="flex items-start justify-start gap-2.5 px-4 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-20 relative self-stretch w-full bg-white">
        <div className="flex flex-col w-full max-w-none items-start justify-start gap-6 md:gap-8 lg:gap-10 relative">
          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 relative self-stretch w-full">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-medium text-[#2b2b2b] text-lg md:text-xl lg:text-2xl tracking-[0.5px] md:tracking-[1.00px] leading-7 md:leading-8 lg:leading-9">
              When I was 5, I discovered that pressing random buttons on a computer could either make cool things happen or completely break everything. Twenty years later, I'm still doing the same thing - except now I get paid for it and call it "software development."
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full">
              {quoteBlocks.map((block, index) => (
                <Card
                  key={index}
                  className={`w-full rounded-none shadow-none ${block.highlighted ? "bg-[#009379]" : ""} transition-all duration-300 hover:shadow-md`}
                >
                  <CardContent className="flex items-start gap-2.5 px-0 py-2 md:py-[5px]">
                    <div
                      className={`relative flex-1 mt-[-1.00px] [font-family:'Epilogue',Helvetica] ${block.highlighted ? "font-semibold text-[#f6dce9]" : "font-normal text-[#2b2b2b]"} text-sm md:text-base tracking-[0] leading-6 md:leading-[26px]`}
                    >
                      {block.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Reduced Padding */}
      <section id="technologies" className="px-4 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-20 bg-gray-50 w-full">
        <div className="max-w-none">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technologies I Work With</h2>
            <div className="h-px bg-gradient-to-r from-[#009379] to-transparent flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white">
                <div className={`h-2 bg-gradient-to-r ${tech.color}`}></div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={tech.icon} 
                        alt={`${tech.name} icon`}
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#009379] transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What it is:</h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{tech.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Why I use it:</h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{tech.whyIUseIt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section - Reduced Padding */}
      <section id="collaboration" className="flex items-start justify-start gap-2.5 px-4 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-20 relative self-stretch w-full bg-white">
        <div className="flex flex-col w-full max-w-none items-start justify-start gap-6 md:gap-8 lg:gap-10 relative">
          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 relative self-stretch w-full">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-medium text-[#2b2b2b] text-lg md:text-xl lg:text-2xl tracking-[0.5px] md:tracking-[1.00px] leading-7 md:leading-8 lg:leading-9">
              Ready to collaborate? Great! I'm like a Swiss Army knife, except instead of tiny scissors and a questionable corkscrew, I come with coding skills, speaking abilities, open source contributions, and mentoring expertise. Warning: Side effects may include improved code quality and occasional dad jokes about programming.
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full">
              {collaborationBlocks.map((block, index) => (
                <Card
                  key={index}
                  className={`w-full rounded-none shadow-none ${block.highlighted ? "bg-[#009379]" : ""} transition-all duration-300 hover:shadow-md`}
                >
                  <CardContent className="flex items-start gap-2.5 px-0 py-2 md:py-[5px]">
                    <div
                      className={`relative flex-1 mt-[-1.00px] [font-family:'Epilogue',Helvetica] ${block.highlighted ? "font-semibold text-[#f6dce9]" : "font-normal text-[#2b2b2b]"} text-sm md:text-base tracking-[0] leading-6 md:leading-[26px]`}
                    >
                      {block.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hire Me Section - Same Layout as About/Collaboration (Buttons Removed) */}
      <section id="hire-me" className="flex items-start justify-start gap-2.5 px-4 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-20 relative self-stretch w-full bg-gray-50">
        <div className="flex flex-col w-full max-w-none items-start justify-start gap-6 md:gap-8 lg:gap-10 relative">
          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 relative self-stretch w-full">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-medium text-[#2b2b2b] text-lg md:text-xl lg:text-2xl tracking-[0.5px] md:tracking-[1.00px] leading-7 md:leading-8 lg:leading-9">
              Ready to hire me? Excellent choice! I'm like a premium subscription to Netflix - expensive, but you'll wonder how you lived without me. Fair warning: Working with me may cause excessive productivity, an addiction to clean code, and the sudden urge to refactor everything in sight.
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full">
              {hireMeBlocks.map((block, index) => (
                <Card
                  key={index}
                  className={`w-full rounded-none shadow-none ${block.highlighted ? "bg-[#009379]" : ""} transition-all duration-300 hover:shadow-md`}
                >
                  <CardContent className="flex items-start gap-2.5 px-0 py-2 md:py-[5px]">
                    <div
                      className={`relative flex-1 mt-[-1.00px] [font-family:'Epilogue',Helvetica] ${block.highlighted ? "font-semibold text-[#f6dce9]" : "font-normal text-[#2b2b2b]"} text-sm md:text-base tracking-[0] leading-6 md:leading-[26px]`}
                    >
                      {block.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Day in My Life Section - Hero Background Colors with Fixed Icon Spacing */}
      <section className="relative self-stretch w-full bg-gradient-to-br from-[#f9e6f0] via-[#f5f0f9] to-[#e6f0f9] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 md:top-20 left-1/4 w-20 md:w-32 h-20 md:h-32 bg-[#009379] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 md:bottom-20 right-1/4 w-24 md:w-40 h-24 md:h-40 bg-[#f6dce9] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 md:w-24 h-16 md:h-24 bg-[#009379] rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative px-4 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-20">
          <div className="flex flex-col w-full max-w-none items-start justify-start gap-6 md:gap-8 lg:gap-10 relative">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6 md:mb-8 w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Day in My Life</h2>
              <div className="h-px bg-gradient-to-r from-[#009379] to-transparent flex-1"></div>
            </div>

            <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-medium text-[#2b2b2b] text-lg md:text-xl lg:text-2xl tracking-[0.5px] md:tracking-[1.00px] leading-7 md:leading-8 lg:leading-9">
              Ever wondered what a day in the life of a code wizard looks like? Spoiler alert: it's 70% coffee, 20% existential crisis about semicolons, and 10% actual magic. Here's my typical day, complete with the emotional rollercoaster that is software development.
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full">
              {dayInLifeBlocks.map((block, index) => {
                const IconComponent = block.icon;
                return (
                  <Card
                    key={index}
                    className={`w-full rounded-none shadow-none ${block.highlighted ? "bg-[#009379]" : ""} transition-all duration-300 hover:shadow-md group`}
                  >
                    <CardContent className="flex items-start gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4">
                      <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${block.highlighted ? "bg-[#f6dce9]" : "bg-[#009379]"} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${block.highlighted ? "text-[#009379]" : "text-white"}`} />
                      </div>
                      <div
                        className={`relative flex-1 mt-[-1.00px] [font-family:'Epilogue',Helvetica] ${block.highlighted ? "font-semibold text-[#f6dce9]" : "font-normal text-[#2b2b2b]"} text-sm md:text-base tracking-[0] leading-6 md:leading-[26px]`}
                      >
                        {block.text}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Responsive Footer/Contact Section - Fixed Mobile Width */}
      <footer id="contact" className="relative bg-white text-gray-900 overflow-hidden border-t border-gray-200 w-full">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 md:top-20 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-[#009379] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-[#f6dce9] rounded-full blur-3xl"></div>
        </div>

        <div className="relative px-4 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start w-full">
            {/* Left Column - Contact Info */}
            <div className="space-y-8 md:space-y-12 w-full">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
                    Let's Create Something Amazing
                  </h2>
                </div>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed w-full">
                  Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with amazing people. Let's build something incredible together!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-[#009379] to-[#00b894] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs md:text-sm">Email</p>
                    <p className="text-gray-900 font-semibold text-sm md:text-base">contact@tholumuzi.co.za</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-[#009379] to-[#00b894] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs md:text-sm">Phone</p>
                    <p className="text-gray-900 font-semibold text-sm md:text-base">+27 68 882 2288</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-[#009379] to-[#00b894] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs md:text-sm">Location</p>
                    <p className="text-gray-900 font-semibold text-sm md:text-base">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links with Real Icons */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-700">Follow Me</h3>
                <div className="flex gap-3 md:gap-4 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-10 md:w-12 h-10 md:h-12 bg-gray-100 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <img 
                        src={social.icon} 
                        alt={`${social.name} icon`}
                        className="w-5 md:w-6 h-5 md:h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                      <div className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Contact Form with Formspree */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#009379] focus:ring-[#009379] h-10 md:h-12"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#009379] focus:ring-[#009379] h-10 md:h-12"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#009379] focus:ring-[#009379] h-10 md:h-12"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#009379] focus:ring-[#009379] h-10 md:h-12"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#009379] focus:ring-[#009379] min-h-[100px] md:min-h-[120px] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm font-medium">
                      ❌ Something went wrong. Please try again or email me directly.
                    </p>
                  </div>
                )}

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#009379] to-[#00b894] hover:from-[#007a65] hover:to-[#009379] text-white font-semibold py-2 md:py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Footer Bottom - Fixed Mobile Alignment */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
              <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                <div className="w-6 md:w-8 h-6 md:h-8 bg-gradient-to-br from-[#009379] to-[#f6dce9] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">TK</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">© 2024 Tholumuzi Kuboni. All rights reserved.</p>
              </div>
              <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-600 w-full md:w-auto justify-start md:justify-end">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};