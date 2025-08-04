export interface TeamMember {
  id: number
  name: string
  image: string
  biography: string
  contribution: string
  techStack: string[]
  codeSnippet: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ahab Masud Siddiqui",
    image: "/images/resizedpassport.JPG",
    biography:
      "I'm a second-year Computer Science student and software engineering intern with strong skills in Python, React Native, and Node.js. I have experience building full-stack web applications and AI/ML projects, including an AI model for predicting cryptocurrency prices. On campus, I've held leadership roles such as Project Director for the Data Science Club and Vice President of the Pakistani Students' Association. I'm eager to contribute to EduAI and collaborate with a passionate research team.",
    contribution: "Frontend development and AI integrations for EduAI.",
    techStack: ["Python", "React Native", "Node.js", "TensorFlow"],
    codeSnippet: "const aiModel = new TensorFlow.Model({ task: 'education' });",
  },
  {
    id: 2,
    name: "Dr. Abdullah Mohammed",
    image: "/images/AbdullahMoh.jpeg",
    biography:
      "Professor Abdallah Mohamed's expertise lies in artificial intelligence, machine learning, and data science. For the EduAI research project, he provides strategic guidance on AI model selection and optimization, driving the project's mission to deliver intelligent, context-aware educational assistance through advanced retrieval-augmented generation techniques.",
    contribution:
      "Directs AI research, managing model selection and experiments with students to optimize LLM and RAG performance for EduAI.",
    techStack: ["Machine Learning", "Deep Learning", "RAG", "LLMs"],
    codeSnippet: "def optimize_llm(model, data): return model.fine_tune(data)",
  },
  {
    id: 3,
    name: "Dr. Mohammad Mostafa",
    image: "/images/MohMustafa.jpeg",
    biography:
      "Professor Mostafa Mohamed specializes in software engineering and distributed systems with a strong research focus on AI-driven tools and scalable architectures. In the EduAI project, he leads the development of the platform's backend infrastructure, ensuring robust integration of AI models and seamless user experiences tailored for UBC students.",
    contribution:
      "Leads backend development and guides students in building scalable AI infrastructure using LLMs and RAG pipelines for EduAI.",
    techStack: ["Distributed Systems", "Backend Architecture", "Cloud Computing", "APIs"],
    codeSnippet: "class EduAIBackend { constructor() { this.initializeServices(); } }",
  },
]
