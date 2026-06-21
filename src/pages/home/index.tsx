import ScreenGate from "../../components/layout/ScreenGate";

export default function HomePage() {
  return (
    <>
      <ScreenGate />
      
      <div className="hidden lg:block">
        <section className="h-screen flex items-center justify-center bg-red-100/10">
          <h1 className="text-4xl font-bold font-display">Section 1 (Desktop)</h1>
        </section>

        <section className="h-screen flex items-center justify-center bg-blue-100/10">
          <h1 className="text-4xl font-bold font-display">Section 2 (Desktop)</h1>
        </section>
      </div>
    </>
  );
}