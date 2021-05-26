import { Button } from "@components/button"

type IDiv = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Panel : React.FC<IDiv> = ({className=""}) => {
    return (
        <div className={`flex-1 bg-transparent px-5 ${className}`}>
            <div className="grid gap-7">
                <div className="">
                    <h1 className="text-lg font-bold text-gray-700 mb-5">Type of Employment</h1>
                    <ul className="justify-center list-none p-0 m-0 text-sm font-medium">
                    <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Full Time</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-blue-200 text-blue-500 text-xs">
                                58
                            </div>
                        </li> 
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Part Time</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                42
                            </div>
                        </li>
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Internship</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                27
                            </div>
                        </li> 
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Contract</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                73
                            </div>
                        </li> 
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Voluntary</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                10
                            </div>
                        </li> 
                    </ul>                  
                </div>

                <div className="">
                    <h1 className="text-lg font-bold text-gray-700 mb-5">Seniority Level</h1>
                    <ul className="justify-center list-none p-0 m-0 text-sm font-medium">
                    <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Student</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-blue-200 text-blue-500 text-xs">
                                58
                            </div>
                        </li> 
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Entry</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                42
                            </div>
                        </li>
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Junior</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                27
                            </div>
                        </li> 
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Senior</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                73
                            </div>
                        </li>
                        <li className="flex items-center justify-between mb-2">
                            <div className="flex items-center mr-4 mb-2 gap-2 text-gray-700">
                                <input className="transform scale-125 p-5" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" />
                                <label htmlFor="A3-yes" className="select-none">Director</label>
                            </div>
                            <div className="flex items-center rounded py-1 px-2 bg-gray-200 text-gray-500 text-xs">
                                16
                            </div>
                        </li> 
                    </ul>                  
                </div>
            </div>            
        </div>
    )
};

export default Panel;