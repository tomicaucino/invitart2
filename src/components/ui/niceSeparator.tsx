
const NiceSeparator = () => {
    return (
        <div className={`relative flex items-center justify-center my-2`}>
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
        <div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center">
          <div className="text-stone-400 animate-spin-slow">✿</div>
        </div>
      </div>
    )
}

export default NiceSeparator;

