export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="pt-[10vh] max-w-screen-xl mx-auto">
      <div className="p-responsive-padding">
        {children}
      </div>
    </main>
  )
}
