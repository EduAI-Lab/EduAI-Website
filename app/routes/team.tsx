import { Card } from "../components/ui/card";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    image: "/team/alice.jpg", // Placeholder path
    about: "Alice coordinates the team and ensures timely delivery of all project milestones.",
    twoLiner: "Loves hiking and coffee. Always up for a challenge."
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image: "/team/bob.jpg",
    about: "Bob architects the codebase and leads the development of core features.",
    twoLiner: "Passionate about open source. Enjoys cycling."
  },
  {
    name: "Carol Lee",
    role: "UI/UX Designer",
    image: "/team/carol.jpg",
    about: "Carol designs user interfaces and ensures a seamless user experience.",
    twoLiner: "Sketchbook always in hand. Loves jazz music."
  },
  {
    name: "David Kim",
    role: "QA Engineer",
    image: "/team/david.jpg",
    about: "David tests features and maintains product quality.",
    twoLiner: "Board game enthusiast. Detail-oriented."
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Meet the Team</h1>
        <div className="grid gap-8 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col items-center p-8 shadow-md border-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                onError={e => (e.currentTarget.src = "https://via.placeholder.com/100?text=Photo")}
              />
              <h2 className="text-xl font-semibold text-blue-800 mt-2 mb-1">{member.name}</h2>
              <div className="text-blue-600 mb-2 font-medium">{member.role}</div>
              <p className="text-center text-gray-700 mb-2">{member.about}</p>
              <div className="italic text-blue-400 text-center">{member.twoLiner}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 