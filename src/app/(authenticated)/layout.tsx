import Footer from "@/components/common/ui/Footer"
import NavBar from "@/components/common/ui/NavBar"

export default function SangoAuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>
        <NavBar />
        <div className="px-5 xl:px-10 2xl:px-28 3xl:px-96 py-10 xl:py-20">
            {children}
        </div>
        <Footer />
    </section>
  )
} 