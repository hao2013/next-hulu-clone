function HeaderItem({ Icon, title }) {
    return <div className="flex flex-col items-center group cursor-pointer sm:w-18 w-12 hover:text-white ">
        <Icon className="h-10 sm:h-15 mb-1 group-hover:animate-bounce"/>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>;
}

export default HeaderItem;
