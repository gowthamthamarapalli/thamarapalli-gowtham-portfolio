import { useState } from 'react';
import {
  Mail,
  FolderGit2,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setFormSubmitted(true);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Gowtham,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Contact Me
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Whether you have questions about my projects, wish to connect, or want to discuss technology and internships, I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info & GitHub */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                  <div className="text-sm font-semibold text-white">Reach out anytime</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-2 mt-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm text-indigo-300 hover:text-indigo-200 truncate font-mono"
                  title="Click to send email"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-[11px] text-emerald-400 mt-2 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                </div>
              )}
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-200 shrink-0">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Code Repository & Profile</div>
                  <div className="text-sm font-semibold text-white">GitHub Profile</div>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                Explore my repositories, commits, and practice projects as I build in the open.
              </p>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white text-xs sm:text-sm font-medium transition-all group"
              >
                <span>Visit https://github.com/gowthamthamarapalli</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-400 space-y-1">
              <div className="text-slate-300 font-medium">Location: Rajkot, Gujarat, India</div>
              <div>Student at Marwadi University · Computer Science and Engineering</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  Frontend Version
                </span>
              </div>

              {formSubmitted ? (
                /* Honest submission response without pretending a backend exists */
                <div className="p-6 rounded-xl bg-slate-950 border border-indigo-500/40 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        Thank you, {formData.name}!
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Because this portfolio is currently running in frontend-only mode, messages are not stored on an external email server.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                    <div className="font-semibold text-slate-200 mb-1">Your Prepared Message:</div>
                    <div className="italic text-slate-400 border-l-2 border-indigo-500/50 pl-2.5 py-1">
                      &ldquo;{formData.message}&rdquo;
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={handleOpenMailClient}
                      className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch via Email Client</span>
                    </button>

                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                    >
                      Edit Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Write your note, feedback, or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Frontend-only transparency note */}
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400">
                    <AlertCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>
                      Frontend notice: Submitting will generate a formatted draft that opens in your email application addressed directly to Gowtham.
                    </span>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
