import ConceptForm from "@/components/ConceptForm";

export default function Home() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center px-4bg-cover bg-center"
      style={{
        backgroundImage: "url('/finance-bg.jpg')",
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content box */}
      <div className="relative max-w-2xl w-full bg-white shadow-2xl rounded-xl p-8">
        <h1 className="text-3xl text-black font-bold text-center mb-2">
          Finance & Accounting Concept Clarity
        </h1>
        <p className="text-center text-black mb-6">
          Enter a finance or accounting term to get a clear explanation
        </p>
        <ConceptForm />
      </div>
    </main>
  );
}
