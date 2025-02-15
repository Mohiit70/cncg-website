import { EventCard } from "@/components/event-card";

export default function EventsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Events
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300">
              Join us for exciting events, workshops, and meetups focused on
              cloud-native technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Tomorrow's Event"
              date="February 16, 2024"
              image="/img/tomorrow-event.png"
              link="https://example.com/register"
            />
            <EventCard
              title="Cloud Native Meetup"
              date="February 15, 2024"
              image="/img/cloud-native-meetup.jpg"
              link="https://example.com/register"
            />
            <EventCard
              title="Kubernetes Workshop"
              date="March 1, 2024"
              image="/img/kubernetes-workshop.jpg"
              link="https://example.com/register"
            />
            <EventCard
              title="DevOps Fundamentals"
              date="March 15, 2024"
              image="/img/devops-fundamentals.jpg"
              link="https://example.com/register"
            />
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="CNCG Launch Event"
              date="January 25, 2024"
              image="/img/cncg-launch.jpg"
            />
            <EventCard
              title="Introduction to Docker"
              date="January 15, 2024"
              image="/img/docker-intro.jpg"
            />
            <EventCard
              title="Cloud Native Security"
              date="December 1, 2023"
              image="/img/cloud-native-security.jpg"
            />
            <EventCard
              title="Microservices Architecture"
              date="November 15, 2023"
              image="/img/microservices-architecture.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
