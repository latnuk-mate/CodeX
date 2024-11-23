import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";

export default function AddOrRemove({addBoxes, removeBoxes, array, setArray, obj=null}){
    return(
        <div className="mt-4 flex items-center gap-4">
        <button
            id="social-add"
            onClick={() => addBoxes(array, setArray, obj)}
            className="element-btnPrimary w-full p-2 capitalize flex justify-center items-center gap-1">
                <PlusCircleIcon className="w-5 h-5" id="social-add"/>
            </button>
            <button
            id="social-remove" 
            onClick={() => removeBoxes(array, setArray)}
            className="element-btnSecondary capitalize w-full p-2 flex justify-center items-center gap-2">
                <MinusCircleIcon className="w-5 h-5" />
            </button>
        </div>
    )
}