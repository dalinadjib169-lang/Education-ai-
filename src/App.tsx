/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  Code2, 
  BrainCircuit, 
  Rocket, 
  Target, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Users,
  ChevronLeft,
  MessageCircle,
  Play
} from 'lucide-react';

const CTAButton = ({ text, className = "" }: { text: string, className?: string }) => (
  <motion.a
    href="#register"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center justify-center gap-2 bg-brand-cyan text-brand-darker font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all ${className}`}
  >
    {text}
    <ChevronLeft className="w-5 h-5" />
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-darker font-sans text-gray-100 overflow-x-hidden selection:bg-brand-cyan selection:text-brand-darker">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* 1. Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>أول دورة تكوينية في الذكاء الاصطناعي مع الأستاذ دالي نجيب</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white glow-text">
              تعلم الذكاء الاصطناعي من الصفر حتى تصنع <span className="text-brand-cyan">مشاريعك الأولى</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mt-6 mb-10 leading-relaxed">
              بدون أي خبرة مسبقة! دورة مبسطة للمبتدئين تماماً مع تطبيقات عملية خطوة بخطوة.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <CTAButton text="سجل الآن وابدأ التعلم" className="w-full sm:w-auto" />
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan" /> ضمان التطبيق العملي</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan" /> محتوى مخصص للمبتدئين</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan" /> شهادة إتمام</div>
            </div>
          </motion.div>
        </section>

        {/* 1.5 Video Section (VSL) */}
        <section className="w-full max-w-4xl mx-auto px-6 pb-24 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden bg-brand-dark border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.15)] group"
          >
            {/* Placeholder for Video. 
                When you have the YouTube link, you can uncomment the iframe below and place your link */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-card to-brand-darker flex flex-col items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-6 cursor-pointer group-hover:scale-110 group-hover:bg-brand-cyan/30 transition-all duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-cyan flex items-center justify-center pl-1.5 md:pl-2 shadow-[0_0_30px_rgba(0,229,255,0.5)]">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-brand-darker fill-current" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl">مساحة مخصصة للفيديو الترويجي</h3>
              <p className="text-brand-cyan text-sm md:text-base mt-2">سيتم دمج فيديو يوتيوب هنا لزيادة التفاعل والإقناع</p>
            </div>
            
            {/* 
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Welcome video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe> 
            */}
          </motion.div>
        </section>

        {/* 2. Pain Section */}
        <section className="w-full bg-brand-dark/80 backdrop-blur-sm py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>هل تواجه هذه المشاكل؟</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  عالم الذكاء الاصطناعي يبدو معقداً، أليس كذلك؟
                </h2>
                
                <ul className="space-y-6">
                  {[
                    "أغلب الناس لا يعرفون من أين يبدأون وتائهون في المصطلحات.",
                    "البرمجة تبدو معقدة ومخيفة لمن لم يدرسها مسبقاً.",
                    "مصادر الإنترنت مشتتة، طويلة جداً، وغير مترابطة."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <p className="text-xl text-gray-400">{text}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-brand-card to-brand-dark p-1 rounded-3xl glow-box relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-cyan to-blue-600 rounded-3xl opacity-20 blur"></div>
                <div className="relative bg-brand-card p-10 rounded-3xl space-y-6 border border-white/10 h-full flex flex-col justify-center text-center">
                  <div className="w-20 h-20 mx-auto bg-brand-cyan/20 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-10 h-10 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">الحل النهائي هنا</h3>
                  <p className="text-xl text-brand-cyan leading-relaxed">
                    هذه الدورة تجمع لك كل شيء في طريق بسيط ومباشر واحد. من الصفر المربك إلى الوضوح التام.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Benefits Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">ماذا ستتعلم في هذه الدورة؟</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">صممنا المحتوى ليكون الخطوة العملية الأولى لك في هذا المجال.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BrainCircuit, title: "فهم أساسيات الذكاء الاصطناعي", desc: "بدون مصطلحات أكاديمية معقدة، شرح مبسط لآلية عمل الأدوات." },
              { icon: Code2, title: "التفكير البرمجي للمبتدئين", desc: "كيف تفكر كالمهندسين وتوجه الذكاء الاصطناعي لتنفيذ أفكارك." },
              { icon: Bot, title: "تطبيقات عملية بسيطة", desc: "نطبق معاً خطوة بخطوة لبناء أدوات حقيقية يمكنك استخدامها يومياً." },
              { icon: Rocket, title: "كيف تبدأ مشاريع صغيرة", desc: "حول فهمك إلى مشاريع صغيرة قابلة للنمو وربما مشاريع ربحية." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-card border border-white/5 p-8 rounded-3xl hover:border-brand-cyan/30 hover:bg-brand-card/80 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-cyan/10 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <CTAButton text="احجز مقعدك الآن" />
          </div>
        </section>

        {/* 4 & 5. Instructor and Why this Course */}
        <section className="w-full py-24 bg-brand-dark/50 border-t border-white/5 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative glow-box bg-gradient-to-br from-brand-card to-brand-darker flex items-center justify-center">
                {/* Fallback avatar if no image provided */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                <div className="relative z-10 text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-brand-cyan/20 border-2 border-brand-cyan flex items-center justify-center">
                    <Users className="w-10 h-10 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-white">دالي نجيب</h3>
                    <p className="text-brand-cyan font-medium mt-2">مدرب وخبير تقني</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12 pl-0 lg:pl-12"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">من هو المدرب؟</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  الأستاذ دالي نجيب يعتمد أسلوباً فريداً: <span className="text-brand-cyan font-semibold">«التبسيط المطلق»</span>.
                  مدرب يقدم محتوى مخصصاً للمبتدئين بدون أي تعقيد أكاديمي أو حشو نظري.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-white/10 pb-4 inline-block mb-2">لماذا هذه الدورة تحديداً؟</h3>
                <ul className="space-y-4">
                  {[
                    "مختصرة وواضحة: لا تضييع للوقت، نركز على ما تحتاجه فعلاً.",
                    "مناسبة للمبتدئين: لغة بسيطة وشرح خطوة بخطوة.",
                    "تطبيق عملي 100%: ليس مجرد كلام نظري، بل مشاريع تصنعها بيدك."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 bg-brand-card border border-white/5 p-4 rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <p className="text-lg font-medium">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 6 & 7. Conversion & Urgency Section */}
        <section id="register" className="w-full py-24 px-6 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-brand-card to-brand-darker border border-brand-cyan/20 p-12 md:p-20 rounded-[3rem] relative overflow-hidden glow-box"
          >
            {/* Urgency Badge */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 bg-red-500/10 border border-red-500/30 text-red-500 px-6 py-2 rounded-b-2xl font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 animate-pulse" />
              <span>التسجيل مفتوح لفترة قصيرة</span>
            </div>

            <div className="space-y-8 mt-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white">احجز مقعدك الآن</h2>
              <p className="text-xl md:text-2xl text-gray-400">
                المقاعد محدودة جداً لضمان جودة المتابعة والتطبيق العملي.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-brand-darker font-extrabold py-5 px-10 rounded-full text-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:scale-105">
                  <MessageCircle className="w-6 h-6" />
                  سجل عبر واتساب
                </a>
                <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-brand-darker font-extrabold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-105">
                  نموذج التسجيل
                </a>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          </motion.div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="w-full border-t border-white/5 py-12 bg-brand-darker relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-brand-cyan" />
            <span className="text-xl font-bold font-sans">دورة الذكاء الاصطناعي للمبتدئين</span>
          </div>
          
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#register" className="hover:text-brand-cyan transition-colors">التسجيل</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">تواصل معنا واتساب</a>
          </div>
          
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ دالي نجيب.
          </div>
        </div>
      </footer>

    </div>
  );
}
