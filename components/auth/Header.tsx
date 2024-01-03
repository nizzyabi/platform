
// interface
interface HeaderProps {
    label: string;
}

export const Header = ({
    label
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center text-black">
            <h1 className="text-4xl font-extrabold ">Login</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}