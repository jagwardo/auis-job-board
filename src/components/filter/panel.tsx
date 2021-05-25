import { Button } from "@components/button"

const Panel = () => {
    return (
        <div className="bg-transparent">
            <div className="flex">
                <input placeholder="Keywords" />
                <input placeholder="Location" />
                <input placeholder="Job Type" />
                <input placeholder="Salary Range" />
                <Button type="button">
                    Search Jobs
                </Button>
            </div>
        </div>
    )
}

export default Panel;