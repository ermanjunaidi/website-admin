export default function AuthLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-items-center justify-center h-full">
            {children}
        </div>
    )
}