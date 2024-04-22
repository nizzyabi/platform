export type UserDataProps = {
    name: string;
    email: string;
    time: string;
}

export default function UserDataCard(props: UserDataProps) {
    return (
        <div className=" flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3 ">
        <div className=" h-12 w-12 rounded-full bg-gray-100 p-1">
          <img width={200} height={200} src={`https://api.dicebear.com/8.x/notionists/svg?seed=${props.name}`} alt="avatar" />
        </div>
        <div className="text-sm">
            <p>{props.name}</p>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-slate-300/50">
                {props.email}
            </div>
        </div>
      </section>
        <p className="text-sm">{props.time}</p>
    </div>
    )
}