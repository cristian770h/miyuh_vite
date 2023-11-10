export default function CardInicio({ texto,vista }) {
    return (
        <div className="flex flex-row gap-1">
            <div className=" bg-white flex flex-row p-8 max-w-fit rounded-lg">
                {vista}
            </div>
            <h1 className="text-black text-xs text-left py-10">
                {texto}
            </h1>
        </div>
    );
}