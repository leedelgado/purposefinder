import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft, Scan, ShieldAlert, Cpu, PenTool, Mic, Info } from 'lucide-react';

// Adaptive Design System Wrapper
const ThemeWrapper = ({ children }) => (
  <div className="min-h-screen bg-background text-text selection:bg-secondary/30 relative overflow-hidden bg-mesh transition-colors duration-500">
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
      {children}
    </div>
  </div>
);

const AccessibleCard = ({ children, className = "", role = "region", ariaLabel = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`glass p-8 md:p-12 rounded-3xl shadow-luminous ${className}`}
    role={role}
    aria-label={ariaLabel}
  >
    {children}
  </motion.div>
);

// Main Application
export default function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  const chapters = [
    {
      title: "Attraction + Pull",
      icon: Scan,
      questions: [
        "What’s something you’ve always felt a pull towards? Dive deep into this.",
        "What subjects or fields naturally attract you? (e.g., Education, Health, Psychology, Gaming etc.)",
        "What do you do when no one is watching? (e.g., Consume content on entrepreneurship, Self educate, etc.)",
        "What do you do because it’s part of who you are? (e.g., Workout, Draw, Meditate, etc.)",
        "What are your hobbies? (e.g., Dance, Visit art museums, Skateboard etc.)",
        "Are there any themes that feel stronger than others? (Design, growth, or entrepreneurship?)",
        "Are you looking to merge these into a career/business, or keep some as side pursuits?",
        "Which excites you more—mastering knowledge for yourself or uplifting others?",
        "Describe an ideal day where you’re fully in your element. What are you doing? Where are you?",
        "Which of these pulls have lasted the longest? (Design, fitness, psychology, etc.)",
        "If you had to choose ONE pull to build a career around, which feels most natural?",
        "Which pulls give you energy, and which drain you?"
      ]
    }
  ];

  const currentChapter = chapters[0];

  const handleNextQuestion = () => {
    if (!currentAnswer.trim()) return;

    const updatedAnswers = {
      ...answers,
      [`ch${currentChapterIndex}_q${currentQuestionIndex}`]: currentAnswer
    };
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < currentChapter.questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setCurrentAnswer(updatedAnswers[`ch${currentChapterIndex}_q${nextIndex}`] || '');
    } else {
      setIsNoteVisible(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setCurrentAnswer(answers[`ch${currentChapterIndex}_q${prevIndex}`] || '');
    }
  };

  return (
    <ThemeWrapper>
      <header className="mb-16 flex items-center justify-between" role="banner">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center border border-secondary/20 shadow-sm">
            <Sparkles className="w-6 h-6 text-secondary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-primary dark:text-white">
            Purpose <span className="text-secondary">Guide</span>
          </h1>
        </div>

        <div className="text-sm font-semibold uppercase tracking-widest text-text-dim" aria-label={`Step indicator: ${isIntroComplete ? `Chapter ${currentChapterIndex + 1}` : 'Initial Call'}`}>
          {isIntroComplete ? (
            <>Chapter <span className="text-primary dark:text-white">{currentChapterIndex + 1}</span> / 15</>
          ) : (
            "The Initial Call"
          )}
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          {!isIntroComplete ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AccessibleCard ariaLabel="Introduction to your purpose journey">
                <div className="flex items-center gap-3 mb-8 text-secondary">
                  <Info className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">A Foundation for Your Journey</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-primary dark:text-white leading-[1.1]">
                  Discovery of Your Life's Work
                </h2>

                <div className="space-y-10 text-xl text-text-dim leading-relaxed">
                  <blockquote className="border-l-4 border-secondary/30 pl-8 py-0 mb-12 italic text-text quotes text-2xl md:text-3xl font-medium">
                    "The meaning of life is to find your gift. The purpose of life is to give it away."
                    <footer className="mt-6 text-sm font-bold uppercase tracking-widest text-secondary not-italic">— Pablo Picasso</footer>
                  </blockquote>

                  <div className="space-y-6 text-text/80">
                    <p>
                      Our higher selves is the more truly human side of our nature, the side that makes us thoughtful and self-aware.
                      Because the higher impulse is weaker, connecting to it requires effort and insight. Bringing out this ideal
                      self within us is what we all really want, because it is only in developing this side of ourselves that
                      we humans feel truly fulfilled.
                    </p>

                    <p className="bg-secondary/5 border-y border-secondary/10 py-6 px-4 my-8 text-text font-medium rounded-lg">
                      Asking yourself questions, writing them down, looking at the answers and reflecting on them will
                      raise your emotional intelligence, self awareness, and lead to clarity.
                    </p>

                    <p>
                      The real purpose comes from within. It is an idea, a calling, a sense of mission that we feel personally
                      and intimately connected to. It is our own; we may have been inspired by others, but nobody imposed it
                      upon us and nobody can take it away. False purposes come from external sources—belief systems that
                      we swallow whole, conformity to what other people are doing.
                    </p>

                    <p>
                      The only solution is to find a higher sense of purpose, a mission that will provide us our own direction,
                      not that of our parents, friends, or peers. This mission is intimately connected to our individuality,
                      to what makes us unique.
                    </p>

                    <blockquote className="bg-slate-50 dark:bg-slate-900 md:p-10 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 my-10 relative">
                      <span className="text-6xl absolute -top-4 -left-2 opacity-10 font-serif">"</span>
                      <p className="relative z-10 text-xl md:text-2xl font-bold text-primary dark:text-white leading-tight">
                        “We have a responsibility to set out to discover what we are made for, to discover our life’s work,
                        to discover what we are called to do. And after we discover that, we should set out to do it with
                        all the strength and all of the power that we can muster.”
                      </p>
                      <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-secondary">— Dr. Martin Luther King</footer>
                    </blockquote>

                    <p>
                      This “life’s work” is what we were intended to do, as dictated by our particular skills, gifts, and
                      inclinations. It is our calling in life. For King, it was an impulse to find his own particular path,
                      to fuse the practical with the spiritual. Finding this higher sense of purpose gives us the
                      integration and direction we all crave.
                    </p>

                    <p className="font-semibold text-primary dark:text-white border-l-2 border-secondary pl-6">
                      Consider this “life’s work” something that speaks to you from within—a voice.
                    </p>

                    <p>
                      This voice will often warn you when you are getting involved in unnecessary entanglements or
                      when you are about to follow career paths that are unsuited to your character, by the uneasiness
                      that you feel. It directs you toward activities and goals that mesh with your nature.
                    </p>

                    <p>
                      When you are listening to it, you feel like you have greater clarity and wholeness. If you listen
                      closely enough, it will direct you toward your particular destiny. It can be seen as something
                      spiritual or something personal, or both.
                    </p>

                    <p>
                      By our nature we humans crave a sense of direction. With a sense of purpose we feel excited and
                      lifted above the pettiness that so often marks daily life in the modern world. We are on a mission.
                      We are realizing our life’s work. We are contributing to something much larger than ourselves,
                      and this ennobles us.
                    </p>

                    <p className="text-secondary font-bold">
                      We have moments of great fulfillment that sustain us. Even death can lose its sting.
                      What we have accomplished will outlive us, and we do not have that debilitating feeling
                      of having wasted our potential.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsIntroComplete(true)}
                  className="luminous-button mt-16 w-full md:w-auto px-12 py-5 text-xl flex items-center justify-center gap-4 group"
                  aria-label="Start answering discovery questions"
                >
                  Begin Your Journey <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </button>
              </AccessibleCard>
            </motion.div>
          ) : isNoteVisible ? (
            <motion.div
              key="detective-note"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <AccessibleCard className="border-sky-500/20 bg-sky-50/10 dark:bg-sky-900/10 shadow-luminous-cyan">
                <div className="flex items-center gap-4 mb-8">
                  <ShieldAlert className="w-8 h-8 text-secondary" />
                  <h2 className="text-3xl font-bold text-primary dark:text-white uppercase tracking-wider">Pattern Identified</h2>
                </div>

                <div className="space-y-6 text-xl text-text leading-relaxed">
                  <p className="italic">
                    "I notice a subtle recurring theme in your reflections..."
                  </p>
                  <p className="font-medium text-primary dark:text-white">
                    There seems to be a strong connection between your natural pull toward
                    problem-solving and your ideal day's focus on structured creation.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-text-dim mb-8 text-center font-medium">
                    Does this observation resonate with you, or should we refine our focus?
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button onClick={() => setIsNoteVisible(false)} className="secondary-button flex-1 order-2 md:order-1">
                      Continue Reflecting
                    </button>
                    <button onClick={() => alert("Proceeding...")} className="luminous-button flex-[2] order-1 md:order-2 flex items-center justify-center gap-2">
                      Correct, Proceed <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </AccessibleCard>
            </motion.div>
          ) : (
            <motion.div
              key={`question-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <AccessibleCard>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <Scan className="w-8 h-8 text-secondary" />
                    <h2 className="text-2xl font-bold text-primary dark:text-white">Chapter 1</h2>
                  </div>
                  <div className="px-3 py-1 bg-secondary/10 rounded-full text-xs font-bold text-secondary tracking-widest">
                    {currentQuestionIndex + 1} / {currentChapter.questions.length}
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-6">
                    <p className="text-3xl font-extrabold text-text leading-tight">
                      {currentChapter.questions[currentQuestionIndex]}
                    </p>
                    <div className="relative group">
                      <textarea
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 
                                 rounded-2xl p-8 text-text text-xl focus-ring
                                 transition-all min-h-[300px] placeholder:text-text-dim/30"
                        placeholder="Share your reflection..."
                        aria-label={`Reflection for question ${currentQuestionIndex + 1}`}
                        autoFocus
                      />
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-text-dim/40 group-focus-within:text-secondary/60">
                        <Mic className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">Supports Speech</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="text-sm text-text-dim font-medium italic">
                      Step into your honest self.
                    </div>
                    <div className="flex gap-4">
                      {currentQuestionIndex > 0 && (
                        <button
                          onClick={handlePreviousQuestion}
                          className="secondary-button flex items-center gap-2"
                          aria-label="Previous question"
                        >
                          <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                      )}
                      <button
                        onClick={handleNextQuestion}
                        disabled={!currentAnswer.trim()}
                        className={`luminous-button flex items-center gap-2 ${!currentAnswer.trim() ? 'opacity-30 grayscale cursor-not-allowed' : ''}`}
                      >
                        {currentQuestionIndex < currentChapter.questions.length - 1 ? 'Next Step' : 'Identify Patterns'} <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </AccessibleCard>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ThemeWrapper>
  );
}
