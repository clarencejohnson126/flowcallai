import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function VoiceAgentCourse() {
  const topics = [
    'Design and architecture of voice agents',
    'Hands-on tutorials with FlowCall.AI',
    'Optimization strategies for real deployments'
  ];

  return (
    <section id="voice-agent-course" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-purple-500 font-semibold mb-4 block">
            VOICE AGENT COURSE
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Mastering AI Voice Agents
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our course guides you through building, deploying and optimizing
            your own voice agents with FlowCall.AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black/50 p-8 rounded-2xl border border-purple-500/20 flex items-start space-x-4"
            >
              <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">{topic}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
