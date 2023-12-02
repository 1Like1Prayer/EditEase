'use client'
import {Select, SelectOptionType} from "@/app/components/Select/Select";

const FONT_OPTIONS: SelectOptionType[] = [{title: 'Futura'}, {title: 'Ariel'}, {title: "David"}]

interface EditSubscriptionDialogProps {
    isOpen: boolean
}

export const EditSubscriptionDialog = ({isOpen}: EditSubscriptionDialogProps) => {

    return <div className='card text-sm'>
        <div className='grid grid-cols-2 gap-2'>
            <div className='card bg-white'>
                <div>Background Colour</div>
                <div></div>
            </div>
            <div className='card bg-white'>
                <div>Text Colour</div>
                <div></div>
            </div>
            <div className='card bg-white col-span-2'>
                Time being Said / shown: 00:43 - 01:02
            </div>
            <div className='card bg-white col-span-2 flex flex-row justify-between items-center'>
                <div>Font</div>
                <div className='flex gap-2'>
                    <Select options={FONT_OPTIONS}/>
                    <button className={"button"}>B</button>
                    <button className={"button"}><i>I</i></button>
                </div>
            </div>
            <div className='card bg-white col-span-2'>
                Alignment
            </div>
            <div className='card bg-white col-span-2'>
                Add Gif to Word
            </div>
            <div className='card bg-white col-span-2'>
                Add Sound to Word
            </div>
        </div>
    </div>

}
