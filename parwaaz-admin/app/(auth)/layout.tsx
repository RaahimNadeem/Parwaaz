export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className= "bg-gradient-to-t from-black to-slate-950 flex items-center justify-center h-full">
            {children}
        </div>
    )
}